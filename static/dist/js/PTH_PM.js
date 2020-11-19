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
            data:data.p2
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
            data:data.p1
        }
    ]
};

    myChart1.setOption(option);

}


function PTH_PM_2() {
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
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
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
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
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
            data: [250, 253, 145, 254, 125, 146, 123,231,225,283,123,123,182,222,253,253,378,223,231,78],
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

