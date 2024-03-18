const { create } = require('ipfs-http-client');
const userModel = require('../model/User')
const userArticle = require('../model/UserArticle')
const writeAFile = require('../../../utils/mkdir');
const { Op } = require('sequelize');
const sequelize = require('../../../db/db');
const user = require('../model/User');
const userfocu = require('../model/UserFocu');
const fs=require('fs')
class blogService {
    static async upload(ctx) {
        let { ipfs: key, id, user } = ctx.state
        let { md, article: { title, type, expla, tags, image, id: aid } } = ctx.request.body
        console.log(aid)
        let data
        if (aid ?? true)
            data = await userArticle.upsert({ id: aid, type, uid: id, expla, tags: tags.toString(), image, title, text: md, watch: 0 }, {
                where: { id: aid }
            })
        else
            data = await userArticle.upsert({ type, uid: id, expla, tags: tags.toString(), image, title, text: md, watch: 0 })

        //创建ipfs节点
        const ipfs = create({
            host: process.env.IPFS_HOST,
            port: 5001,
            protocol: 'http',
        })
        let { code } = await writeAFile(md, user, title)
        console.log(code)
        if (code == '000000') {
            // const {cid}=ipfs.addAll('ctx.request.body.md')
            //添加用户根目录
            if (!key) {
                //生成ipns
                key = await ipfs.key.gen(user, { type: 'rsa', size: 2048 })
                //为用户添加ipns信息
                await userModel.updateValue(id, { ipfs: key.id })
            }
            //读取用户目录
            const arr=[] //储存目录数据
            let data = []    //目录文件的cid
            const files = fs.readdirSync(`${__dirname}/../../../public/${user}/`, 'utf8')
            files.forEach(i => {
                arr.push({
                    content: fs.readFileSync(`${__dirname}/../../../public/${user}/` + i).toString(),
                    path: `/${user}/${i}`,
                })
            })
            for await (const result of ipfs.addAll(arr)) {
                data.push(result)
            }
            //重新将文件夹推送到ipns
            ipfs.name.publish(data.find(i => i.path == user).cid,{
                key
            }).then(res=>{
                console.log(res)
            })
        }


        //读取ipfs文件
        // const decoder = new TextDecoder()
        // let data = ''
        // for await (const chunk of ipfs.cat('Qma1bSUJ4m7rdV615MGNcYC4V1bWrt9x29PDYa5DQ9SSJX')) {
        // // chunks of data are returned as a Uint8Array, convert it back to a string
        // data += decoder.decode(chunk, { stream: true })
        // }
        return data
    }
    static async getArticle(ctx) {
        let { id: host } = ctx.state
        let { currentPage = 1, search, type, tags, id } = ctx.request.query
        let whereClause = id ? { uid: id } : {}
        console.log(currentPage, search, type, tags, id)
        if (search) {
            whereClause = {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        tags: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        expla: {
                            [Op.like]: `%${search}%`
                        }
                    },
                    {
                        type: {
                            [Op.like]: `%${search}%`
                        }
                    }
                ]
            };
            if (type) {
                whereClause.type = { [Op.like]: `%${type}%` };
            } else if (tags) {
                whereClause.tags = { [Op.like]: `%${tags}%` };
            }
        } else {
            if (type) {
                whereClause.type = { [Op.like]: `%${type}%` };
            } else if (tags) {
                if (tags == 'focu') {
                    const followers = await userfocu.findAll({ where: { follower: host }, attributes: ['followee'] })
                    whereClause.uid = followers.map(i => i.followee)
                }
                else
                    whereClause.tags = { [Op.like]: `%${tags}%` };
            }
        }
        console.log(whereClause)
        const data = await userArticle.findAndCountAll({
            where: whereClause,
            include: [{ model: user, attributes: ['username', 'headImage'] }],
            limit: 5,
            offset: (currentPage - 1) * 5,
            attributes: { exclude: ['text'] }
        });
        return data
    }
    static async getAllBlog(ctx) {
        return userArticle.findAll({ include: [{ model: user, attributes: ['username', 'headImage'] }], where: {}, attributes: { exclude: ['text'] } })
    }
    static async getArticleInfo(ctx) {
        const { id } = ctx.query
        const data = await userArticle.findOne({ where: { id }, include: [{ model: user, attributes: ['username', 'headImage', 'id'] }] })
        const isFollow = await userfocu.findAll({ where: { followee: data.uid, follower: ctx.state.id } })
        return { data, isFollow: isFollow.length != 0 }
    }
    static async getType(ctx) {
        const { id } = ctx.state
        const { uid } = ctx.query
        let types, tags
        types = await userArticle.count({ group: 'type', where: { uid: uid || id }, attributes: ['type'] })
        tags = await userArticle.findAll({ where: { uid: uid || id }, attributes: ['tags'] })
        return { data: { types, tags } }
    }
    static async deleteBlog(ctx) {
        const {user}=ctx.state
        let { id } = ctx.request.body
        let del=await userArticle.findByPk(id)
        let flag = await userArticle.destroy({ where: { id } })
        console.log(del,del.title)
        fs.rm(`${__dirname}/../../../public/${user}/${del.title}.md`,(err,data)=>{
            console.log(err,data)
        })
        return flag
    }
    static async goodArticle(ctx) {
        const { id } = ctx.state
        let article = await userArticle.findByPk(ctx.request.body.id)
        if (article.good) {
            if (JSON.parse(article.good).includes(id))
                return '已经点过赞了'
            else
                article.good = JSON.parse(article.good).push(id)
        }
        else
            article.good = JSON.stringify([id])
        await article.save()
        return '点赞成功'
    }
    static async watchArticle(ctx) {
        const article = await userArticle.findByPk(ctx.request.body.id)
        article.watch = +(article.watch) + 1
        await article.save()
    }
    static async getTags(ctx) {
        let { id } = ctx.state
        let tags = await userArticle.findAll({ attributes: ['tags'] })
        return tags
    }
    static async getBestAuthors(ctx) {
        let author = await userArticle.findAll({
            attributes: ['uid', [sequelize.fn('COUNT', sequelize.col('userArticle.id')), 'count'], [sequelize.literal('`user`.`username`'), 'username'], [sequelize.literal('`user`.`headImage`'), 'headImage'], [sequelize.literal('`user`.`introduce`'), 'description']],
            include: [{
                model: user,
                attributes: []
            }],
            group: ['uid'],
            order: [[sequelize.literal('count'), 'DESC']],
            limit: 4,
        });
        return author;
    }

}
module.exports = blogService