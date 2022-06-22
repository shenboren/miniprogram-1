const cloud = require('wx-server-sdk');

cloud.init({
  env: 'cloud1-0gmgzv0q6dc342e8'
});

const db = cloud.database();

// 创建集合云函数入口函数
exports.main = async (event, context) => {

  const wxContext = cloud.getWXContext();

  try {
    await db.collection('boxCodeInfo').add({
      data: {
        boxCode: event.boxCodeNum,
        testTubeNum: event.testTubeNum,
        openid: cloud.getWXContext().OPENID,
      }
    });
    return {
      success: true,
      test:'test',
      openid: cloud.getWXContext.openid,
    };
  } catch (e) {
    // 这里catch到的是该collection已经存在，从业务逻辑上来说是运行成功的，所以catch返回success给前端，避免工具在前端抛出异常
    return {
      false: true,
      test: e,
    };
  }
};
