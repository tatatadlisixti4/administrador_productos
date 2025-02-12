import {Request, Response } from "express"
import {check, validationResult} from 'express-validator'
import Product from "../models/Product.model"
export const createProduct = async (req: Request, res: Response) => {
    await check('name')
        .notEmpty().withMessage('El campo nombre no puede ir vacío')
        .run(req)
    await check('price')
        .notEmpty().withMessage('El campo precio no puede ir vacío')
        .isInt({min: 0}).withMessage('Valor incorrecto')
        .run(req)
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors.array()})
        return
    }
    const product = await Product.create(req.body)
}