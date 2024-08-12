import React from "react";
import Title from "../../shared/Title";
import Header from "./Header";
import { Grid  , Skeleton, Stack} from "@mui/material";

export const LayoutLoader = ()=>{
    return (
        <>
            <Title title="ChatterBox" description="Chat now easily "/>
            <Header/>

            <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"} >
                <Grid item sm={4} md={3} sx={{
                    display: {
                        xs: "none",
                        md: "block"
                    }
                }} height={"100%"}>
                        <Skeleton variant="rectangular" height={"100vh"}/>
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                    <Stack spacing={"1rem"}>
                        {
                            Array.from({length: 11}).map((_,index)=>{
                                return (
                                    <Skeleton key={index} variant="rectangular" height={50}/>
                                )
                            })
                        }
                    </Stack>
                </Grid>
                <Grid item sm={4} md={4} lg={3}  sx={{
                    display: {
                        xs: "none",
                        sm: "block"
                    } , 
                    padding: "2rem" , 
        
                }} height={"100%"} >
                     <Skeleton variant="rectangular" height={"100vh"}/>
                </Grid>
            </Grid>


        </>
    )
}

