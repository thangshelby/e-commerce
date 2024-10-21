import { useState, useEffect,useContext,useRef } from "react";
import axioisPrivate from "../api";
import useAuthContext from "../hooks/useAuthContext";
import { messageType } from "../types";
import { SocketContext } from "../App";

function ChatBox({setShowChatBox}:{setShowChatBox:React.Dispatch<React.SetStateAction<boolean> >}) {

  const socket = useContext(SocketContext);

  const { user } = useAuthContext();

  const [formValue, setFormValue] = useState("");

  const [messages, setMessages] = useState<messageType[]>([]);

  const [chatRoomId, setChatRoomId] = useState("");

  const chatContainterRef= useRef<HTMLDivElement>(null);


  useEffect(()=>{
    axioisPrivate
    .post("/message/messages-in-chat-room", {
      userId: user.id,
      adminId: 1,
    })
    .then((res) => {
      setChatRoomId(res.data.chatRoomId);
      setMessages(res.data.response);
    });


    
    return ()=>{
      setChatRoomId('')
      setMessages([])
      setFormValue('')
    }
  },[])

  if (chatContainterRef.current){
    chatContainterRef.current.scrollTop= 20000;
  }
  useEffect(() => {
    socket?.on("newMessage", (msg: messageType) => {
      setMessages((prev) => [...prev, msg]);
    })
  }, [socket]);

  return (
    <div
      className="flex flex-col justify-between w-[350px] 
     bg-[#282c34] z-50"
    >
      <div
        className="flex flex-row bg-black items-center 
      justify-between p-[10px]"
      >
        <h1>⚛️🔥💬</h1>
        <div onClick={()=>{setShowChatBox(false)}} className="text-white">
        <i className="fa-solid fa-x "></i>
        </div>
      </div>

      <div>
        <div ref= {chatContainterRef} className="chat-room overflow-y-scroll">
          {messages.length > 0 &&
            messages.map((msg, index) => {
              return (
                <div key={index}>
                  <ChatMessage text={msg.content} uid={msg.senderId} 
                  isFirstMessage = {msg.senderId!= user.id && index!=0 && messages[index-1].senderId != msg.senderId}
                  />
                </div>
              );
            })}
        </div>

        <form
          className="form_chat-box"
          onSubmit={(e) => {
            e.preventDefault();
            axioisPrivate.post("/message/new-message", {
              chatRoomId,
              receiverId:1 ,
              senderId: user.id,
              type: "text",
              message: formValue,
            });
            setFormValue("");
          }}
        >
          <input
            className="input_chat-box"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="say something nice"
          />

          <button
            className="form_chat-box-button flex items-center justify-center"
            type="submit"
            disabled={!formValue}
          >
            🕊️
          </button>
        </form>
      </div>
    </div>
  );
}

const ChatMessage = (props: { text: string; uid: number;
  isFirstMessage:boolean }) => {
  const { user } = useAuthContext();
  const { text, uid ,isFirstMessage} = props;
  const status = uid === user.id ? "sent" : "received";
  return (
    <div className={`message ${status}`}>
      { isFirstMessage && status == "received" && (
        <img className="img_chat-box" src={"../assets/images/user.jfif"} />
      )}

      <p className={` message_chat-box 
        
        ${status != "received" && "mr-[10px]"}
        ${ !isFirstMessage&&status == "received" && "ml-[50px]"}
        `}
        >
        {text}
      </p>
    </div>
  );
};

export default ChatBox;
