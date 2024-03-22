const router = require("koa-router")();
// 模块路由前缀
router.prefix("/commentService");
const commentsController=require ('../../app/controller/comments.js');

router.post("/getAll", commentsController.getAll);
router.post("/setComment",commentsController.setComment)
router.post("/like",commentsController.like)
router.post("/deleComment",commentsController.deleComment)
module.exports = router;
