const router = require("koa-router")();
// 模块路由前缀
router.prefix("/messageService");
const MessageController=require ('../../app/controller/message.js');

/**
 * md字符串上传
 * @param {md} md字符串
 */
router.post("/sendMessage", MessageController.send);
router.get("/getMessage",MessageController.get)
router.post("/delMessage",MessageController.del)
module.exports = router;
