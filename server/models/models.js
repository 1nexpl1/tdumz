const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Chapter = sequelize.define('chapter', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    mail: {type: DataTypes.STRING, allowNull: false}, 
    type: {type: DataTypes.STRING(1234), defaultValue: 'Просьба перзвонить'}
})

const Item = sequelize.define('item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    chapterId: {type: DataTypes.INTEGER}
})

const Descrption = sequelize.define('description', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    itemId: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING(1234), allowNull: false},
})
const Image = sequelize.define('image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    itemId: {type: DataTypes.INTEGER},
    path: {type: DataTypes.STRING, allowNull: false}
})

Chapter.hasMany(Item, {as: 'items'})
Item.belongsTo(Chapter)

Item.hasMany(Descrption, {as: 'description'})
Descrption.belongsTo(Item)

Item.hasMany(Image, {as: 'images'})
Image.belongsTo(Item)

module.exports = {
    Chapter,
    Order,
    Item,
    Descrption,
    Image
}