const format=require('../../utils/formatResponse')
const CommentsService=require('./service/commentsService')
class CommentsController{
    static async getAll(ctx){
        const data = await CommentsService.getAllCommments(ctx)
        ctx.body=format({data})
    }
    static async setComment(ctx){
        const data = await CommentsService.setComment(ctx)
        ctx.body=format({data})
    }
    static async like(ctx){
        const data = await CommentsService.like(ctx)
        ctx.body=format({data})
    }
    static async deleComment(ctx){
        const data = await CommentsService.deleComment(ctx)
        ctx.body=format({data})
    }
}
module.exports= CommentsController
