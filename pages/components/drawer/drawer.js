// pages/components/drawer/drawer.js
Page({
    setModalStatus: function (e) {
        console.log(e);
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData: animation.export()
        });
        if (e.currentTarget.dataset.status == 1) {
            this.setData({
                showModalStatus: true
            })
        }
        setTimeout(function() {
            animation.translateY(0).step();
            this.setData({
                animationData: animation
            });
            if (e.currentTarget.dataset.status == 0) {
                this.setData({
                    showModalStatus: false
                })
            }
        }.bind(this), 200)
    }
})