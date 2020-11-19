function PTH_PM_1(data) {
    var myChart1 = echarts.init(document.getElementById("PTH_PM_1"));
option = {
    legend: {
        data: ['pm10','pm2.5']
    },
    tooltip: {
        trigger: 'axis',
        formatter: 'PM浓度:{c}μg/m³<br>温度:{b}°C'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        name:'pm浓度',
        type: 'value',
        axisLabel: {
            formatter: '{value} μg/m³'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value}℃ '
        },
        boundaryGap: false,
        data: data.temperature
    },
    series: [
        {
            name: 'pm10',
            type: 'scatter',
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(255,255,255,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            data:data.p1
        },
        {
            name: 'pm2.5',
            type: 'scatter',
            smooth: true,
            lineStyle: {
                width: 3,
                shadowColor: 'rgba(255,255,255,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            },
            data:data.p2
        }
    ]
};

    myChart1.setOption(option);

}


function PTH_PM_2(data) {
    var myChart2 = echarts.init(document.getElementById("PTH_PM_2"));
option = {
    title: {
        text: '湿度与PM',
        subtext: ' '
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.humidity
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} μg/m3'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'red'
        }, {
            gt: 17,
            color: 'green'
        }]
    },
    series: [
        {
            name: 'pm10',
            type: 'line',
            smooth: true,
            data: data.p1,
            markArea: {
                data: [ [{
                    name: '峰值',
                    xAxis: '07:30'
                }, {
                    xAxis: '10:00'
                }], [{
                    name: '晚高峰',
                    xAxis: '17:30'
                }, {
                    xAxis: '21:15'
                }] ]
            }
        },
        {
            name: 'pm2.5',
            type: 'line',
            smooth: true,
            data: data.p2,
            markArea: {
                data: [ [{
                    name: '峰值',
                    xAxis: '10:00'
                }, {
                    xAxis: '12:30'
                }], [{
                    name: '峰值',
                    xAxis: '17:30'
                }, {
                    xAxis: '21:15'
                }] ]
            }
        }
    ]
};
    myChart2.setOption(option);

}

