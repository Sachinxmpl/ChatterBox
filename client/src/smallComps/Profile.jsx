import { Avatar, formGroupClasses, Stack, Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalenderIcon } from "@mui/icons-material"
import moment from "moment"

function Profile() {
    return (
        <Stack spacing={"2rem"} alignItems={"center"}>
            <Avatar sx={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
                marginBottom: "1rem",
                border: "5px solid white"
            }} />
            <Stack spacing={"1.5rem"}>
                <ProfileCard heading={"Bio"} text={"I hate coding but it still do it "} />
                <ProfileCard heading={"Username"} Icon={<UsernameIcon />} text={"SachinKhatri"} />
                <ProfileCard heading={"Sachin"} Icon={<FaceIcon />} text={"This is a ramdon text"} />
                <ProfileCard heading={"Joined"} Icon={<CalenderIcon />} text={moment('2024-08-01T07:00:00.000Z').fromNow()} />
            </Stack>
        </Stack>
    )
}

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            // textAlign={"center"}
        >
            {
                Icon && Icon
            }

            <Stack>
                <Typography variant='body1'>
                    {text}
                </Typography>
                <Typography variant='caption' color={"grey"}>
                    {heading}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Profile