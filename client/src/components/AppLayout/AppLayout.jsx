import React from 'react'
import Title from '../../shared/Title'
import { Grid } from '@mui/material'
import Header from './Header'
import ChatList from '../../smallComps/Chatlist'


const AppLayout = () => (WrappedComponent) => {
    return (props) => {
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
                        <ChatList chats={[1,2,3,4,5,6]}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} bgcolor="primary.main">
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item sm={4} md={4} lg={3}  sx={{
                        display: {
                            xs: "none",
                            sm: "block"
                        } , 
                        padding: "2rem" , 
                        backgroundColor: "red"
                    }} height={"100%"} >
                        Hi
                    </Grid>
                </Grid>


            </>
        )
    }
}

export default AppLayout