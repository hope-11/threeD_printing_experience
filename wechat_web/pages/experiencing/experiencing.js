// pages/experiencing/experiencing.js
Page({
  data:{
    restTime: 60
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      setInterval(function(){
    //var restTime=Page.data.restTime
    console.log(1)
    //this.setData({restTime: this.getData.restTime-1})
  }, 1000)
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
