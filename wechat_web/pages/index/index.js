//userindex.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: wx.getStorageSync('userInfo')
  },
  //事件处理函数
  onLoad: function () {
    var userInfo=wx.getStorageSync('userInfo')
    if(userInfo==''){
      var that = this
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
          userInfo:userInfo
        })
      })
    }
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
