import { AppBar, Box, Toolbar, Typography, Drawer, IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { orange } from '../../constants/color';
import MenuIcon from '@mui/icons-material/Menu';
import { Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationIcon } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';


function Header() {

    const [isMobile, setIsMobile] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [isNewGroup, setIsNewGroup] = useState(false)

    const navigate = useNavigate()

    const handleMobile = () => {
        setIsMobile((prev) => !prev)
    };

    const handleSearch = (e) => {
        setIsSearch((prev) => !prev)
    }
    const newGroupButton = (e) => {
        setIsNewGroup((prev) => !prev)
    }
    const openNotifications = () => {
        setIsNotification((prev) => !prev)
    }

    const navigateTogroups = () => {
      navigate("/groups")
    }

    const handleLogout = () => {
        console.log("Logged out successgully")
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' elevation={0} sx={{ bgcolor: orange , height : "4rem" }} >
                    <Toolbar>
                        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                            chatterBox
                        </Typography>

                        <Box display={{ xs: "block", sm: "none" }}>
                            <IconButton color='inherit' size='large' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box>
                            <Icon title={"title"} icon={<SearchIcon />} clickFunction={handleSearch} />
                            <Icon title={"newGroup"} icon={<AddIcon />} clickFunction={newGroupButton} />
                            <Icon title={"manage Groups"} icon={<GroupIcon />} clickFunction={navigateTogroups} />
                            <Icon title={"openNotifications"} icon={<NotificationIcon />} clickFunction={openNotifications} />
                            <Icon title={"logout"} icon={<LogoutIcon />} clickFunction={handleLogout} />



                        </Box>



                    </Toolbar>
                </AppBar>


            </Box>
        </>
    );
}

export default Header;
