import { styled } from '@mui/system'
import React from 'react'
import { graycolor } from '../../constants/color'

const InputBox = styled("input")`
      width : 100%  ;
      height : 100% ;
      border : none ; 
      outline : none ;
      padding : 1.5rem 3rem ; 
      border-radius : 1.3rem ; 
      background-color : ${graycolor} ; 
`
export default InputBox