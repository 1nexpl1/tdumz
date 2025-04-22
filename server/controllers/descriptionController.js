import { Descrption } from '../models/models.js'

class descriptionController {
    async getAll(req, res) {
        const descriptions = await Descrption.findAll()
        return res.json(descriptions)
    }

    async create(req, res) {
        let { title, text, itemId } = req.body
        const description = await Descrption.create({ title, text, itemId })

        return res.json(description)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        const description = await Descrption.destroy(
            {
                where: { id }
            }
        )
        return res.json(description)
    }

    async changeOne(req, res) {
        const { id } = req.params
        let info = req.body
        const changeDesc = await Descrption.update(
            { info },
            {
                where: { id }
            }
        )
        return res.json(changeDesc)
    }
}

export const getAll = new descriptionController().getAll;
export const create = new descriptionController().create;
export const deleteOne = new descriptionController().deleteOne;
export const changeOne = new descriptionController().changeOne;