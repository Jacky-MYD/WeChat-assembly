// pages/components/city_picker/city_picker.js
import dataSource from '../../../utils/util'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinceList: dataSource.provinceList,
        showModalStatus: false,
        cityList: [],
        areaList: [],
        showCity: false,
        showArea: false,
        resigonArr: [],
        resigon: '',
        selectedPro: '',
        selectedCity: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onShow: function () {
        // 页面显示
        this.setData({
            cityList: wx.getStorageSync('province').children
        });
        console.log(this.data.provinceList)
    },
    showProvince: function (e) {
        var animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData: animation.export()
        });
        if (e.currentTarget.dataset.status == 1) {
            this.setData(
                {
                    cityList: [],
                    areaList: [],
                    showCity: false,
                    showArea: false,
                    showModalStatus: true,
                    provinceTop: 0,
                    cityTop: 0,
                    selectedPro: '',
                    selectedCity: ''
                }
            );
        }
        setTimeout(function () {
            animation.translateY(0).step()
            this.setData({
                animationData: animation
            })
            if (e.currentTarget.dataset.status == 0) {
                this.setData(
                    {
                        showModalStatus: false
                    }
                );
            }
        }.bind(this), 200)
    },
    selectedProvince: function (e) {
        console.log(e)
        var vm = this, provinceIndex = e.currentTarget.dataset.index;
        var resigon1 = vm.data.provinceList[provinceIndex].label;
        vm.data.resigonArr.splice(0, 1, resigon1);
        vm.setData({
            cityList: vm.data.provinceList[provinceIndex].children,
            resigonArr: vm.data.resigonArr,
            selectedPro: vm.data.resigonArr[0],
            provinceTop: e.currentTarget.offsetTop,
            showCity: true,
            showArea: false
        });
        console.log(vm.data.provinceTop)
    },
    selectedCity: function (e) {
        console.log(e)
        var vm = this, cityIndex = e.currentTarget.dataset.index;
        var resigon2 = vm.data.cityList[cityIndex].label;
        vm.data.resigonArr.splice(1, 1, resigon2);
        console.log(vm.data.resigonArr)
        vm.setData({
            areaList: vm.data.cityList[cityIndex].children,
            resigonArr: vm.data.resigonArr,
            selectedCity: vm.data.resigonArr[1],
            cityTop: e.currentTarget.offsetTop,
            showArea: true
        });
    },
    selectedArea: function (e) {
        var vm = this, areaIndex = e.currentTarget.dataset.index;
        var resigon3 = vm.data.areaList[areaIndex].label;
        vm.data.resigonArr.splice(2, 1, resigon3);
        var resigon = vm.data.resigonArr.join('');
        vm.setData({
            resigonArr: [],
            selectedPro: '',
            selectedCity: '',
            provinceTop: 0,
            cityTop: 0,
            resigon: resigon,
            showCity: false,
            showArea: false,
            showModalStatus: false
        })
    }
})