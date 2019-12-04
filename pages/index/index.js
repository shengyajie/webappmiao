// pages/sta/sta.js
var startPoint;
Page({
  data: {
    scrollHeight: "",
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: ''
  },

  onLoad: function(options) {
    let self = this;
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          scrollHeight: res.windowHeight
        })
      },
    });
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        // 屏幕宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  buttonStart: function(e) {
    startPoint = e.touches[0]
  },
  buttonMove: function(e) {
    var endPoint = e.touches[e.touches.length - 1]
    var translateX = endPoint.clientX - startPoint.clientX
    var translateY = endPoint.clientY - startPoint.clientY
    startPoint = endPoint
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50;
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0;
    }
    if (buttonTop <= 0) {
      buttonTop = 0
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },

  buttonEnd: function(e) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  onShow: function() {

  }
})