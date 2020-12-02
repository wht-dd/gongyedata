//2018年春季压力随时间的变化
function showQuarter1T(data) {
    var myChart = echarts.init(document.getElementById("C_0"));   //c-0是春季的温度所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis: {
            type: 'category',
            data: data.time,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff',

                }
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
        },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',

                    }
                },
                axisPointer: {
                    label: {
                        color:'red',
                        formatter: function (params) {
                            return '温度：  ' + params.value;
                        }
                    },
                },
            },
                series: [
                    {
                        name: '',
                        type: 'line',
                        data: data.column,
                    },
                ]

        };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});

}
//2018年春季湿度随时间的变化
function showQuarter1H(data) {
    var myChart = echarts.init(document.getElementById("C_1"));   //c-1是春季的湿度所在的div的id名

    option = {
        title: {
            text: '时间-湿度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '湿度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年春季压力随时间的变化
function showQuarter1P(data) {
    var myChart = echarts.init(document.getElementById("C_2"));   //c-2是春季的压力所在的div的id名

    option = {
        title: {
            text: '时间-压力',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '压力：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年春季PM10随时间的变化
function showQuarter1PM(data) {
    var myChart = echarts.init(document.getElementById("C_3"));   //c-3是春季的PM所在的div的id名

    option = {
        title: {
            text: '时间-PM10',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return 'PM10：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年夏季温度随时间的变化
function showQuarter2T(data) {
    var myChart = echarts.init(document.getElementById("X_0"));   //x-0是夏季的温度所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '温度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年夏季湿度随时间的变化
function showQuarter2H(data) {
    var myChart = echarts.init(document.getElementById("X_1"));   //x-1是春季的湿度所在的div的id名

    option = {
        title: {
            text: '时间-湿度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '湿度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年夏季压力随时间的变化
function showQuarter2P(data) {
    var myChart = echarts.init(document.getElementById("X_2"));   //x-2是春季的压力所在的div的id名

    option = {
        title: {
            text: '时间-压力',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '压力：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年夏季PM10随时间的变化
function showQuarter2PM(data) {
    var myChart = echarts.init(document.getElementById("X_3"));   //x-3是夏季的PM所在的div的id名

    option = {
        title: {
            text: '时间-PM10',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return 'PM10：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年秋季温度随时间的变化
function showQuarter3T(data) {
    var myChart = echarts.init(document.getElementById("Q_0"));   //q-0是秋季的温度所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '温度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年秋季湿度随时间的变化
function showQuarter3H(data) {
    var myChart = echarts.init(document.getElementById("Q_1"));   //q-1是春季的湿度所在的div的id名

    option = {
        title: {
            text: '时间-湿度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '湿度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年秋季压力随时间的变化
function showQuarter3P(data) {
    var myChart = echarts.init(document.getElementById("Q_2"));   //q-2是秋季的压力所在的div的id名

    option = {
        title: {
            text: '时间-压力',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '压力：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年秋季PM10随时间的变化
function showQuarter3PM(data) {
    var myChart = echarts.init(document.getElementById("Q_3"));   //q-3是秋季的PM所在的div的id名

    option = {
        title: {
            text: '时间-PM10',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return 'PM10：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年冬季温度随时间的变化
function showQuarter4T(data) {
    var myChart = echarts.init(document.getElementById("D_0"));   //x-0是冬季的温度所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '温度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年冬季湿度随时间的变化
function showQuarter4H(data) {
    var myChart = echarts.init(document.getElementById("D_1"));   //x-1是冬季的湿度所在的div的id名

    option = {
        title: {
            text: '时间-湿度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
               axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '湿度：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//2018年冬季压力随时间的变化
function showQuarter4P(data) {
    var myChart = echarts.init(document.getElementById("D_2"));   //x-2是冬季的压力所在的div的id名

    option = {
        title: {
            text: '时间-压力',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
                },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '压力：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
//2018年冬季PM10随时间的变化
function showQuarter4PM(data) {
    var myChart = echarts.init(document.getElementById("D_3"));   //d-3是冬季的PM所在的div的id名

    option = {
        title: {
            text: '时间-PM10',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
            },
                axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
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
            },
            axisPointer: {
                label: {
                    color:'red',
                    formatter: function (params) {
                        return 'PM10：  ' + params.value;
                    }
                },
            },
            },
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}


function P_TH_0(data) {
    var myChart11 = echarts.init(document.getElementById("P_TH_0"));
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

    myChart11.setOption(option);

window.addEventListener("resize",function(){
	myChart11.resize();
});
}


function P_TH_11(data) {
    var myChart11 = echarts.init(document.getElementById("P_TH_11"));
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

    myChart11.setOption(option);

}
//下面小图中的夏季，默认显示2018年第二季度的温度随时间的变化小
function showQuarter2(data) {
    var myChart = echarts.init(document.getElementById("X"));   //X是夏季的小图所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//下面小图中的夏季，默认显示2018年第二季度的压力随时间的变化小
function showQuarter3(data) {
    var myChart = echarts.init(document.getElementById("Q"));   //Q是秋季的小图所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}

//下面小图中的冬季，默认显示2018年第四季度的压力随时间的变化小
function showQuarter4(data) {
    var myChart = echarts.init(document.getElementById("D"));   //D是秋季的小图所在的div的id名

    option = {
        title: {
            text: '时间-温度',
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
        xAxis:
            {
                type: 'category',
                data: data.time,
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
        series: [
            {
                name: '',
                type: 'line',
                data: data.column,
            },
        ]
    };
    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});
}
