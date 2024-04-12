const blogService = require('./service/blogService')
const format=require('../../utils/formatResponse')

class BlogController {
    static async upload(ctx) {
        const data = await blogService.upload(ctx);
        ctx.body =format({data});
    }
    static async getIpfsInfo(ctx) {
        const data = await blogService.getIpfsInfo(ctx);
        ctx.body = format({data});
    }
    static async getArticle(ctx) {
        const data = await blogService.getArticle(ctx);
        ctx.body = format({data});
    }
    static async getType(ctx) {
        const data = await blogService.getType(ctx);
        ctx.body = format(data);
    }
    static async getAllBlog(ctx) {
        const data = await blogService.getAllBlog(ctx);
        ctx.body = format({data});
    }
    static async getArticleInfo(ctx){
        const data=await blogService.getArticleInfo(ctx);
        ctx.body = format({data})
    }
    static async goodArticle(ctx){
        const msg=await blogService.goodArticle(ctx)
        ctx.body=format({msg})
    }
    static async watchArticle(ctx){
        await blogService.watchArticle(ctx)
        ctx.body=format({})
    }
    static async deleteBlog(ctx) {
        const data = await blogService.deleteBlog(ctx);
        ctx.body = format({data});
    }
    static async getTags(ctx){
        const data = await blogService.getTags(ctx);
        ctx.body = format({data});
    }
    static async getBestAuthors(ctx){
        const data = await blogService.getBestAuthors(ctx);
        ctx.body = format({data});
    }
}
module.exports = BlogController
