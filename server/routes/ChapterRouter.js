import Router from 'express'
const router = new Router()
import { getAll, create, deleteOne, getOne } from '../controllers/chapterController.js'

router.get('/', getAll)
router.post('/', create)
router.delete('/:id', deleteOne)
router.get('/:id', getOne)

export default router
