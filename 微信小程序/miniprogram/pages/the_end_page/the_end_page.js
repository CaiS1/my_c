// pages/the_first_page/the_first_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    var that = this
    //文字逐个显示
    var story = "\n感谢《拣爱》，一款暖心的小游戏\n\n感谢带入小程序入坑者：晨星\n\n感谢插画作者：dan\n\n联系作者：17687310701（同微信）\n\n（注：此小程序不做任何商业用途\n某些图源自网络，侵权删)";
    var i = 0;
    var time = setInterval(function () {
      var text = story.substring(0, i);
      i++;
      that.setData({
        text: text
      });
      if (text.length == story.length) {
        //   console.log("定时器结束！");
        clearInterval(time);
      }
    }, 100)

  },
  goToTalkPage: function (param) {
    wx.redirectTo({
      url: '/pages/the_end_page/the_end_page',
    })
  },

  /**
   * 生命周期函数--监听页面加载

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})