import express from 'express';
import asyncHandler from "express-async-handler"
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router()


productRouter.get('/',asyncHandler(async(req,res)=>{
    const products = await Product.find();
    res.json(products)
    // res.json(products)
}))

productRouter.get('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id
    // try {
    //     const productById = await Product.findById(id)
    //     res.json(productById)
        
    // } catch (error) {
    //     res.status(404).json()
    // }
    const productById = await Product.findById(id)
    if(productById){ 
        res.json(productById)
    }
    else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default productRouter;

