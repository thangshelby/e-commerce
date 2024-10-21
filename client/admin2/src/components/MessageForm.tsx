import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import axiosPrivate from "../api";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId,userId } = props;

  const handleChange = (event) => {
    setValue(event.target.value);


    // isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    axiosPrivate.post("/message/new-message", {
      receiverId:userId,
      senderId: 1,
      chatRoomId: chatId,
      type: "text", 
      message:value,
    })

    setValue("");
  };

  const handleUpload = (event) => {
    // sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form
      className="message-form flex flex-row justify-between items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <div>
        <label htmlFor="upload-button" className="text-black">
          <InsertPhotoIcon />
        </label>
        <input
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleUpload.bind(this)}
        />

        <button type="submit" className="send-button">
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
