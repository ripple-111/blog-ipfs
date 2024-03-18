const format=require('../../utils/formatResponse')
const messageService=require('./service/messageService')
class MessageController{
    static async send(ctx){
        const data =await messageService.send(ctx)
        ctx.body=format({data})
    }
    static async get(ctx){
        const data =await messageService.get(ctx)
        ctx.body=format({data})
    }
    static async del(ctx){
        await messageService.del(ctx)
        ctx.body=format({})
    }
}
module.exports= MessageController
