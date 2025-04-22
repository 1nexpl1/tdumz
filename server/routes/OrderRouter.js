import Router from 'express'
const router = new Router()
import { getAll, create, deleteOne } from '../controllers/orderController.js'

router.get('/', getAll)
router.post('/', create)
router.delete('/:id', deleteOne)

export default router
