Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '有兴必有亡',
    answer: '开心鬼',
    count: 0,
    hiddenName: true
  },
  nextAnswer: function() {
    var arrary = [{
        id: 1,
        title: '',
        answer: ''
      },
      {
        id: 2,
        title: '机关算尽太聪明，反误了卿卿性命',
        answer: '精灵鬼'
      },
      {
        id: 3,
        title: '灵魂儿飞去半天',
        answer: '神鬼人'
      },
      {
        id: 4,
        title: '生死之交',
        answer: '活见鬼'
      }
    ]
    if (wx.getStorageSync('count') == arrary.length - 1) {
      wx.setStorage({
        key: 'count',
        data: 0,
      })
      var count = wx.getStorageSync('count')
      var count = count + 1;
      console.log('count', count)
      var title = arrary[count].title
      var answer = arrary[count].answer
      this.setData({
        title: title,
        answer: answer,
        count: count
      })
      wx.setStorage({
        key: 'count',
        data: count,
      })
    } else if (wx.getStorageSync('count')) {
      var count = wx.getStorageSync('count')
      var count = count + 1;
      console.log('count', count)
      var title = arrary[count].title
      var answer = arrary[count].answer
      this.setData({
        title: title,
        answer: answer,
        count: count
      })
      wx.setStorage({
        key: 'count',
        data: count,
      })

    } else {
      var count = this.data.count;
      console.log('countadd->', count)
      var countadd = count + 1;
      console.log('countadd', countadd)
      var title = arrary[countadd].title
      var answer = arrary[countadd].answer
      this.setData({
        title: title,
        answer: answer,
      })
      wx.setStorage({
        key: 'count',
        data: countadd,
      })
    }

  },
  look: function() {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    var that = this;　　
    var shareObj = {　　　　
      title: "",
      path: '',
      imgUrl: '',
      success: function(res) {　　　　　
        if (res.errMsg == 'shareAppMessage:ok') {}　　　　
      },
      fail: function() {　　　　　　　
        if (res.errMsg == 'shareAppMessage:fail cancel') {　

        } else if (res.errMsg == 'shareAppMessage:fail') {

        }　　　　
      },
      complete: function() {

      }　　
    };　　　　
    if (options.from == 'button') {　　　　
      var dataid = options.target.dataset;　　　　
      shareObj.path = '/pages/btnname/btnname?id=' + dataid.id;　　
    }　　　　
    return shareObj;
  }
})