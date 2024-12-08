import musicList from '../../datas/musicList.js';

// pages/broadcast/broadcast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: {
      image: "紫色渐变.png",
      title: "私人雷达",
      subtitle: "每日更新",
      description: "听你所爱之音🎶",
      likes: 50251,
      comments: 35556,
      favorites: "352.7万"
    },
    music: {

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      music: musicList.music
    })
    console.log(musicList);
    console.log(musicList.music);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onMouseOver(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      [`songs[${index}].isHovered`]: true
    });
  },

  onMouseOut(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      [`songs[${index}].isHovered`]: false
    });
  }
})


