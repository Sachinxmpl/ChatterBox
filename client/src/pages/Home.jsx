import React from 'react'
import AppLayout from "../components/AppLayout/AppLayout"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Home = () => {
  return (
    <Box bgcolor={"#ebe6e6"} height={"100%"}>
          <Typography variant='h5' p={"2rem"} textAlign={"center"}>
                  Select a freind to chat 
          </Typography>
    </Box>
  )
}

export default AppLayout()(Home)
