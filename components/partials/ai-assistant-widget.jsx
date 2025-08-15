"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon";
import useTwTheme from "@/hooks/useTwTheme";
import useDarkMode from "@/hooks/useDarkMode";

const AIAssistantWidget = () => {
  const { isTwThemeEnabled } = useTwTheme();
  const [isDark] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "system",
      content: "Get answers to your Navixy questions with Navixy AI Assistant — your always-on Q&A tool providing instant guidance, feature explanations, and helpful recommendations about our platform.",
      timestamp: "12:54 PM"
    },
    {
      type: "system", 
      content: "Start typing to get answers about Navixy",
      timestamp: "12:54 PM"
    }
  ]);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        type: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "ai",
          content: "Thank you for your question! I'm here to help you with Navixy platform information. How can I assist you today?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className={`mb-4 w-80 md:w-96 h-96 rounded-2xl shadow-2xl overflow-hidden ${isTwThemeEnabled ? 'bg-white dark:bg-twNavy-800' : 'bg-white dark:bg-slate-800'} border ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-600' : 'border-gray-200 dark:border-slate-600'}`}>
          
          {/* Header */}
          <div className={`px-4 py-3 flex items-center justify-between ${isTwThemeEnabled ? 'bg-twBlue-600' : 'bg-blue-600'} text-white`}>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isTwThemeEnabled ? 'bg-twNavy-700' : 'bg-slate-700'}`}>
                <Icon icon="heroicons:sparkles" className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold text-sm ${isTwThemeEnabled ? 'font-lexend' : ''}`}>Navixy AI assistant</h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`p-1 rounded hover:bg-white/20 transition-colors ${isDark ? 'text-yellow-300' : 'text-white'}`}>
                <Icon icon={isDark ? "heroicons:sun" : "heroicons:moon"} className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="space-y-2">
                {msg.type === "system" && (
                  <div className={`p-3 rounded-lg ${isTwThemeEnabled ? 'bg-twBrand-ghost dark:bg-twNavy-700' : 'bg-gray-50 dark:bg-slate-700'}`}>
                    <p className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-twBlue-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                      {msg.content}
                    </p>
                    <span className={`text-xs ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-twBlue-300' : 'text-gray-500 dark:text-gray-400'} mt-1 block`}>
                      {msg.timestamp}
                    </span>
                  </div>
                )}
                {msg.type === "user" && (
                  <div className="flex justify-end">
                    <div className={`max-w-xs p-3 rounded-lg ${isTwThemeEnabled ? 'bg-twBlue-500' : 'bg-blue-500'} text-white`}>
                      <p className={`text-sm ${isTwThemeEnabled ? 'font-proximaNova' : ''}`}>{msg.content}</p>
                      <span className="text-xs text-white/80 mt-1 block">{msg.timestamp}</span>
                    </div>
                  </div>
                )}
                {msg.type === "ai" && (
                  <div className="flex justify-start">
                    <div className={`max-w-xs p-3 rounded-lg ${isTwThemeEnabled ? 'bg-twNavy-100 dark:bg-twNavy-700' : 'bg-gray-100 dark:bg-slate-700'}`}>
                      <p className={`text-sm ${isTwThemeEnabled ? 'text-twNavy-700 dark:text-twBlue-200 font-proximaNova' : 'text-gray-700 dark:text-gray-200'}`}>
                        {msg.content}
                      </p>
                      <span className={`text-xs ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-twBlue-300' : 'text-gray-500 dark:text-gray-400'} mt-1 block`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Auto scroll target */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${isTwThemeEnabled ? 'border-twNavy-200 dark:border-twNavy-600' : 'border-gray-200 dark:border-slate-600'}`}>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Write a message..."
                className={`flex-1 px-3 py-2 rounded-lg border text-sm ${isTwThemeEnabled ? 'border-twNavy-200 focus:border-twBlue-500 bg-white dark:bg-twNavy-700 dark:border-twNavy-600 text-twNavy-700 dark:text-white font-proximaNova' : 'border-gray-300 focus:border-blue-500 bg-white dark:bg-slate-700 dark:border-slate-600 text-gray-700 dark:text-gray-200'} focus:outline-none focus:ring-1 ${isTwThemeEnabled ? 'focus:ring-twBlue-500' : 'focus:ring-blue-500'}`}
              />
              <button
                onClick={handleSendMessage}
                className={`p-2 rounded-lg transition-colors ${isTwThemeEnabled ? 'bg-twBlue-500 hover:bg-twBlue-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                <Icon icon="heroicons:paper-airplane" className="w-4 h-4" />
              </button>
            </div>
            
            {/* Footer */}
            <div className="mt-3 text-center">
              <p className={`text-xs ${isTwThemeEnabled ? 'text-twNavy-500 dark:text-twBlue-300 font-proximaNova' : 'text-gray-500 dark:text-gray-400'}`}>
                Need more help or a custom solution?{" "}
                <button className={`${isTwThemeEnabled ? 'text-twBlue-600 hover:text-twBlue-700' : 'text-blue-600 hover:text-blue-700'} font-medium`}>
                  Reach out
                </button>{" "}
                to our team.
              </p>
              <div className="flex justify-center mt-2">
                <span className={`text-xs px-2 py-1 rounded ${isTwThemeEnabled ? 'bg-twNavy-100 text-twNavy-600 dark:bg-twNavy-700 dark:text-twBlue-300' : 'bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-gray-400'}`}>
                  0/1000
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${isTwThemeEnabled ? 'bg-twBlue-600 hover:bg-twBlue-700' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {isOpen ? (
          <Icon icon="heroicons:x-mark" className="w-6 h-6 text-white" />
        ) : (
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isTwThemeEnabled ? 'bg-twNavy-700' : 'bg-slate-700'}`}>
            <Icon icon="heroicons:sparkles" className="w-5 h-5 text-white" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistantWidget;
