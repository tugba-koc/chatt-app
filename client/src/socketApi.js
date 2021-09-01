import {io} from "socket.io-client"

const socket = io("http://localhost:3000", {
    transports: ["websocket"],
});

export const init = () => {
  console.log("connecting ...");
  
  socket.on("connect", () => {
    console.log("connected");
  });
};

export const sendMessage =(message)=>{
if(socket) socket.emit("new-message", message)
}


export const subscribeChat =(cb)=>{
  if(!socket) return ;

  socket.on("receive-message",(message)=>{
    console.log("yeni mesaj geldi.", message);
    cb(message)
  })
}

export const subscribeInitialMessages =(cb)=>{
  if(!socket) return ;

  socket.on("message-list",(messages)=>{
    console.log("initial", messages);
    cb(messages)
  })
}

