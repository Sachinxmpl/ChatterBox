import express from "express";
const app = express()
import connectdb from "./utils/connectdb.js";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

import userRoutes from "./routes/user.js"
import chatRoutes from "./routes/chat.js"


if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const port = process.env.PORT || 3000
connectdb(process.env.MONGO_URI)



//middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))



app.get("/", (req,res)=>{
    res.send("This is the home page of chatterbox messeage app")
})

app.use("/user" , userRoutes)
app.use("/chat", chatRoutes)






app.use(errorMiddleware)

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})
