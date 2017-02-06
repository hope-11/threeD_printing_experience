//userindex.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: wx.getStorageSync('userInfo')
  },
  //事件处理函数
  onLoad: function () {
  },
  viewUserinfo: function() {
    wx.navigateTo({
      url: '../userinfo/userinfo'
    })
  },
  beginExperience: function() {
    wx.navigateTo({
      url: '../experiencing/experiencing',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
