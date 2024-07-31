import React from 'react'
import {Link} from "react-router-dom"
import { styled } from '@mui/material'

export const LinkedComponent = styled({Link})({
        textDecoration: 'none',
        color: 'black',
        padding: '1rem',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        }
})