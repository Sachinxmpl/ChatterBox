import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/AppLayout/AppLayout'
import InputBox from '../components/styled/InputBox'
import { graycolor } from '../constants/color'
import FileMenu from '../smallComps/FileMenu'
import MessageComponent from '../shared/MessageComponent'
import {sampleMessage} from "../constants/sampleMessage"


function Chat() {

  const sampleUser = {
    name : "Sachin khatri" , 
    _id : "1"
  }

  const containerRef = useRef(null)
  const fileMenuRef = useRef(null)

  return (  
    <Fragment>
      <Stack ref={containerRef} 
          boxSizing={"border-box"}
          padding={"1rem"}
          spacing={"1rem"}
          height={"90%"}
          bgcolor={graycolor}
          sx={{
            overflowX : "hidden" , 
            overflowY : "auto",
          }}
      >
                {
                  sampleMessage.map((message)=>{
                    return (
                          <MessageComponent message={message}user={sampleUser} />
                    )
                  })
                }
      </Stack>

      <form style={{
        height : "10%" , 
        width : "100%"
      }}>
              <Stack 
                    direction={"row"}
                    height={"100%"}
                    width={"100%"}
                    alignItems={"center"}
                    position={"relative"}
                    padding={"1rem"}
               
               >
                    <IconButton
                          sx={{
                            position : "absolute" , 
                            left : "1.5rem" , 
                            rotate : "30deg",
                          }}
                          ref={fileMenuRef}
                    >
                            <AttachFileIcon/>
                    </IconButton>
                    <InputBox placeholder='Type Message Here '/>
                    <IconButton
                         type='submit'
                         sx={{
                              bgcolor : "#ea7070" , 
                              color : "white" ,
                              paddingLeft : "0.5rem" , 
                              rotate : "-20deg" , 
                              "&:hover":{
                                bgcolor : "error.dark"
                              }
                         }}>
                              <SendIcon/>
                    </IconButton>
              </Stack>
      </form>
      <FileMenu />
    </Fragment>
  )
}

export default AppLayout()(Chat)