// pages/sta/sta.js
//  items = require("../../data/miaodetail.js")
var util = require('../../utils/util.js');
var startPoint;
var app = getApp();

Page({
  data: {
    scrollHeight: "",
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',
    startX: 0, //开始坐标
    startY: 0,
    items: [],
    total: [],
    incomevalue: 0,
    spentvalue: 0,
    mont: '',
    date: ''
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
    this.setData({
      date: util.formatTime(new Date()),
      mont: util.formatTime1(new Date())
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
    if (wx.getStorageSync('items')) {
      let items = wx.getStorageSync('items')
      if (options.inputValue) {
        items.push({
          inputValue: options.inputValue,
          hoverurl: options.hoverurl,
          imgtitle: options.imgtitle
        })
      };
      this.setData({
        // miaode: items.postList,
        //获取input的金额
        items: items,
      })
      wx.setStorageSync('items', items);
      //   // 计算当月收s入支出金额
      let {
        incomevalue,
        spentvalue
      } = this.data

      for (let index = 0; index < this.data.items.length; index++) {

        if (parseInt(this.data.items[index].inputValue) >= 0) {

          incomevalue = parseInt(this.data.items[index].inputValue) + incomevalue;

        } else {
          console.log(this.data.items[index].inputValue)
          spentvalue = parseInt(this.data.items[index].inputValue) + spentvalue;

        }
      }
      this.setData({
        incomevalue,
        spentvalue,
      })
    };

  },

  //左滑删除
  //手指触摸动作开始 记录起点X坐标
  touchstart: function(e) {
    //开始触摸时 重置所有删除

    this.data.items.forEach(function(v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function(e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    that.data.items.forEach(function(v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: this.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function(e) {
    console.log(e.currentTarget.dataset.index)
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      items: this.data.items
    })
    wx.setStorageSync('items', this.data.items);
  },

  // 点击按钮
  adddetail: function() {
    wx.navigateTo({
      url: '../det/det',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})