class ExpressError extends Error {
    constructor(statusCode , message){
        super()
        this.statusCode = statusCode
        this.message = message
    }
}




const errorMiddleware = (err, req, res ,next) =>{
    
    const {statusCode = 500, message = "Internal server error "} = err
    
    return res.status(statusCode).json(
        {
            success : false , 
            message : message
        }
    )
}


const wrapAsync = (fn) =>{
    return (req,res,next) =>{
        fn(req,res,next).catch(err => next(err))
    }
}


export {errorMiddleware , ExpressError , wrapAsync}