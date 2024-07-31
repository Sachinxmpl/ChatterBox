import React from 'react'
import ChatItem from '../shared/ChatItem'
import { Stack } from '@mui/material'

function ChatList({w = "100%" , chats=[] , chatId , onlineUsers=[] , newMessagesAlert=[{
    chatId : "" , 
    count : 0 , 
}] , handleDeleteChat}) {
  return (
    <Stack width={w}>
            {
                chats.map((data)=>{
                    return(
                       <ChatItem/>
                    )
                })
            }
    </Stack>
  )
}

export default ChatList