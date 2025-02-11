import {Router} from "express"
const router = Router()

router.get('/', (req, res) => {
    res.json('hola')
})
router.post('/')
router.put('/')
router.patch('/')
router.delete('/')

export default router