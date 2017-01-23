// pages/index/index.js
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad:function(options){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //如果用户类型为1，即为普通用户，则跳转到用户首页
      if(userInfo.usertype==1){
        wx.navigateTo({
          url: '../userindex/userindex',
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
        //如果用户类型为0，即为管理员，则跳转到管理员首页
      }else{
        wx.navigateTo({
          url: '../managerindex/managerindex',
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
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})