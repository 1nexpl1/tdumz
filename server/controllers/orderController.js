const {Order} = require('../models/models')

class orderController {
    async getAll(req, res) {
        const orders = await Order.findAll()
        return res.json(orders)
    }

    async create(req, res){
        const {mail, type} = req.body
        const order = await Order.create({mail, type})

        return res.json(order)
    }

    async deleteOne(req, res){
        const {id} = req.params
        const order = await Order.destroy(
            {
                where: {id}
            }
        )
        return res.json(order)
    }
}

module.exports = new orderController()