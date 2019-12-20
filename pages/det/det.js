var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
// var imgList =getApp().imgList;
Page({
  data: {
    tabs: ["支出", "收入"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    imgHoverIndex: 0,
    testcl: '#ccc',
    testho: '#1296db',
    tecolor: '#616161',
    hocolor: "#000",
    imgList: [{
        url: '../../images/shop/comm0.png',
        hoverUrl: '../../images/shop/comm1.png',
        hoverUrl1: '../../images/shop/comm2.png',
        title: '通讯',
        id: 0
      },
      {
        url: '../../images/shop/enta0.png',
        hoverUrl: '../../images/shop/enta1.png',
        hoverUrl1: '../../images/shop/enta2.png',
        title: '娱乐',
        id: 1
      },
      {
        url: '../../images/shop/house0.png',
        hoverUrl: '../../images/shop/house1.png',
        hoverUrl1: '../../images/shop/house2.png',
        title: '住房',
        id: 2
      },
      {
        url: '../../images/shop/makeup0.png',
        hoverUrl: '../../images/shop/makeup1.png',
        hoverUrl1: '../../images/shop/makeup2.png',
        title: '化妆品',
        id: 3
      },
      {
        url: '../../images/shop/med0.png',
        hoverUrl: '../../images/shop/med1.png',
        hoverUrl1: '../../images/shop/med2.png',
        title: '医疗',
        id: 4
      },
      {
        url: '../../images/shop/pet0.png',
        hoverUrl: '../../images/shop/pet1.png',
        hoverUrl1: '../../images/shop/pet2.png',
        title: '宠物',
        id: 5
      }, {
        url: '../../images/shop/resta0.png',
        hoverUrl: '../../images/shop/resta1.png',
        hoverUrl1: '../../images/shop/resta2.png',
        title: '饮食',
        id: 6
      }, {
        url: '../../images/shop/shop0.png',
        hoverUrl: '../../images/shop/shop1.png',
        hoverUrl1: '../../images/shop/shop2.png',
        title: '购物',
        id: 7
      }, {
        url: '../../images/shop/spo0.png',
        hoverUrl: '../../images/shop/spo1.png',
        hoverUrl1: '../../images/shop/spo2.png',
        title: '运动',
        id: 8
      }, {
        url: '../../images/shop/study0.png',
        hoverUrl: '../../images/shop/study1.png',
        hoverUrl1: '../../images/shop/study2.png',
        title: '学习',
        id: 9
      }, {
        url: '../../images/shop/trip0.png',
        hoverUrl: '../../images/shop/trip1.png',
        hoverUrl1: '../../images/shop/trip2.png',
        title: '旅游',
        id: 10
      }, {
        url: '../../images/shop/tran0.png',
        hoverUrl: '../../images/shop/tran1.png',
        hoverUrl1: '../../images/shop/tran2.png',
        title: '交通',
        id: 10
      }
    ]
  },
  chooseThis(e) {
    this.setData({
      imgHoverIndex: e.currentTarget.dataset.index,
    })
  },
  show: function() {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.array[e.detail.value])
  },

  onLoad: function() {
    var postId = options.index
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 获取input输入的支出金额
  bindkeyInput: function(e) {
    console.log(e)
    this.setData({
      inputValue: "-" + e.detail.value
    });
  },
  // 获取input输入的收入金额
  bindincvalue: function(e) {
    this.setData({
      inputValue: "+" + e.detail.value
    });
  },
  gotoindex: function(e) {
    wx.reLaunch({
      url: '/pages/index/index?inputValue=' + this.data.inputValue + '&hoverurl=' + this.data.imgList[e.currentTarget.dataset.index].hoverUrl + '&imgtitle=' + this.data.imgList[e.currentTarget.dataset.index].title,
    })
    if (!wx.getStorageSync('items')) {
      wx.setStorageSync('items', [])
    }
  }

});