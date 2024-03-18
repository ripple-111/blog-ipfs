const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
class usertopic extends Model{
    static async getTopicNumber(uid){
        return usertopic.count({
            where:{
                uid
            }
        })
    }
}

usertopic.init({
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},  
tid:DataTypes.INTEGER,
uid:DataTypes.INTEGER
},{sequelize})
module.exports=usertopic