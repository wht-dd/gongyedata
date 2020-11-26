// 传感器比例饼图
function proportion(datax,datay) {

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
        data: datax,
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
            data:datay,
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
                 legend: {
                    data: ['温度','湿度'],
                    textStyle: {
                            color: '#ffffff',
                        },
                    left:'center',
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
                    name: '温度',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data
                }, {
                    name: '湿度',
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


 function map() {

$.get("/static/dist/json/洛龙区.json",function(map){
    var data = [
         {name: '洛阳理工学院', value: 1}
    ];
    var geoCoordMap = {

       '洛阳理工学院':[112.427988,34.618912],
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    echarts.registerMap("luoyang",map);
	var myChart = echarts.init(document.getElementById('sensor_proportion_2'));
    var option = {
            title: {
                text: '洛阳理工学院 ',
                left: 'left'
            },

            toolbox: {
                show: true,
                left: 'right',
                top: 'top',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },

			geo: {
                map: 'luoyang',
                roam:true,//鼠标滚轮缩放
                aspectScale:1,
                itemStyle: {
                    normal: {
                        borderWidth:1,
                        borderColor:'#ffffff',//区域边框色
                        areaColor: 'rgba(128, 128, 128, 0.1)',//区域背景色:透明


                    },

                },
            },

         series : [
            {
                name: '传感器',
                type: 'scatter',
                coordinateSystem: 'geo', // series坐标系类型
                data: convertData(data),

            },

        ]

    }


    myChart.setOption(option);

    });
    }

// 传感器比例饼图
function proportion(datax,datay) {

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
        data: datax,
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
            data:datay,
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


function P_TH_0(data) {
    var myChart = echarts.init(document.getElementById("P_TH_0"));
var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    color: colors,
    title: {
        text: '温湿度-压力',
        textStyle: {
                color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['温度', '湿度'],
        left:'right',
        textStyle: {
                color: '#ffffff'
        }

    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '温度：  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: data.pressure
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '湿度：  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: data.pressure
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
            show: true,
            textStyle: {
                color: '#9287e7',
            }
        },
        axisLine:{
            lineStyle:{
                color:'#9287e7',

            }
        }
        }
    ],
    series: [
        {
            name: '温度',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: data.p1,
        },
        {
            name: '湿度',
            type: 'line',
            smooth: true,
            data: data.p2
        }
    ]
};

    myChart.setOption(option);

}

//湿度/压力
function P_TH_1() {
    var myChart = echarts.init(document.getElementById("P_TH_1"));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                color: 'green',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }]
    };
    myChart.setOption(option);
}

//湿度/PM
function PTH_PM_1() {
    var myChart = echarts.init(document.getElementById("PTH_PM_1"));
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: 'triangle',
            symbolSize: 20,
            lineStyle: {
                color: 'green',
                width: 4,
                type: 'dashed'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }]
    };
    myChart.setOption(option);

}