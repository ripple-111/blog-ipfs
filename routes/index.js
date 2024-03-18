const router = require("koa-router")();
const join = require("path").join;
const context=require("../utils/autoLoadFile.js") 
const multer = require("koa-multer"); //处理文件上传
const userService=require("../app/controller/service/userService.js")
let storage = multer.diskStorage({
    destination: function (req, file, cb) { //存储地址
    cb(null, `${__dirname}/../public/upload/`);
  },
 filename: function (ctx, file, cb) { //文件名
    const filenameArr = file.originalname.split(".");
    cb(null, Date.now() + "." + filenameArr.pop());
  },
});
let upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024,
    },
  });

/**
 * @param {Array} arr 需要注册路由的文件列表
 */
function importAll(arr) {
  arr.forEach((key) => {
    router.use("/api", key.data.routes(), key.data.allowedMethods());
  });
}
router.post("/uploadHead", upload.single("file"), function (ctx) {
    console.log("data", ctx.req.file.filename);
    ctx.body = {
    code: 200,
    msg: "上传成功",
    filename: ctx.req.file.filename,
    };
    userService.setHead(ctx,ctx.req.file.filename)
});
importAll(context(join(__dirname, "./route"), false));

module.exports= router;