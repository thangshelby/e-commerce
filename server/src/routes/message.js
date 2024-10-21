import express from "express";
import {
  getAllChatRooms,
  addNewMessage,
  getMessagesInChatRoom,
  addNewChatRoom
} from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.get("/:adminId", getAllChatRooms);
messageRouter.post("/messages-in-chat-room", addNewChatRoom,getMessagesInChatRoom);
messageRouter.post("/new-message", addNewMessage);

export default messageRouter;
    