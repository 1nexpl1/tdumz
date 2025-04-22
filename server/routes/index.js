import Router from 'express'
const router = new Router()

import chapterRouter from './ChapterRouter.js'
import descrptionRouter from './DescrptionRouter.js'
import itemRouter from './ItemRouter.js'
import orderRouter from './OrderRouter.js'
import LoginRouter from './LoginRouter.js'
router.use('/chapter', chapterRouter)
router.use('/description', descrptionRouter)
router.use('/item', itemRouter)
router.use('/order', orderRouter)
router.use('/user', LoginRouter)

export default router