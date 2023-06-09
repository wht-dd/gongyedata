function PTH_PM_0(data) {
    var myChart = echarts.init(document.getElementById("PTH_PM_0"));
    option = {
        title: {
            text: '温度-pm1',
            textStyle: {
                    color: '#ffffff'
            }
        },
        legend: {
            data: ['pm10','pm2.5'],
            textStyle: {
                    color: '#ffffff',
                },
            left:'right',
        },
        tooltip: {
            trigger: 'axis',
            formatter: 'PM浓度:{c}μg/m³<br>温度:{b}°C'
        },

        yAxis: {
            name:'pm浓度',
            type: 'value',
            axisLabel: {
                formatter: '{value} μg/m³'
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
        xAxis: {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
                formatter: '{value}℃ '
            },
            boundaryGap: false,
            data: data.temperature,
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

    myChart.setOption(option);

window.addEventListener("resize",function(){
	myChart.resize();
});

}


function PTH_PM_2(data) {
    var myChart2 = echarts.init(document.getElementById("PTH_PM_2"));

option = {
    color:['#ff0002','#fdff05'],
    title: {
        text: '湿度与PM',
        subtext: ' ',
        textStyle: {
                color: '#ffffff'
        }
    },
    legend: {
        data: ['pm10','pm2.5'],
        textStyle: {
                color: '#ffffff',
            },
        left:'right',
    },
    tooltip: {
        trigger: 'axis',
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
        data: data.humidity,
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
            formatter: '{value} μg/m3'
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
//    visualMap: {
//        show: false,
//        dimension: 0,
//
//    },
    series: [
        {
            name: 'pm10',
            type: 'line',
            smooth: true,
            data: data.p1,
            lineStyle:{
                color:'#ff0002',
            }
        },
        {
            name: 'pm2.5',
            type: 'line',
            smooth: true,
            data: data.p2,
            lineStyle:{
                color:'#fdff05',

            }

        }
    ]
};
    myChart2.setOption(option);

window.addEventListener("resize",function(){
	myChart2.resize();
});
}



function PTH_PM_11(data) {
    var myChart11 = echarts.init(document.getElementById("PTH_PM_11"));
    option = {
        title: {
            text: '温度-pm11',
            textStyle: {
                    color: '#ffffff'
            }
        },
        legend: {
            data: ['pm10','pm2.5'],
            textStyle: {
                    color: '#ffffff',
                },
            left:'right',
        },
        tooltip: {
            trigger: 'axis',
            formatter: 'PM浓度:{c}μg/m³<br>温度:{b}°C'
        },

        yAxis: {
            name:'pm浓度',
            type: 'value',
            axisLabel: {
                formatter: '{value} μg/m³'
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
        xAxis: {
            type: 'category',
            axisLine: {onZero: false},
            axisLabel: {
                formatter: '{value}℃ '
            },
            boundaryGap: false,
            data: data.temperature,
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
    myChart11.setOption(option);

window.addEventListener("resize",function(){
	myChart11.resize();
});
}




