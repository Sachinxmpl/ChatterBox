import React, { Fragment } from 'react'
import AppLayout from '../components/AppLayout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { useRef } from 'react'
import { graycolor } from '../constants/color'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import InputBox from '../components/styled/InputBox'
function Chat() {
  const containerRef = useRef(null)

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

      </Stack>
      <form style={{
        height : "10%"
      }}>
              <Stack>
                    <IconButton>
                            <AttachFileIcon/>
                    </IconButton>
                    <InputBox/>
                    <IconButton>
                              <SendIcon/>
                    </IconButton>
              </Stack>
      </form>
    </Fragment>
  )
}

export default AppLayout()(Chat)