const format=require('../../utils/formatResponse')
const fanService=require('./service/fanService')
class FanController{
    static async follow(ctx){
        const data =await fanService.followUser(ctx)
        ctx.body=format({data})
    }
    static async unfollow(ctx){
        const data=await fanService.unfollowUser(ctx)
        ctx.body=format({data})
    }
    static async getAllfollowees(ctx){
        const data=await fanService.getAllFollowees(ctx)
        ctx.body=format({data})
    }
    static async getAllfollowers(ctx){
        const data=await fanService.getAllFollowers(ctx)
        console.log(data)
        ctx.body=format({data})
    }
    
}
module.exports= FanController
