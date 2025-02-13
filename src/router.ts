import {Router} from "express"
import {body} from 'express-validator'
import {Request, Response} from "express"
import {createProduct} from "./handlers/products"
import {handlerInputsErrors} from "./middleware"
const router = Router()

router.get('/', (req, res) => {
    res.json('Desde GET')
})
router.post('/', 
    body('name')
    .notEmpty().withMessage('El campo nombre no puede ir vacío'),
    body('price')
        .notEmpty().withMessage('El campo precio no puede ir vacío')
        .isInt({min: 0}).withMessage('Valor por debajo del mínimo'),
    handlerInputsErrors,
    createProduct
)
router.put('/')
router.patch('/')
router.delete('/')

export default router