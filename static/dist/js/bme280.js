function chartBME280_1(data) {
    var myChart = echarts.init(document.getElementById("chart_BME280_1"));
    function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}

// var data = [];
// var now = +new Date(1997, 9, 3);
// var oneDay = 24 * 3600 * 1000;
// var value = Math.random() * 1000;
// for (var i = 0; i < 1000; i++) {
//     data.push(randomData());
// }

option = {
    title: {
        text: '时间-相对湿度',
        left: 'center',
        textStyle: {

            color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            console.log(params);
            return date.getFullYear()  + '-' + (date.getMonth() + 1) + '-'+ date.getDate() + " "+ params.value.toFixed(2);
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.timestamp,
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
        data: data.humidity
    }]
};

// setInterval(function () {
//
//     for (var i = 0; i < 5; i++) {
//         data.shift();
//         data.push(randomData());
//     }
//
//     myChart.setOption({
//         series: [{
//             data: data
//         }]
//     });
// }, 1000);

    myChart.setOption(option);

}

function chartBME280_2(data){
    var myChart = echarts.init(document.getElementById("chart_BME280_2"));
option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '温度/时间',
        textStyle: {
                color: '#ffffff'
        },
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.timestamp,
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
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: '温度',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data.temperature
        }
    ]
};
    myChart.setOption(option);
}

function chartBME280_3() {
    var myChart = echarts.init(document.getElementById("chart_BME280_3"));

option = {
    title: {
        text: '折线图堆叠',
        textStyle: {
                color: '#ffffff'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['PM2.5', 'PM10']
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    grid: { // 控制图的大小，调整下面这些值就可以，
        x: 100,
        x2: 40,
        y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
    dataZoom: [{
        bottom: 10,
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',  // 拖动按钮大小，默认80%
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: 'PM2.5',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            lineStyle:{
                color:'#ff0002',

            }
        },
        {
            name: 'PM10',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            lineStyle:{
                color:'yellow',
            }
        }
    ]
};

    myChart.setOption(option);

}