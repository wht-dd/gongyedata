function P_TH_1(data) {
    var myChart1 = echarts.init(document.getElementById("P_TH_1"));
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

    myChart1.setOption(option);

}

