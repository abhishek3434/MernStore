import express from 'express';
import productRouter from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import colors from 'colors'
// import products from './data/products.js';

import dotenv from 'dotenv';

import dbConnect from './config/db.js';
const app = express()

dotenv.config()

dbConnect()

app.get('/',(req,res)=>{
    res.send("API is running")
})

app.use('/api/products',productRouter);

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))