import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import React , {memo}from 'react'
import {Add as AddIcon, Remove as RemoveIcon} from "@mui/icons-material"

function UserItem({user  , handler , handlerIsLoading , isAdded = false}) {

    const {name , _id , avatar} = user ; 
    console.log(_id)
    const avatarIndex = Math.floor(Math.random() * avatar.length)
    let avatarUrl = avatar[avatarIndex]

  return (
        <>
                <ListItem>
                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} width={"100%"}>
                            <Avatar src={avatarUrl}/>
                            <Typography variant={"body"}
                            sx={{
                                flexGlow : 1  , 
                                display : "-webkit-box" , 
                                WebkitLineClamp : "vertical" , 
                                overflow : "hidden" , 
                                textOverflow : "ellipsis",
                                width : "100%"
                            }}
                            >{name}</Typography>
                            <IconButton
                            size='small'
                            sx={{
                                bgcolor : isAdded ? "error.main" :"primary.main" , 
                                color : "white" , 
                                "&:hover":{
                                    bgcolor : isAdded ? "error.dark" :"primary.main" , 
                                }
                            }}
                            onClick={()=>handler(_id)} disabled={handlerIsLoading}>
                                {
                                    isAdded?<RemoveIcon/>  : <AddIcon/>
                                }
                                 
                            </IconButton>
                    </Stack>
                </ListItem>
        </>
  )
}

export default memo(UserItem)