import React, { useState } from "react";
import classes from "./ChatPage.module.css";
import cn from "classnames";
import { IoMdSend } from "react-icons/io";

const ChatPage = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "John Tech",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      lastMessage: "Thanks for the help!",
      timestamp: "2 min",
    },
    {
      id: 2,
      name: "Sarah Code",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      lastMessage: "See you tomorrow",
      timestamp: "1 hour",
    },
    {
      id: 3,
      name: "Design Team",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      lastMessage: "Project looks great!",
      timestamp: "3 hours",
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Tech",
      text: "Hey! How's the project going?",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Pretty good, almost done with the designs",
      timestamp: "10:32 AM",
      isSent: true,
    },
    {
      id: 3,
      sender: "John Tech",
      text: "Great! Let me review them",
      timestamp: "10:35 AM",
      isSent: false,
    },
    {
      id: 4,
      sender: "You",
      text: "I'll send them over in a bit",
      timestamp: "10:36 AM",
      isSent: true,
    },
    {
      id: 5,
      sender: "John Tech",
      text: "Thanks for the help!",
      timestamp: "10:40 AM",
      isSent: false,
    },
  ]);
  const [messageInput, setMessageInput] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        text: messageInput,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  return (
    <main className={cn(classes.container, "container")}>
      <div className={classes.chatWrapper}>
        {/* Conversations Sidebar */}
        <aside className={classes.sidebar}>
          <div className={classes.sidebarHeader}>
            <h2>Messages</h2>
          </div>
          <div className={classes.conversationsList}>
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={cn(classes.conversationItem, {
                  [classes.active]: selectedConversation.id === conversation.id,
                })}
                onClick={() => setSelectedConversation(conversation)}
              >
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className={classes.avatar}
                />
                <div className={classes.conversationInfo}>
                  <p className={classes.conversationName}>
                    {conversation.name}
                  </p>
                  <p className={classes.lastMessage}>
                    {conversation.lastMessage}
                  </p>
                </div>
                <span className={classes.timestamp}>
                  {conversation.timestamp}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Area */}
        <div className={classes.chatArea}>
          {/* Chat Header */}
          <div className={classes.chatHeader}>
            <div className={classes.headerInfo}>
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.name}
                className={classes.headerAvatar}
              />
              <div>
                <h3>{selectedConversation.name}</h3>
                <p>Active now</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className={classes.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(classes.message, {
                  [classes.sent]: message.isSent,
                  [classes.received]: !message.isSent,
                })}
              >
                <div className={classes.messageBubble}>
                  <p className={classes.messageText}>{message.text}</p>
                  <span className={classes.messageTime}>
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className={classes.inputForm}>
            <input
              type="text"
              placeholder="Type a message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className={classes.messageInput}
            />
            <button type="submit" className={classes.sendBtn}>
              <IoMdSend />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
