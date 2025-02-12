const Router = require('express')
const router = new Router()
const descriptionController = require('../controllers/descriptionController')

router.get('/', descriptionController.getAll)
router.post('/', descriptionController.create)
router.delete('/:id', descriptionController.deleteOne)
router.post('/:id', descriptionController.changeOne)



module.exports = router
