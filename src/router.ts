import {Router} from "express"
import {Request, Response} from "express"
import {createProduct} from "./handlers/products"
const router = Router()

router.get('/', (req, res) => {
    res.json('Desde GET')
})
router.post('/', createProduct)
router.put('/')
router.patch('/')
router.delete('/')

export default router