import React, { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import {useChat} from "../context/ChatContext"

function ChatForm() {
  const {setMessages} = useChat()
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessages((prevState)=>[...prevState, {message, fromMe: true}])
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textInput}
          type="text"
        />
      </form>
    </div>
  );
}

export default ChatForm;
