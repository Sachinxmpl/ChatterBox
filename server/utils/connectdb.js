import mongoose from "mongoose"

const connectdb = (uri) =>{
    mongoose.connect(uri)
    .then((data)=> console.log(`Connected to MongoDb ${data.connection.host}`))
    .catch((err)=> console.log(err))
}

export default connectdb