import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transfromImage } from "../lib/feature";

function AvatarCard({ avatar = [], max = 4 }) {
    return (
        <>
            <Stack direction={"row"} spacing={0.5}>
                <AvatarGroup max={max} >

                    <Box width={"5rem"} height={"3rem"}>
                        {
                            avatar.map((src, index) => {
                                return (
                                    <Avatar
                                        key={Math.random() * 1000}
                                        src={transfromImage(src)}
                                        alt={`Avatar ${index}`}
                                        sx={{
                                            width: '3rem',
                                            height: "3rem",
                                            position : "absolute" , 
                                            left : {
                                                xs : `${0.5+index}rem`, 
                                                sm : `${index}rem`

                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </Box>

                </AvatarGroup>
            </Stack>
        </>
    )
}

export default AvatarCard