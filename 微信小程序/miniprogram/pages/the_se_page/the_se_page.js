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
    var story = "\n她简单介绍了自己\n\n不知不觉中...我们就聊了许多\n\n这也是她后来告诉我的\n\n聊天后,我留下了她的微信\n\n开始大家都很拘谨\n\n但很快我们就成为了相互倾诉琐事的朋友\n\n我觉得自己很幸运\n\n两个礼拜后\n\n我一直想找个机会把她约出来看个电影,吃个饭\n\n";  
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
      url: '/pages/the_th_page/the_th_page',
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