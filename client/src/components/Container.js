import React, {useEffect} from 'react'
import ChatList from "./ChatList"
import ChatForm from "./ChatForm"
import "../App.css";
import {init, subscribeChat,subscribeInitialMessages} from "../socketApi"
import {useChat} from "../context/ChatContext"

function Container() {
    const {setMessages} = useChat();
    useEffect(() => {
     init();

     subscribeInitialMessages((messages)=>{
        setMessages(messages)
     })

     subscribeChat((message)=>{
         setMessages((prevState)=>[...prevState, {message}])
     })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="App" >
            <ChatList/>
            <ChatForm />
        </div>
    )
}

export default Container
