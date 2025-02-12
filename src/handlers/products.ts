import {Request, Response } from "express"
import {check, validationResult} from 'express-validator'
import Product from "../models/Product.model"
export const createProduct = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }
    const product = await Product.create(req.body)
}