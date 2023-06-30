import mongoose from "mongoose";

const dbConnect = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`Database connected ${conn.connection.host}`)
    }
    catch(error){
    }
}
export default dbConnect;