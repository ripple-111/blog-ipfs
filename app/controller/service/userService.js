const auth=require("../../../utils/auth")
const userModel=require('../model/User')
class UserService{
    static async register(ctx){
        let {username,password}=ctx.request.body
        const [user,created]=await userModel.findCreateFind({
            where:{username,password}
        })
        if(created){
        return '注册成功'
        }
        else
        return "用户已存在"   
    }
    static async login(ctx){
        let {username,password} =ctx.query
        let msg='',data={}
        const user=await userModel.findOne({where:{username}})
        if(user){
            if(user.password!=password){
                msg='密码错误'
            }
            else{
            msg='登录成功'
            return{msg,data:{token:auth.sign(ctx,user),id:user.id}}
            }
        }
        else{
            msg='用户未注册'
        }
        return {msg,data}
    }
    static async getUserInfo(ctx){
        let {id}=ctx.state
        if(ctx.query.id)
        id=ctx.query.id
        let user=await userModel.getInfo(id)
        return user
    }
    static async setUserInfo(ctx){
        let {id}=ctx.state
        let user=await userModel.findByPk(id) 
        if(ctx.request.body.pas??true){
            if(ctx.request.body.password==user.password)
            ctx.request.body.password=ctx.request.body.pas
            else 
            return '密码不正确'
        }
        Object.assign(user,ctx.request.body)
        await user.save()
        return '修改成功'
    }
    static async setHead(ctx,file){
        let id=ctx.url.split('?')[1]
        ctx.body={
            url:`http://${ctx.request.header.host}/upload/${file}`
        } 
        if(id!=undefined){
            let user=await userModel.findByPk(id) 
            user.headImage=`http://${ctx.request.header.host}/upload/${file}`
            await user.save()
        }
        
    }
}
module.exports=UserService