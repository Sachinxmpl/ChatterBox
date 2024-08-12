import React from 'react'
import {transfromImage} from '../lib/feature'
import { FileOpen as FileOpenIcon } from '@mui/icons-material'

function RenderAttachements({file , url }) {
  if(file === "video"){
    return (
            <video
                src={url}
                controls
                style={{
                    width : "200px" ,
                    height : "150px" ,
                    objectFit : "contain"
                }}
            />
        )
    }
    else if(file === "audio"){
        return (
            <audio
                src={url}
                controls
                style={{
                    width : "200px" ,
                    height : "100px" ,
                    objectFit : "cover"
                }}
            />
        )
    }
    else if(file === "image"){
        return (
            <img
                src={transfromImage(url , 200)}
                style={{
                    width : "200px",
                    height : "150px" ,
                    objectFit : "contain"
                }}
            />
        )
    }
    else{
        return <FileOpenIcon/>
    }
    
  }

export default RenderAttachements