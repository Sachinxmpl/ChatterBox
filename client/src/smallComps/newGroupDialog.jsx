import React, { useState } from "react";

// import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Samplechats } from "../constants/sampleChat";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

function NewGroupDialog({ handleClose }) {
  const groupName = useInputValidation("");
  const [members, setMembers] = useState(Samplechats);
  const [selectedMembers , setSelectedMembers] = useState([])

  const selectMemberHandler = (_id) => {
    console.log(`id is ${_id}`)
    setSelectedMembers((prev)=> {
      if(prev.includes(_id)){
        return prev.filter((currId)=> currId !== _id)
      }
      else{
        return [...prev,_id]
      }
    })
  };



  return (
    <Dialog open onClose={handleClose}>
      <Stack
        p={{ xs: "1rem", sm: "3rem" }}
        spacing={"2rem"}
        maxWidth="35rem"
        minWidth="25rem"
      >
        {/* <DialogActions sx={{ justifyContent: "flex-end", padding: 0 }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions> */}
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", paddingBottom: 2 }}
        >
          NewGroup
        </DialogTitle>
        <TextField
          variant="outlined"
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant={"body1"}>Members</Typography>
                  <Typography> {
                      selectedMembers.map((member)=><li>{member}</li>)
                    }
                </Typography>
        <Stack>
          {members.map((user) => (
            <UserItem
              user={user}
              key={user._id}
              handler={selectMemberHandler}
              isAdded = { selectedMembers.includes(user._id)}
            ></UserItem>
          ))}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="container" size="large" >Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default NewGroupDialog;
