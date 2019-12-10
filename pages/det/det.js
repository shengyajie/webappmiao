var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    tabs: ["支出", "收入"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    imgHoverIndex:0,
    imgList:[
      {
        url:'../../images/shop/cashg0.png',
        hoverUrl:'../../images/shop/cashg1.png',
        title:'通讯',
        tecolor: '#616161',
        hocolor: "#000"
      },
      {
        url:'../../images/shop/comm0.png',
        hoverUrl:'../../images/shop/comm1.png',
        title: '娱乐',
        tecolor: '#616161',
        hocolor: "#000"
      },
      {
        url: '../../images/shop/comm0.png',
        hoverUrl: '../../images/shop/comm1.png',
        title: '住房',
        tecolor: '#616161',
        hocolor: "#000"
      },
      {
        url: '../../images/shop/comm0.png',
        hoverUrl: '../../images/shop/comm1.png',
        title: '化妆品',
        tecolor: '#616161',
        hocolor: "#000"
      },
      {
        url: '../../images/shop/comm0.png',
        hoverUrl: '../../images/shop/comm1.png',
        title: '医疗',
        tecolor: '#616161',
        hocolor: "#000"
      },
      {
        url: '../../images/shop/comm0.png',
        hoverUrl: '../../images/shop/comm1.png',
        title: '宠物',
        tecolor: '#616161',
        hocolor:"#000"
      }
    ]
  },
  chooseThis(e) {
    this.setData({
      imgHoverIndex: e.currentTarget.dataset.index,
    })
  },
  show:function(){
   
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
});