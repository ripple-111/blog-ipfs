const CommentModel = require('../model/Comments')
const user = require('../model/User')
const sequelize = require('../../../db/db')
CommentModel.belongsTo(user, { foreignKey: 'uid' })
CommentModel.hasMany(CommentModel, { foreignKey: 'fid' })
class MssageService {
    static async getAllCommments(ctx) {
        let { aid } = ctx.request.body
        let comments = await CommentModel.findAll({
            where: {
                aid,
                fid: null
            },
            include: [{
                model: user,
                attributes: ['username', 'headImage','id']
            }],
        })
        comments = comments.map(async comment => {
            let childs = await CommentModel.findAll({
                where: {
                    fid: comment.id
                },
                include: [{
                    model: user,
                    attributes: ['username', 'headImage','id']
                }],
            })
            comment.setDataValue('childs',childs)
            return comment
        })
        comments = await Promise.all(comments)
        
        console.log(comments)
        return comments
    }
    static async setComment(ctx) {
        const { id:uid, aid, content, fid = null} = ctx.request.body
        let data = await CommentModel.create({ uid, aid, content, fid})
        return data
    }
    static async like(ctx) {
        const { uid,id } = ctx.request.body
        let comments = await CommentModel.findByPk(id)
        if (JSON.parse(comments.good)) {
            if (JSON.parse(comments.good).includes(uid))
                return '已经点过赞了'
            else
                comments.good = JSON.parse(comments.good).push(uid)
        }
        else
        comments.good = JSON.stringify([uid])
        await comments.save()
        return '点赞成功'
    }
    static async deleComment(ctx) {
        const { id } = ctx.request.body
        let data = await CommentModel.destroy({
            where:{
                id
            }
        })
        return data
    }
    static async del(ctx) {
        await messageModel.destroy({ where: { id: ctx.request.body.id } })
    }
}
module.exports = MssageService