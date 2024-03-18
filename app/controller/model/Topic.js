const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')

class topic extends Model{

}

topic.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic: DataTypes.STRING,
},{sequelize})

module.exports=topic