import React from 'react'
import AppLayout from "../components/AppLayout/AppLayout"
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { graycolor } from '../constants/color'

const Home = () => {
  return (
    <Box bgcolor={graycolor} height={"100%"}>
          <Typography variant='h5' p={"2rem"} textAlign={"center"}>
                  Select a friend to chat 
          </Typography>
    </Box>
  )
}

export default AppLayout()(Home)
