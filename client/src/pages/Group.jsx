import React, { memo } from "react";
import { Drawer, Grid, IconButton,Tooltip, Typography } from "@mui/material";
import { KeyboardBackspace as KeyboardBackspaceIcon  , Menu as MenuIcon} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
import {LinkedComponent} from "../components/styled/Link";
import AvatarCard from "../shared/AvatarCard";
import {Samplechats} from "../constants/sampleChat";

const IconbtnCompoment = ({handleMobile ,navigateBack}) => {
  return (
    <Box>
      <IconButton
          sx={{
            display : {
              xs : "block" , 
              sm : "none" , 
              position : "fixed" , 
              right : "1rem" , 
              top : "1rem" , 
            } , 
            color : "black" , 
            fontSize : "3rem"
          }}
        onClick={handleMobile}
      >
            <MenuIcon/>
      </IconButton>


      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0 , 0 , 0 , 0.8)",
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

function Group() {

  const chatId = "1" ; 

  const [isMobileMenu , setIsMobileMenu] = useState(false)
  const handleMobile = () =>{
        setIsMobileMenu((prev)=>!prev)
  }
  const handleMobileClose = () =>{
        setIsMobileMenu(false)
  }
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/");
  };


  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          sm={4}
          bgcolor={"#ECDFCC"}
        >
                <GroupList myGroups={Samplechats} chatId={chatId}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            padding: "1rem 3rem",
            alignItems: "center",
          }}
        >
          <IconbtnCompoment  navigateBack = {navigateBack} handleMobile={handleMobile} />
        </Grid>


          <Drawer open={isMobileMenu} onClose={handleMobileClose}
              sx={{
                display : {
                  xs : "block" , 
                  sm : "none" , 
                }
              }}
          >
                  <GroupList/>
          </Drawer>

      </Grid>
    </>
  );
}



const GroupList = ({w="100%" ,myGroups=[] , chatId })=>{
      return (
        <Stack>
              {
                  myGroups.length >0 ? (
                    myGroups.map((group) => <GroupListItem  group={group} chatId={chatId} key={group._id} />)
                  ) : 
                  (
                    <Typography textAlign={"center"} padding={"1rem"}>
                        No Groups 
                    </Typography>
                  )
              }
        </Stack>
      )
}


const GroupListItem = memo(({group , chatId}) =>{
  const {name , avatar , _id } = group 
  return (
    <LinkedComponent to={`?group=${_id}`} 
        
    >
      <Stack direction={"row"} alignItems={"center"} >
        <AvatarCard avatar={avatar} />  
        <Typography>{name}</Typography>
      </Stack>
    </LinkedComponent>
  )
})

export default Group;
