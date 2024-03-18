const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../../db/db')
class userfocu extends Model{
    static async getUserFanNumber(followee){
        return userfocu.count({
            where:{
                followee
            }
        })
    }
}
userfocu.init({
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
//关注者
follower: {type:DataTypes.INTEGER,allowNull:false},
//被关注者
followee: {type:DataTypes.INTEGER,allowNull:false},
},{
    tableName: 'userfocu',
    sequelize,
    indexes: [
      {
        unique: true,
        fields: ['follower', 'followee']
      }
    ]})
module.exports=userfocu