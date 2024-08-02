import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LinkedComponent } from "../components/styled/Link";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";

function ChatItem({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) {
  return (
    <>
      <LinkedComponent
        to={`/chat/${_id}`}
        sx={{ padding: "0rem" }}
        onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            alignItems: "center",
            backgroundColor: sameSender ? "black" : "unset",
            color: sameSender ? "white" : "unset",
            position: "relative",
          }}
        >
         

           <AvatarCard avatar={avatar} />

          <Stack>
            <Typography>{name}</Typography>
            {newMessageAlert && (
              <Typography>{newMessageAlert.count} New Message</Typography>
            )}
          </Stack>
          {isOnline && (
            <Box
              sx={{
                position: "absolute",
                top: "10",
                right: "15px",
                width: "1.10rem",
                height: "1.10rem",
                backgroundColor: "green",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>
          )}
        </div>
      </LinkedComponent>
    </>
  );
}

export default memo(ChatItem);
