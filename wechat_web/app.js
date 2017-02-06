//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function(res){
        if(res.code){
          wx.getUserInfo({
            success: function(res){
              // 将用户信息存入本地缓存
              var userInfo=res.userInfo
              wx.setStorageSync('userInfo', userInfo)
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }
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