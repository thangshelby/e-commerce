

const TheirMessage = ({ message, isFirstMessageByUser }:{message:{content:string},isFirstMessageByUser:boolean}) => {


  return (
    <div className="flex flex-row  items-center mx-[12px] my-[4px]">
      {isFirstMessageByUser && (
        <img
          src={"../../assets/images/user.jfif"}
          alt="message-attachment"
          className="message-image "
        />
      )}

      <div
        className={`message bg-[#CABCDC] p-[8px] rounded-[10px] ${
          isFirstMessageByUser ? "ml-[4px]" : "ml-[34px]"
        } `}
      >
        {message.content}
      </div>
    </div>
  );
};

export default TheirMessage;
