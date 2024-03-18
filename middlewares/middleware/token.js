const auth=require("../../utils/auth")
module.exports=async(ctx, next) => {
    if (ctx.header && ctx.header.authorization) {
      const parts = ctx.header.authorization.split(' ');
      if (parts.length === 2) {
        //取出token
        const scheme = parts[0];
        const token = parts[1];
        
        if (/^Bearer$/i.test(scheme)) {
          try {
            //jwt.verify方法验证token是否有效
            ctx.state=auth.verify(ctx,token);
          } catch (err) {
            console.log(err.name)
            // //token过期 生成新的token
            // const newToken = getToken(user);
            // //将新token放入Authorization中返回给前端
            // ctx.res.setHeader('Authorization', newToken);
          }
        }
      }
    }
  
    return next().catch(err => {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body =
          '登录信息过期';
      } else {
        throw err;
      }});
   };   