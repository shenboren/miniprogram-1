// pages/confirmReceipt/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  confirmReceiptFrom: function(data){
    console.log(data.detail.value);
    this.createBoxCodeInfo(data.detail.value.testTubeNum)
  },

  createBoxCodeInfo(testTubeNum){
    wx.showLoading({
      title: '上传中',
    });
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'createBoxCodeInfo',
        boxCodeNum: this.data.boxCodeNum,
        testTubeNum: testTubeNum,
      },
    }).then((resp) => {
      console.log(resp);
      wx.hideLoading();
      wx.redirectTo({
        url: '/pages/index/index',
      })
      
   }).catch((e) => {
      console.log('Create Error');
      wx.hideLoading();
   });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      boxCodeNum : options.boxCodeNum
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})