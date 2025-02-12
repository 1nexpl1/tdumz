const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.get('/', itemController.getAll)
router.post('/', itemController.create)
router.get('/:id', itemController.getOne)
router.delete('/:id', itemController.deleteOne)

module.exports = router
