const router = require("koa-router")();
// 模块路由前缀
const UserController = require("../../app/controller/user")
router.prefix("/userService");


/**
 * 用户登录接口
 * @param {username} 用户名
 * @param {password} 用户密码
 */
router.get("/login", UserController.userLogin);
router.post("/register", UserController.userRegister);
router.get("/getUserInfo",UserController.getUserInfo);
router.post("/setUserInfo",UserController.setUserInfo);
module.exports = router;
