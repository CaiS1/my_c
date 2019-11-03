
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    var that = this
    //文字逐个显示
    var story = "\n嗯...\n\n就这样\n\n我们开始了\n\n我们之间相处得很融洽\n\n彷佛有着聊不完的话题\n\n只要抓住一个话题，我都不会放过，一直聊下去\n\n我们逐渐交流得更深入，把自己内心的想法都倾诉了出来\n\n就这样...\n\n我们成为了对方的伴侣\n\n之后，她还是很喜欢和我抱怨生活上的琐事\n\n我觉得她自己已经可以处理得很好\n\n我不愿过多的操心与安慰\n\n也没有安安静静的去听\n\n可是不知道为何她却整天为这些事烦心\n\n两个人相处，原来无限小的瑕疵也会变大\n\n一天，加班到深夜，回到家\n\n她正在床上刷着手机\n\n床上散乱着一大堆她的衣服";
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
      url: '/pages/the_8_page/the_8_page',
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