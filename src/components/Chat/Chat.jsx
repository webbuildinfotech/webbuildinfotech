import React, { useState } from 'react';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat UI
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Predefined chatbot responses
  const predefinedResponses = {
    hello: "Hi there! How can I assist you today?",
    help: "Sure, let me know your query!",
    bye: "Goodbye! Take care!",
    default: "Sorry, I didn't understand that. Can you rephrase?",
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user's message
      const userMessage = { text: input, sender: 'user' };
      setMessages((prev) => [...prev, userMessage]);

      // Add bot's response
      const lowerInput = input.toLowerCase();
      const botResponse = predefinedResponses[lowerInput] || predefinedResponses.default;
      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);

      // Clear input field
      setInput('');
    }
  };

  return (
    <div>
      {/* Avatar Icon */}
      {!isChatOpen && (
        <div
          onClick={() => setIsChatOpen(true)} // Open chat UI on click
          className="fixed bottom-30 right-4 bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer shadow-lg hover:bg-blue-600 transition-all"
        >
          <img
            src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-2478937557.jpg"
            alt="Chat Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      )}

      {/* Chat UI */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 w-80">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <div className="flex items-center">
              <img
                src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-2478937557.jpg"
                alt="Chat Avatar"
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <span className="font-bold">Chatbot</span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)} // Close chat UI
              className="text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-64 overflow-y-auto border-b border-gray-300 mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <img
                    src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-2478937557.jpg"
                    alt="Bot Avatar"
                    className="w-6 h-6 rounded-full object-cover mr-2"
                  />
                )}
                <div
                  className={`px-3 py-2 rounded-lg ${
                    msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex">
            <input
              type="text"
              className="flex-grow border rounded-l px-3 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
