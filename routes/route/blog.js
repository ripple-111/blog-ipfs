const router = require("koa-router")();
// 模块路由前缀
router.prefix("/blogService");
const BlogController=require ('../../app/controller/blog.js');

/**
 * md字符串上传
 * @param {md} md字符串
 */
router.post("/upload", BlogController.upload);
router.get("/getIpfsInfo",BlogController.getIpfsInfo)
router.get("/getArticle",BlogController.getArticle)
router.get("/getAllBlog",BlogController.getAllBlog)
router.get("/getType",BlogController.getType)
router.post("/deleteBlog",BlogController.deleteBlog)
router.get("/getTags",BlogController.getTags)
router.get("/getArticleInfo",BlogController.getArticleInfo)
router.get("/getBestAuthors",BlogController.getBestAuthors)
router.post("/goodArticle",BlogController.goodArticle)
router.post("/watchArticle",BlogController.watchArticle)
module.exports = router;
