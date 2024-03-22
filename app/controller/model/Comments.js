const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
const User = require('./User')
const Article = require('./UserArticle')
class Comment extends Model{

}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uid: DataTypes.INTEGER,
    fid: DataTypes.INTEGER,
    aid: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    good: DataTypes.INTEGER,
    time:{
        type:DataTypes.TIME,
        defaultValue:DataTypes.NOW
    }
},{sequelize})
 

module.exports = Comment
