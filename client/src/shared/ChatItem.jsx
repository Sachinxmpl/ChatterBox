import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { LinkedComponent } from "../components/styled/Link"
import { Box, Stack, Typography } from '@mui/material'

function ChatItem({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) {
  return (
    <>
      <LinkedComponent to={`/chat/${_id}`}  oncontextmenu={(e)=> handleDeleteChatOpen(e, _id , groupChat)}>
        <div style={{
          display: "flex",
          gap : "1rem",
          padding: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}>

                <Stack>
                    <Typography>
                              {name}
                    </Typography>
                    {
                          newMessageAlert && (
                            <Typography>
                                  {newMessageAlert.count} New Message 
                              </Typography>
                          )
                    }
                </Stack>
                {
                      isOnline && (
                        <Box sx={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          width: "1.5rem",
                          height: "1.5rem",
                          backgroundColor: "green",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                          <Typography>
                            Online
                          </Typography>
                        </Box>  
                      )
                }
        </div>

      </LinkedComponent>
    </>
  )
}

export default memo(ChatItem) 