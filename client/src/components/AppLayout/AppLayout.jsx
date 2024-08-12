import React from 'react'
import Title from '../../shared/Title'
import { Grid } from '@mui/material'
import Header from './Header'
import ChatList from '../../smallComps/Chatlist'
import {Samplechats} from "../../constants/sampleChat"
import {useParams} from "react-router-dom"
import Profile from '../../smallComps/Profile'

const AppLayout = () => (WrappedComponent) => {
    
    const handleDeleteChat = (e, _id, groupChat) => {
        e.preventDefault()
        console.log("delete chat")
    }

    return (props) => {

        const {chatId} = useParams()
        return (
            <>
                <Title title="ChatterBox" />
                <Header/>

                <Grid container height={"calc(100vh - 4rem)"} >
                    <Grid item sm={4} md={3} sx={{
                        display: {
                            xs: "none",
                            md: "block"
                        } 
                    }} height={"100%"}>
                        <ChatList
                        chats={Samplechats}
                        chatId={chatId}
                        newMessagesAlert={[{
                            chatId : "1"  , 
                            count : "4" 
                        } , {
                            chatId : "2" , 
                            count : "2"
                        }]}
                        onlineUsers = {["1","2"]}
                        handleDeleteChat={handleDeleteChat}
                         />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} >
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item sm={4} md={4} lg={3}  sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        } , 
                        padding: "2rem" , 
                        backgroundColor: "black"
                    }} height={"100%"} >
                        <Profile/>
                    </Grid>
                </Grid>


            </>
        )
    }
}

export default AppLayout