import mongoose from "mongoose";
import dbConnect from "./config/db.js";
import dotenv from 'dotenv';
import users from "./data/user.js";
import products from "./data/products.js";
import User from './models/userModels.js'
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

dotenv.config()

dbConnect()

const importData = async()=>{
    try {
    
        await Order.deleteMany()
        await Product.deleteMany();
        await User.deleteMany()
         
        const insertedUser = await User.insertMany(users);
        const admin = insertedUser[0]._id
        const sampleProducts = products.map(products=>{
            return {...products,user:admin}
        })
        await Product.insertMany(sampleProducts)
        console.log('Data inserted successful')
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const deleteData = async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany();
        await User.deleteMany()
        console.log('Data Deleted')
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
if(process.argv[2] === '-d'){
    deleteData()
}
else{
    importData()
}

