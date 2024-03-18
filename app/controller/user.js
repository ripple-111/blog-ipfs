const userService=require("./service/userService")
const format=require('../../utils/formatResponse')
class UserController{
    static async userLogin(ctx){
        const {data,msg} =await userService.login(ctx)
        ctx.body=format({data,msg})
    }
    static async userRegister(ctx){
        const msg=await userService.register(ctx)
        ctx.body=format({msg})
    }
    static async getUserInfo(ctx){
        const data =await userService.getUserInfo(ctx)
        ctx.body=format({data})
    }
    static async setUserInfo(ctx){
        const msg =await userService.setUserInfo(ctx)
        ctx.body=format({msg})
    }
}
module.exports = UserController
