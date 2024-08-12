import React from "react";
import ChatItem from "../shared/ChatItem";
import { Stack } from "@mui/material";

function ChatList({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "1",
      count: 4,
    },
  ],
  handleDeleteChat,
}) {
  return (
    <Stack width={w}>
      {chats.map((data , index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessage = newMessagesAlert.find(({ chatId }) => chatId == _id);

        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessage}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId===_id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
}

export default ChatList;
