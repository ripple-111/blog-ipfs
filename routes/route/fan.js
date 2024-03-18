const router = require("koa-router")();
// 模块路由前缀
router.prefix("/fanService");
const FanController=require ('../../app/controller/fan.js');

/**
 * md字符串上传
 * @param {md} md字符串
 */
router.post("/follow", FanController.follow);
router.post("/unfollow",FanController.unfollow)
router.post("/getAllFollowers",FanController.getAllfollowers)
router.post("/getAllFollowees",FanController.getAllfollowees)
module.exports = router;
