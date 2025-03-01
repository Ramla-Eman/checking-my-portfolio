import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // update chat history with user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // delay 600 ms before showing "thinking.." and generating respinse
    setTimeout(() => {
      // add a "Thinking...." placeholder for the bot's response
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Thinking..." },
      ]);

      // call the function to generate the bot's response
      generateBotResponse([
        ...chatHistory,
        { role: "user", text: userMessage },
      ]);
    }, 600);
  };

  return (
    <form
      action="#"
      onSubmit={handleFormSubmit}
      className="flex items-center bg-white outline-1 outline-[#cccce5] rounded-4xl focus-within:border-2 focus-within:border-[#ee6f1a] shadow"
    >
      <input
        type="text"
        placeholder="Message..."
        ref={inputRef}
        required
        className="chatInput border-none outline-none bg-none h-[47px] placeholder:text-[#5a2b05] text-[#5a2b05] px-4 text-xl w-full"
      />
      <button>
        <FaArrowUp className="chatButton w-[35px] h-[35px] bg-[#ee6f1a] hover:bg-[#FE8638] p-2 cursor-pointer rounded-full transition-all duration-300 mr-1.5" />
      </button>
    </form>
  );
};

export default ChatForm;
