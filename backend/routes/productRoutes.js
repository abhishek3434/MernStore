import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router()


productRouter.get('/',async(req,res)=>{
    const products = await Product.find();
    res.json(products)
    // res.json(products)
})
productRouter.get('/:id',async(req,res)=>{
    const id = req.params.id
    const productById = await Product.findById(id)
    if(productById){ 
        res.json(productById)
    }
    else{
        res.status(404).json()
    }
})

export default productRouter;

