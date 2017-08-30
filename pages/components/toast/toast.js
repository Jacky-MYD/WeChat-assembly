// pages/components/toast/toast.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        toastModalStatus: false,// 弹框
        toastColor: '',// 图标背景颜色
        toastFontColor: ''// 图标颜色
    },

    showToast: function () {
        var vm = this;
        vm.data.count = parseInt(vm.data.count) ? parseInt(vm.data.count) : 3000;
        vm.data.toastColor = vm.data.toastColor ? vm.data.toastColor : '#f6a623';
        vm.data.toastFontColor = vm.data.toastFontColor ? vm.data.toastFontColor : '#fff';
        vm.setData({
            toastModalStatus: true,
            toastColor: vm.data.toastColor,
            toastFontColor: vm.data.toastFontColor
        });
        setTimeout(function () { 
            vm.setData({
                toastModalStatus: false,
                toastColor: '',
                toastFontColor: ''
            });
        }, vm.data.count)
    },

    warning: function () {
        this.setData({
            count: 1500,
            toastTitle: '警告!',
            toastText: '您的智商余额已不足！请及时充值！'
        })
        this.showToast();
    },

    danger: function () {
        this.setData({
            count: '',
            toastTitle: '危险!',
            toastText: '您的智商已为0，请call白车！',
            toastColor: '#ff0000',
            toastFontColor: '#fff'
        })
        this.showToast();
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
})