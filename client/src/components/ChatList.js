import React from 'react';
import {useChat} from "../context/ChatContext"
import styles from "./styles.module.css"
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed';

function ChatList() {
    const {messages} = useChat()
    
    return (
        <ScrollableFeed className={styles.chatlist} forceScroll={true}>
            <div>
           {messages.map((item, index)=><ChatItem key={index} item={item}></ChatItem>)}
        </div>
        </ScrollableFeed>
    )
}

export default ChatList
