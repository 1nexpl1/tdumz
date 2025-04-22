import Router from 'express'
const router = new Router()
import { getAll, create, deleteOne, changeOne } from '../controllers/descriptionController.js'

router.get('/', getAll)
router.post('/', create)
router.delete('/:id', deleteOne)
router.post('/:id', changeOne)



export default router
