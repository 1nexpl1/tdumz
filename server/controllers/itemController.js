import { Item, Descrption, Image } from '../models/models.js';
import { v4 } from 'uuid';
import { resolve } from 'path';
class itemController {
    async getAll(req, res) {
        const items = await Item.findAndCountAll()

        return res.json(items)
    }
    async create(req, res) {
        let { title, chapterId, description } = req.body
        const { image } = req.files

        const item = await Item.create({ title, chapterId });

        if (description) {
            description = Array.from(JSON.parse(description))
            description.forEach(i =>
                Descrption.create({
                    title: i.title,
                    text: i.text,
                    itemId: item.id
                })
            );
        }

        if (image) {
            if (!Array.isArray(image)) {
                let ImgPath = v4() + ".jpg"
                image.mv(resolve(__dirname, '..', 'static', ImgPath))
                Image.create({
                    path: ImgPath,
                    itemId: item.id
                })
            } else {
                for (let file of image) {
                    let ImgPath = v4() + ".jpg"
                    file.mv(resolve(__dirname, '..', 'static', ImgPath))
                    Image.create({
                        path: ImgPath,
                        itemId: item.id
                    })
                }
            }
            
            
        }

        return res.json(item)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        const item = await Item.destroy(
            {
                where: { id },
                include: [{ model: Image, as: 'images' }, { model: Descrption, as: 'description' }]
            }
        )
        return res.json(item)
    }

    async getOne(req, res) {
        const { id } = req.params

        const item = await Item.findOne(
            {
                where: { id },
                include: [{ model: Image, as: 'images' }, { model: Descrption, as: 'description' }]
            }
        )
        return res.json(item)
    }
}

export const getAll = new itemController().getAll;
export const create = new itemController().create;
export const deleteOne = new itemController().deleteOne;
export const getOne = new itemController().getOne;