const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
const comments = require('./Comments')
class userArticle extends Model{
    static async getArticleNumber(uid){
        return userArticle.count({
            where:{
                uid
            }
        })
    }
    static async saveArticle(id){
        if(id)
        return await userArticle.findOne({where:{id}})}
}
userArticle.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uid: DataTypes.INTEGER,
    title: {
        type:DataTypes.STRING,
        defaultValue:'默认标题'
    },
    text:{
         type:DataTypes.TEXT,
         defaultValue:''
    }, 
    tags:DataTypes.STRING,
    type:DataTypes.STRING,
    image:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    watch:DataTypes.NUMBER,
    good:DataTypes.STRING,
    expla:DataTypes.STRING,
    version:{
        type:DataTypes.NUMBER,
        defaultValue:0
    },
    time:{
        type:DataTypes.TIME,
        defaultValue:DataTypes.NOW
    }
},{sequelize})

module.exports = userArticle
