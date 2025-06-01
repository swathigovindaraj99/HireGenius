import React, { useState } from 'react';
import { useScore } from "../context/ScoreContext";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const { latestScore } = useScore();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    handleBotResponse(input);
    setInput('');
  };

  const handleBotResponse = async (inputText) => {
    let reply = '';

    // Local recommendation handling
    if (inputText.toLowerCase().includes('recommend')) {
      if (latestScore <= 6) {
        reply = `You should improve your skills. Focus on:
- JavaScript basics
- Data structures
- React fundamentals.`;
      } else if (latestScore <= 12) {
        reply = `Good progress! Try:
- React Hooks
- State management (Context/Redux)
- API integration.`;
      } else {
        reply = `Excellent! You're eligible for roles like:
- Frontend Developer
- React Developer
- Junior Software Engineer. 🚀`;
      }
    } else {
      // Otherwise — send message to backend
      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: inputText }),
        });

        const data = await response.json();
        reply = data.reply;
      } catch (error) {
        console.error('Error communicating with server:', error);
        reply = "Oops! Server issue — try again later.";
      }
    }

    const botMessage = { text: reply, sender: 'bot' };
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setOpen(true)}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
