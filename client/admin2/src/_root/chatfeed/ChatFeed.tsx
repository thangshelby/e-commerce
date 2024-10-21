import {
  MyMessage,
  TheirMessage,
  MessageForm,
} from "../../components/index.ts";
import axiosPrivate from "../../api/index.ts";
import { useState, useEffect, useContext, useRef } from "react";
import { SocketContext } from "../../App.tsx";
import { messageType, chatRoomType } from "../../type/index.tsx";

const ChatFeed = () => {

  const socket = useContext(SocketContext);
  const [chatRooms, setChatRooms] = useState<chatRoomType[]>([]);
  const [messages, setMessages] = useState<messageType[]>([]);
  const [currentChatRoom, setCurrentChatRoom] = useState<chatRoomType>();
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    axiosPrivate.get("/message/1").then((response) => {
      setChatRooms(response.data.response);
      setCurrentChatRoom(response.data.response[0]);

      axiosPrivate
        .post("/message/messages-in-chat-room", {
          userId: response.data.response[0].userId,
          adminId: 1,
        })
        .then((response) => {
          setMessages(response.data.response);
        });
    });
  }, []);

  useEffect(() => {
    if (currentChatRoom) {
      axiosPrivate
        .post("/message/messages-in-chat-room", {
          userId: currentChatRoom.userId,
          adminId: 1,
        })
        .then((response) => {
          setMessages(response.data.response);
        });
    }
  }, [currentChatRoom]);

  if (chatRef.current) {
    chatRef.current.scrollTop = 100000;
  }
  useEffect(() => {
    socket?.on("newMessage", (data: messageType) => {
      setMessages((prev) => {
        return [...prev, data];
      });
    });
    if (chatRef.current) {
      chatRef.current.scrollTop = 100000;
    }
  }, [socket]);

  // const renderReadReceipts = (message, isMyMessage) =>
  //   chat.people.map(
  //     (person, index) =>
  //       person.last_read === message.id && (
  //         <div
  //           key={`read_${index}`}
  //           className="read-receipt"
  //           style={{
  //             float: isMyMessage ? "right" : "left",
  //             backgroundImage:
  //               person.person.avatar && `url(${person.person.avatar})`,
  //           }}
  //         />
  //       )
  //   );

  const renderMessages = () => {
    return messages.map((message, index) => {
      const isMyMessage = message.senderId == 1 ? true : false;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                isFirstMessageByUser={
                  index == 0 || messages[index - 1].senderId != message.senderId
                    ? true
                    : false
                }
                message={message}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {/* {renderReadReceipts(message, isMyMessage)} */}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-row ">
      <div className="ce-chat-list">
        <div className="ce-chats-container ">
          <div className="ce-chat-form-container">
            <div className="bg-[#7554a0] w-full"></div>
          </div>

          {chatRooms.map((chatRoom) => (
            <div
              key={chatRoom.id}
              onClick={() => setCurrentChatRoom(chatRoom)}
              className={`ce-chat-card ${
                chatRoom.id == currentChatRoom?.id && "ce-active-chat-card"
              }`}
            >
              <div className="ce-chat-title-text">{chatRoom.userName}</div>
              <div className="ce-chat-subtitle-text">Say Hello</div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT FEED */}
      <div className="w-full ">
        {currentChatRoom && (
          <div className="chat-feed h-[530px]  ">
            <div className="chat-title-container">
              <div className="chat-title">{currentChatRoom.userName}</div>

              {/* <div className="chat-subtitle">Ngo Thang</div> */}
            </div>
            <div ref={chatRef} className=" max-h-[380px] overflow-y-auto">
              {renderMessages()}
            </div>

            <div className="message-form-container">
              <MessageForm
                chatId={currentChatRoom.id}
                userId={currentChatRoom.userId}
              />
            </div>
          </div>
        )}
      </div>

      {/* <div className="ce-settings">
          <div className="ce-settings-container">
            <div className="ce-chat-settings-container">
              slakdjaskl
            </div>
          </div>
  
      </div> */}
    </div>
  );
};

export default ChatFeed;
