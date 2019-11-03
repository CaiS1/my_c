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
    var story = "\n“嗯嗯，我可是它的大粉丝呢！”\n\n“每一部电影我都有看，我们一起去看吧。”\n \n“那我们周末见”\n\n终于到了和她一起看电影的日子\n\n第一次和她看电影还是很紧张\n\n我的手心一直在冒汗\n\n我不停的在擦汗，擦汗\n\n电影结束了\n\n“电影好好看啊，我好喜欢”\n\n“接下来我们去哪呢？”\n\n这附近我知道有好几家店很好吃";
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
      url: '/pages/the_five_page/the_five_page',
    })
  },
  jumpToOverMissionList: function () {

    wx.redirectTo({

      url: "/pages/the_6_page/the_6_page"

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