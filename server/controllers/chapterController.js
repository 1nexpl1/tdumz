const {Chapter} = require('../models/models')

class chapterController {
    async getAll(req, res) {
        const chapters = await Chapter.findAndCountAll()
        return res.json(chapters)
    }
    async create(req, res) {
        const {name} = req.body
        const chapter = await Chapter.create({name})
        return res.json(chapter)
    }
    async deleteOne(req, res) {
        const {id} = req.params
        const chapter = await Chapter.destroy(
            {
                where: {id: id}
            }            
        )        
        return res.json(chapter)
    }
    async getOne(req,res){
        const {id} = req.params

        const chapter = await Chapter.findOne(
            {
                where: {id}
            }
        )
        return res.json(chapter)
    }
}

module.exports = new chapterController()