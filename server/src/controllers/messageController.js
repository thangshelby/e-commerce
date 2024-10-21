import SSMSModel from "../database/model/MyModel.js";
import { getSocketIdFromUserId, io } from "../socket/index.js";

export const getAllChatRooms = async (req, res) => {
  const adminId = req.params.adminId;
  const AccountModel = new SSMSModel();
  try {
    const chatRooms = await AccountModel.Read(
      "CHAT_ROOM",
      "CHAT_ROOM.ID,CHAT_ROOM.USER_ID,SITE_USER.FIRST_NAME,SITE_USER.LAST_NAME",
      `JOIN SITE_USER ON CHAT_ROOM.USER_ID =SITE_USER.ID  WHERE ADMIN_ID=${adminId}`
    );
    const response = [];
    for (let i = 0; i < chatRooms.length; i++) {
      response.push({
        id: chatRooms[i].ID,
        userId: chatRooms[i].USER_ID,
        userName: chatRooms[i].LAST_NAME + " " + chatRooms[i].FIRST_NAME,
      });
    }

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addNewChatRoom = async (req, res, next) => {
  const chatRoomModel = new SSMSModel();
  const { userId, adminId } = req.body;

  try {
    const checkRoomExist = await chatRoomModel.Read(
      "CHAT_ROOM",
      "*",
      `WHERE ADMIN_ID = ${adminId} AND USER_ID = ${userId} `
    );

    if (checkRoomExist.length > 0) {
      req.chatRoomId = checkRoomExist[0].ID;
      return next();
    }

    const newRoom = await chatRoomModel.Create(
      "CHAT_ROOM",
      `${adminId},${userId}`
    );

    req.chatRoomId = newRoom.ID;

    return next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMessagesInChatRoom = async (req, res) => {
  const chatRoomId = req.chatRoomId;
  console.log(chatRoomId);
  const AccountModel = new SSMSModel();
  try {
    const response = await AccountModel.Read(
      "MESSAGE",
      "*",
      `WHERE CHAT_ROOM_ID=${chatRoomId}`
    );
    const newResponse = [];
    for (let i = 0; i < response.length; i++) {
      newResponse.push({
        id: response[i].ID,
        chatRoomId: response[i].CHAT_ROOM_ID,
        senderId: response[i].SENDER_ID,
        type: response[i].TYPE,
        content: response[i].CONTENT,
      });
    }

    return res.status(200).json({ response: newResponse, chatRoomId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const addNewMessage = async (req, res) => {
  const messageModel = new SSMSModel();
  try {
    const { chatRoomId, senderId, receiverId, type, message } = req.body;
    console.log(senderId, receiverId);
    const newMessage = await messageModel.Create(
      "MESSAGE",
      `${chatRoomId},${senderId},N'${type.toUpperCase()}',N'${message}'`,
      "CHAT_ROOM_ID,SENDER_ID,TYPE,CONTENT"
    );
    io.to([
      getSocketIdFromUserId(senderId),
      getSocketIdFromUserId(receiverId),
    ]).emit("newMessage", {
      id: newMessage.ID,  
      chatRoomId,
      senderId,
      type: type.toUpperCase(),
      content: message,
    });

    return res.status(200).json({ message: "Message added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
