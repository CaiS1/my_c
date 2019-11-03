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
    var story = "\n其实这时候任何多的言语已经不重要\n\n我们安静的享受这一刻\n\n就这样\n\n我们开始了\n\n我们之间相处得很融洽\n\n彷佛有着聊不完的话题\n\n只要抓住一个话题，我都不会放过，一直聊下去\n\n我们逐渐交流得更深入，把自己内心的想法都倾诉了出来\n\n就这样...\n\n我们成为了对方的伴侣\n\n之后，她还是很喜欢和我抱怨生活上的琐事\n\n其实她都知道应该怎么去处理，但是她还是喜欢和我说\n\n我只需要安静的做一个倾听者就好了\n\n两个人相处，原来无限小的瑕疵也会变大\n\n生活不是我迁就她，就是她迁就我不是吗？\n\n一天，加班到深夜，回到家\n\n她正在床上刷着手机\n\n床上散乱着一大堆她的衣服";
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
      url: '/pages/the_sev_page/the_sev_page',
    })
  },
  jumpToOverMissionList: function () {

    wx.redirectTo({

      url: "/pages/the_9_page/the_9_page"

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