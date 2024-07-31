import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

function Icon({ title, icon, clickFunction }) {
    return (
        <Tooltip content={title}>
            <IconButton color='inherit' size='large' onClick={clickFunction}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Icon