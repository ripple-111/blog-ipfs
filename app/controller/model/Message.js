const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

class Message extends Model{

}

Message.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: DataTypes.TEXT,
    uid:DataTypes.INTEGER,
    sendId:DataTypes.INTEGER,
    article:DataTypes.INTEGER
},{sequelize})

module.exports=Message
