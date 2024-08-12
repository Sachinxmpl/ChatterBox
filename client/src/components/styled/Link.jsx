import React from 'react'
import {Link} from "react-router-dom"
import { styled } from '@mui/material'

export const LinkedComponent = styled(Link)({
        textDecoration: 'none',
        color: 'black',
        padding: '1rem',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
        }
})