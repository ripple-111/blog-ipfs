const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
const messageModel=require('./Message')
const userArticleModel=require('./UserArticle')
const userTopicModel=require('./UserTopic')
const userFocuModel=require('./UserFocu')
// 数据类型 https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
class user extends Model{
    static async isRegister(username){
        return await user.findOne({
            where:{
                username
            }
        })
    }
    static async updateValue(id,value){
        return await user.update(value,{
            where:{
                id
            }
        })
    }
    // attributes: { exclude: ['password']},
    static async getInfo(id){
        return await user.findOne({where:{id},attributes:['ipfs','introduce','username','headImage',[Sequelize.literal(`(
            SELECT COUNT(*)
            FROM userarticle
            WHERE
            userarticle.uid = user.id
        )`),
      'article'],[Sequelize.literal(`(
        SELECT COUNT(*)
        FROM userfocu
        WHERE
        userfocu.followee = user.id
    )`),'fan'],[Sequelize.literal(`(
        SELECT COUNT(*)
        FROM usertopic
        WHERE
        usertopic.uid = user.id
    )`),'topic']],
    })
    }
}
user.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {type:DataTypes.STRING,unique:true},
    password: DataTypes.STRING,
    status: {
        type:DataTypes.INTEGER,
        defaultValue: 0,
    },
    headImage:DataTypes.STRING,
    introduce:DataTypes.STRING,
    ipfs:DataTypes.STRING,
},{sequelize})

user.hasMany(userArticleModel,{sourceKey:'id',foreignKey:"uid"})
user.hasMany(messageModel,{sourceKey:'id',foreignKey:'sendId'})
user.hasMany(userTopicModel,{foreignKey:'uid'})
userArticleModel.belongsTo(user,{foreignKey:'uid'})
messageModel.belongsTo(user,{foreignKey:'sendId'})
module.exports = user
