import {Router} from "express"
import {body} from 'express-validator'
import {Request, Response} from "express"
import {createProduct, getProducts} from "./handlers/products"
import {HandleInputErrors} from "./middleware"
const router = Router()

router.get('/', getProducts)

router.post('/', 
    body('name')
    .notEmpty().withMessage('El campo nombre no puede ir vacío'),
    body('price')
        .notEmpty().withMessage('El campo precio no puede ir vacío')
        .isInt({min: 0}).withMessage('Valor por debajo del mínimo'),
    HandleInputErrors,
    createProduct
)
router.put('/')
router.patch('/')
router.delete('/')

export default router