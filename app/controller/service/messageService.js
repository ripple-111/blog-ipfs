const messageModel = require('../model/Message')
const user = require('../model/User')
class MssageService {
    static async send(ctx) {
        let { id } = ctx.state
        let { message, uid } = ctx.request.body
        let data = await messageModel.create({ message, sendId: id, uid })
        return data
    }
    static async get(ctx) {
        let { id } = ctx.query
        let message = await messageModel.findAll({ where: { uid: id }, include: { model: user, attributes: ['username', 'headImage'] } })
        return message
    }
    static async del(ctx) {
        await messageModel.destroy({ where: { id: ctx.request.body.id } })
    }
}
module.exports = MssageService