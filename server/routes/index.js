const Router = require('express')
const router = new Router()

const chapterRouter = require('./ChapterRouter')
const descrptionRouter = require('./DescrptionRouter')
const itemRouter = require('./ItemRouter')
const orderRouter = require('./OrderRouter')

router.use('/chapter', chapterRouter)
router.use('/description', descrptionRouter)
router.use('/item', itemRouter)
router.use('/order', orderRouter)

module.exports = router