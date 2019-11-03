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
    var story = "\n 我是一名即将毕业学生，此刻正在泡着图书馆\n\n我正为自己的学业而努力\n\n忽然在在图书馆的一角\n\n在人群之中，我便注意到了她\n\n她此刻和她的朋友在一起\n\n不知为何，她的朋友突然都走开了，只剩她一人写写画画\n\n我鼓起勇气\n\n心中想着如何和她说上话\n\n然而却心绪杂乱，无法控制\n\n我振作了起来\n\n整理好我的衣着\n\n朝着她走了过去\n\n来到她的面前\n\n";
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
      url: '/pages/the_se_page/the_se_page',
    })
  },
  jumpToOverMissionList: function () {

    wx.redirectTo({

      url: "/pages/the_2_page/the_2_page"

    });
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