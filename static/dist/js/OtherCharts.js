// 传感器比例饼图
function proportion() {
    var myChart = echarts.init(document.getElementById("sensor_proportion_1"));
    option = {
    title: {
        text: '传感器各类型占比',
        subtext: '',
        left: 'center',
        textStyle: {
            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['温度传感器', '湿度传感器', '压力传感器', 'PM2.5传感器', 'PM10传感器'],
        textStyle: {
            color: '#ffffff'
        }
    },
    series: [
        {
            name: '数量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 454, name: '温度传感器'},
                {value: 454, name: '湿度传感器'},
                {value: 454, name: '压力传感器'},
                {value: 494, name: 'PM2.5传感器'},
                {value: 494, name: 'PM10传感器'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    myChart.setOption(option);

}

//温湿度实时折线图
function realTemAndHum_data() {
    var myChart = echarts.init(document.getElementById("realTemAndHum_1"));
    var data = [];
    var data2 = [];
    var now = +new Date(2014, 11, 29);
    var oneDay = 24 * 3600 * 1000;
    var value = Math.random() * 1000;

    function randomData() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value)
            ]
        }
    }


    function randomData2() {
        now = new Date(+now + oneDay);
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                Math.round(value + 100)
            ]
        }
    }



    for (var i = 0; i < 1000; i++) {
        data.push(randomData());
        data2.push(randomData2());
    }
    //指定图表的配置项和数据
            option = {
                title: {
                    text: '仿真设备实时温度',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: function(params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                    },
                    axisPointer: {
                        animation: false
                    }
                },


                xAxis: {
                    type: 'time',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                        }
                    }
                },

                series: [{
                    name: '模拟数据1',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }, {
                    name: '模拟数据2',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data2
                }]
            };

            setInterval(function() {

                for (var i = 0; i < 5; i++) {
                    data.shift();
                    data.push(randomData());
                    data2.push(randomData2());
                }

                myChart.setOption({
                    series: [{
                        data: data
                    }, {
                        data: data2
                    }]
                });
            }, 1000);

    myChart.setOption(option);
    
}