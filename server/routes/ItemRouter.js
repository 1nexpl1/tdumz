import Router from 'express'
const router = new Router()
import { getAll, create, getOne, deleteOne } from '../controllers/itemController.js'

router.get('/', getAll)
router.post('/', create)
router.get('/:id', getOne)
router.delete('/:id', deleteOne)

export default router
