import React , {useState} from 'react'
import {Dialog, DialogTitle, InputAdornment, List, ListItem, Stack, TextField} from "@mui/material"
import {useInputValidation} from "6pp"
import { Search as SearchIcon} from "@mui/icons-material"
import UserItem from '../shared/UserItem'
import { Samplechats } from '../constants/sampleChat'

function Search({handleClose}) {

  const [users, setUsers] = useState(Samplechats)

  const Search = useInputValidation("")
  const addFriendHandler = (id)=>{
    console.log(id)
  }
  let isLoadingSendFriendRequest = false ; 
  return (
    <>
          <Dialog open onClose={handleClose}> 
                <Stack p={"2rem"} width={"25rem"}>
                      <DialogTitle textAlign={"center"}>Find People</DialogTitle>
                      <TextField 
                        label="" 
                        value={Search.value} 
                        onChange={Search.changeHandler}
                        size='small'
                        variant='outlined'
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon/>
                            </InputAdornment>
                          ),
                        }}
                      />

                        <List>
                            {
                              users.map((user)=>(
                                <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading= {isLoadingSendFriendRequest}>
                                </UserItem>
                              ))
                            }
                        </List>

                </Stack>
          </Dialog>
    </>
  )
}

export default Search
