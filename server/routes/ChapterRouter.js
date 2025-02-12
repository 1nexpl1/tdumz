const Router = require('express')
const router = new Router()
const chapterController = require('../controllers/chapterController')

router.get('/', chapterController.getAll)
router.post('/', chapterController.create)
router.delete('/:id', chapterController.deleteOne)
router.get('/:id', chapterController.getOne)

module.exports = router
