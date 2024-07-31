import React from "react";
import {Helmet} from "react-helmet-async"

const Title = ({title = "chatterBox" , description = "Description of the chat"}) =>{
    return(
        <Helmet>
                <title>{title}</title>
                <meta name="descripion" content={description}/>
        </Helmet>
    )
}

export default Title ; 