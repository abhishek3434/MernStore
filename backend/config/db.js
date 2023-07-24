import mongoose from "mongoose";

const dbConnect = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`Database connected ${conn.connection.host}`.blue.bold)
    }
    catch(error){
        console.log((error).red)
    }
}
export default dbConnect;