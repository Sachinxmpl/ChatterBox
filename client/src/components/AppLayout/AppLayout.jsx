import React from 'react'

const AppLayout = () => WrappedComponent =>{
    return (props) =>{
        <div>
            <div>Header</div>
            <WrappedComponent {...props}/>
            <div> Footer </div>
        </div>
    }
}