const { Op, where } = require('sequelize');
const UserFocus = require('../model/UserFocu');
const User=require('../model/User')
const UserArticle=require('../model/UserArticle')
class UserFocuService {
  // 关注某个用户
    static async  followUser(ctx) {
    const { id } = ctx.state;
    const { followeeId } = ctx.request.body;
    const userFocu = await UserFocus.create({
      follower: id,
      followee: followeeId,
    });
    return userFocu
  }
   static async  unfollowUser(ctx) {
    const { id } = ctx.state;
    const { followeeId } = ctx.request.body;
    await UserFocus.destroy({
      where: {
        follower: id,
        followee: followeeId,
      },
    });
  }
  static async getUserFanNumber(followee_id) {
    return UserFocus.count({
      where: {
        followee_id
      }
    });
  }
  //获取用户的粉丝
  static async getAllFollowers(ctx) {
    const {id} = ctx.request.body
    const userFollows = await UserFocus.findAll({
      where: { followee: id}
    });
    const followerIds = userFollows.map(i=> i.follower);
    const followers = await User.findAll({
        where: { id: { [Op.in]: followerIds }},
    });
    return followers;
  }
  //获取用户的关注者
  static async  getAllFollowees(ctx) {
    const {id} = ctx.request.body
    const userFollowees = await UserFocus.findAll({
      where: {
        follower: id,
      },
    });
    const followeeIds = userFollowees.map(i => i.followee);
    const followees = await User.findAll({
      where: { id: { [Op.in]: followeeIds } },
      include: [{
        model: UserArticle,
        attributes: ['title', 'id', 'time'],
        order: [['time', 'DESC']],
        limit: 3
      }]
    });
    console.log(followees)
    return followees
  }
}

module.exports = UserFocuService;