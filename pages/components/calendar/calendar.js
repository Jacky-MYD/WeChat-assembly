// pages/components/calendar/calendar.js
Page({
    data: {
        selectedDate: '',// 选中日期
        selectedWeek: '',// 选中的星期几
        curYear: 2017,// 当前年
        curMonth: 0,// 当前月
        daysCountArr: [// 保存各个月份的长度，平年
            31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        ],
        weekArr: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dateList: []
    },

    onShow: function () {
        var curDate = new Date();// 当前时间
        var year = curDate.getFullYear(), month = curDate.getMonth() + 1,
            day = curDate.getDate(), week = curDate.getDay();
        this.setData({
            curYear: year,
            curMonth: month,
            selectedDate: year + '-' + month + '-' + day,
            selectedWeek: this.data.weekArr[week]
        });
        this.getDateList(year, month-1);
    },
    // 获取日期
    getDateList: function (year, month) {
        var vm = this;
        // 闰年做区别
        var daysCountArr = vm.data.daysCountArr;
        if (year % 4 == 0 && year % 100 !=0) {
            vm.data.daysCountArr[1] = 29;
            vm.setData({
                daysCountArr: daysCountArr
            })
        }
        //第几个月；下标从0开始实际月份还要再+1  
        var dateList = [];
        // console.log('本月', vm.data.daysCountArr[mon], '天');
        dateList[0] = [];
        var weekIndex = 0;//第几个星期
        for (var i = 0; i < vm.data.daysCountArr[month]; i++) {
            var weeks = new Date(year, month, (i+1)).getDay();
            // 如果是新的一周，则新增一周
            if (weeks == 0) {
                weekIndex++;
                dateList[weekIndex] = [];
            }
            // 如果是第一行，则将该行日期倒序，以便配合样式居右显示
            if (weekIndex == 0) {
                dateList[weekIndex].unshift({
                    value: year + '-' + (month + 1) + '-' + (i + 1),
                    date: i + 1,
                    weeks: weeks
                })
            } else {
                dateList[weekIndex].push({
                    value: year + '-' + (month + 1) + '-' + (i + 1),
                    date: i + 1,
                    weeks: weeks
                })
            }
        }
        // console.log('本月日期', dateList);
        vm.setData({
            dateList: dateList
        });
    },
    // 选择的日期
    selectDate: function (e) {
        console.log(e.currentTarget.dataset);
        var vm = this;
        vm.setData({
            selectedDate: e.currentTarget.dataset.date.value,
            selectedWeek: vm.data.weekArr[e.currentTarget.dataset.date.weeks]
        })
    },
    // 上一个月
    preMonth: function () {
        var vm =this;
        var curYear = vm.data.curYear, curMonth = vm.data.curMonth;
        curYear = curMonth - 1 ? curYear : curYear - 1;
        curMonth = curMonth - 1 ? curMonth - 1 : 12;
        vm.setData({
            curYear: curYear,
            curMonth: curMonth
        })
        vm.getDateList(curYear, curMonth - 1);
    },
    // 下一个月
    nextMonth: function () {
        var vm = this;
        var curYear = vm.data.curYear, curMonth = vm.data.curMonth;
        curYear = curMonth + 1 == 13 ? curYear + 1 : curYear;
        curMonth = curMonth + 1 == 13 ? 1 : curMonth + 1;
        vm.setData({
            curYear: curYear,
            curMonth: curMonth
        })
        vm.getDateList(curYear, curMonth - 1);
    }
})
