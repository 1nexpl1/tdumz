import { Order } from '../models/models.js';  // Теперь не нужно использовать .default

class OrderController {
    async getAll(req, res) {
        const orders = await Order.findAll();
        return res.json(orders);
    }

    async create(req, res) {
        const { mail, type } = req.body;
        const order = await Order.create({ mail, type });

        return res.json(order);
    }

    async deleteOne(req, res) {
        const { id } = req.params;
        const order = await Order.destroy({
            where: { id },
        });
        return res.json(order);
    }
}

export const getAll = new OrderController().getAll;
export const create = new OrderController().create;
export const deleteOne = new OrderController().deleteOne;
