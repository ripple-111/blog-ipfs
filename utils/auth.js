const jwt=require("jsonwebtoken")
const secret='ripple-blog'
const timeout='12h'
const auth={
    sign(ctx,user){
        const token=jwt.sign({user:user.username,id:user.id,ipfs:user.ipfs,headImage:user.headImage},secret,{expiresIn:timeout})
        ctx.set('Authorization',`Bearer${token}`)
        return token
    },
    verify(ctx,token){
        let payload,ret=true
        try{
            // token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicmlwcGxlIiwiaWQiOjEzLCJpcGZzIjoiazJrNHI4b2phdm04eXJsOW52c2k0NWR2eWY3N2o4dGF4azVobmRlY3NlMW53Mml3dWpuYTN2bDAiLCJoZWFkSW1hZ2UiOiIuLi9zcmMvYXNzZXRzL2hlYWRJbWFnZS5qcGVnIiwiaWF0IjoxNjc3ODU1NDgzLCJleHAiOjE2Nzc4OTg2ODN9.GdObpa0fDVDS3F5PtkrvT_jxjRPSn8CT7fL3gOvvQwM'
            payload=jwt.verify(token,secret)
            ret=false
        }catch(err){
            console.log(err.name)
        }
        return payload
    }
}
module.exports=auth