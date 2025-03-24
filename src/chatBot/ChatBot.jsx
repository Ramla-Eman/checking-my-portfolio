import React, { useRef, useState, useEffect } from "react";
import ChatBotIcon from "./ChatBotIcon";
import { BsChevronDown } from "react-icons/bs";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { MdOutlineClose, MdModeComment } from "react-icons/md";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // helper function to update chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    // format chat history for api request
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };

    try {
      // make the api call to get the bot's response
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something Went Wrong!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  //   auto scroll whenever chat history updates
  useEffect(() => {
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className="z-50">
      {/* Chat-bot tooggler */}
      <button
        onClick={() => setShowChatBot((prev) => !prev)}
        className="fixed md:bottom-8 md:right-9 right-5 bottom-18 border-none h-[50px] w-[50px] flex cursor-pointer rounded-full bg-[#EEE25A] items-center justify-center z-50"
      >
        <span
          className={`absolute text-[#5a2b05] text-2xl transform transition-transform duration-300 
                      ${showChatBot ? "rotate-180" : "rotate-0"}`}
        >
          {showChatBot ? <MdOutlineClose /> : <MdModeComment />}
        </span>
      </button>
      {/* chatbot-popup */}
      <div
        className={`bg-white md:w-[420px] w-full md:h-auto h-full md:rounded-[15px] shadow-2xl overflow-hidden z-50 fixed right-0 bottom-0 md:bottom-[90px] md:right-[35px] transition-all origin-bottom-right ${
          showChatBot
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-0"
        }`}
      >
        {/* ChatBot Header */}
        <div className="bg-[#EEE25A] flex items-center justify-between py-3.5 px-5">
          {/* Header info */}
          <div className="flex gap-2.5 items-center ">
            <ChatBotIcon />
            <h2 className="font-semibold text-[#5a2b05] text-2xl">Chatbot</h2>
          </div>
          <span
            onClick={() => setShowChatBot((prev) => !prev)}
            className="bg-[#ee6f1a] hover:bg-[#FE8638] p-2 cursor-pointer text-xl rounded-full transition-all duration-300"
          >
            <BsChevronDown />
          </span>
        </div>

        {/* ChatBot Body */}
        <div
          ref={chatBodyRef}
          className="md:py-6 md:px-5 pt-[25px] pb-[25px] pl-[15px] pr-[15px] md:h-[460px] h-[calc(90%-55px)] overflow-y-auto flex flex-col gap-5 mb-[82px]"
        >
          {/* message bot-message */}
          {/* <div className="flex gap-[11px] items-center">
            <div>
              <ChatBotIcon />
            </div>
            <p className="bg-[#f6f2ff] text-[#5a2b05] p-1 max-w-[75%] rounded-bl-xs rounded-[7px] font-semibold break-words whitespace-pre-line text-lg">
              Hey there <br /> How can I halp you today?
            </p>
          </div> */}
          {/* message user-message == Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* ChatBot footer */}
        <div className="absolute bottom-0 w-full bg-white md:px-5 px-2.5 md:pt-6 pt-[15px] md:pb-3.5 pb-[15px]">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
