// pages/components/waterfall/waterfall.js
Page({
    data: {
        list: [
            {
                url: '/images/example0.png',
                name: '《火焰》'
            },
            {
                url: '/images/example1.png',
                name: '《水》'
            },
            {
                url: '/images/example2.png',
                name: '《秋分》'
            },
            {
                url: '/images/example3.png',
                name: '《冰梦》'
            },
            {
                url: '/images/example4.png',
                name: '《星空》'
            },
            {
                url: '/images/example0.png',
                name: '《火焰》'
            },
            {
                url: '/images/example1.png',
                name: '《水》'
            },
            {
                url: '/images/example2.png',
                name: '《秋分》'
            },
            {
                url: '/images/example3.png',
                name: '《冰梦》'
            },
            {
                url: '/images/example4.png',
                name: '《星空》'
            }
        ],
        leftHeight: 0,
        rightHeight: 0,
        length: 10,
        pageNo: 1,
        descHeight: 30, //图片文字描述的高度
        pageStatus: true
    },
    onShow: function () {
        this.setData({
            list2:  this.data.list
        })
    },
    loadImage: function (e) {
        // console.log(e);
        var vm = this;
        // 设备屏幕宽度
        var windowWidth = wx.getSystemInfoSync().windowWidth;
        var index = e.currentTarget.dataset.index;
        // console.log(windowWidth);
        vm.data.list[index].height = windowWidth / 2 / e.detail.width * e.detail.height;
        var count = 0;
        for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
            if (vm.data.list[i].height) {
                count++;
            }
        }
        if (count == vm.data.length) {
            for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
                if (vm.data.leftHeight <= vm.data.rightHeight) {
                    vm.data.list[i].top = vm.data.leftHeight;
                    vm.data.list[i].left = windowWidth * 0.005;
                    vm.setData({
                        leftHeight: vm.data.leftHeight + vm.data.list[i].height + vm.data.descHeight
                    })
                } else {
                    vm.data.list[i].top = vm.data.rightHeight;
                    vm.data.list[i].left = windowWidth / 2 - windowWidth * 0.005;
                    vm.setData({
                        rightHeight: vm.data.rightHeight + vm.data.list[i].height + vm.data.descHeight
                    })
                }
            }
            vm.setData({
                list: vm.data.list
            })
        }
    },
    onReachBottom: function () {
        var vm = this;
        vm.setData({
            pageStatus: true
        });
        if (vm.data.pageNo <= vm.data.length) {
            setTimeout(function(){
                vm.setData({
                    pageNo: vm.data.pageNo + 1,
                    list: vm.data.list.concat(vm.data.list2),
                    pageStatus: false
                })
            },1500)
        } else {
            vm.setData({
                pageStatus: false
            })
        }
    }
})