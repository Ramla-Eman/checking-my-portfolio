import React from "react";
import ChatBotIcon from "./ChatBotIcon";

const ChatMessage = ({ chat }) => {
  return (
    <div
      className={`flex gap-[11px] items-end ${
        chat.role === "model" ? "bot flex-row" : "user flex-row-reverse"
      } ${chat.isError ? "error" : ""}`}
    >
      {chat.role === "model" && <ChatBotIcon />}
      <p
        className={`bg-${chat.role === "model" ? "[#f6f2ff]" : "[#EEE25A]"} 
                        text-[#5a2b05] p-1 max-w-[75%] font-semibold rounded-[7px] 
                        break-words whitespace-pre-line text-lg`}
      >
        {chat.text}
      </p>
    </div>
  );
};

export default ChatMessage;
