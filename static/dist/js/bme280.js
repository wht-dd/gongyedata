//2018年上半年压力随时间的变化
function showHalfYearP1(data) {
    var myChart = echarts.init(document.getElementById("HalfYearP1"));   //HalfYearP1是2018年上半年的压力随时间所在的div的id名
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
                    color:'#ff0002',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
        },
            yAxis: {
                type: 'value',
                scale:true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    },
                    formatter: function(value,index){
                        var value;
                        if (value >=1000) {
                            value = value/1000+'k';
                        }else if(value <1000){
                            value = value;
                        }
                        return value
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',

                    }
                },
                axisPointer: {
                    label: {
                        color:'#ff0002',
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

//2019年上半年压力随时间的变化
function showHalfYearP2(data) {
    var myChart = echarts.init(document.getElementById("HalfYearP2"));   //HalfYearP2是2019年上半年的压力随时间所在的div的id名
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
                    color:'#ff0002',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
        },
            yAxis: {
                type: 'value',
                scale:true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    },
                    formatter: function(value,index){
                        var value;
                        if (value >=1000) {
                            value = value/1000+'k';
                        }else if(value <1000){
                            value = value;
                        }
                        return value
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',

                    }
                },
                axisPointer: {
                    label: {
                        color:'#ff0002',
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

//2018年上半年温度随时间的变化
function showHalfYearT1(data) {
    var myChart = echarts.init(document.getElementById("HalfYearT1"));   //HalfYearT1是2018年上半年的压力随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//2019年上半年温度随时间的变化
function showHalfYearT2(data) {
    var myChart = echarts.init(document.getElementById("HalfYearT2"));   //HalfYearT2是2019年上半年的压力随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//2018年上半年湿度随时间的变化
function showHalfYearH1(data) {
    var myChart = echarts.init(document.getElementById("HalfYearH1"));   //HalfYearH1是2018年上半年的湿度随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//2019年上半年湿度随时间的变化
function showHalfYearH2(data) {
    var myChart = echarts.init(document.getElementById("HalfYearH2"));   //HalfYearH2是2019年上半年的湿度随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//2018年上半年PM10随时间的变化
function showHalfYearPM1(data) {
    var myChart = echarts.init(document.getElementById("HalfYearPM1"));   //HalfYearPM1是2018年上半年的PM10随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//2019年上半年PM10随时间的变化
function showHalfYearPM2(data) {
    var myChart = echarts.init(document.getElementById("HalfYearPM2"));   //HalfYearPM1是2019年上半年的PM10随时间所在的div的id名
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//右边小图，默认为2018年上半年的压力随时间变化
function chartBME280_0(data) {
    var myChart = echarts.init(document.getElementById("chart_BME280_0"));   //chart_BME280_0是2018年上半年的压力随时间所在的div的id名
    option = {
        title: {
            text: '时间-压力(单位:pa)',
            textStyle: {
                    color: '#ffffff'
            }
        },
        grid:{
            x:40,
            y:30,
            x2:35,
            y2:30,
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
                    color:'#ff0002',
                    formatter: function (params) {
                        return '时间：  ' + params.value;
                    }
                },
            },
        },
            yAxis: {
                type: 'value',
                scale:true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff'
                    },
                    formatter: function(value,index){
                        var value;
                        if (value >=1000) {
                            value = value/1000+'k';
                        }else if(value <1000){
                            value = value;
                        }
                        return value
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff',

                    }
                },
                axisPointer: {
                    label: {
                        color:'#ff0002',
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

//右边小图，默认为2018年上半年的温度随时间变化
function chartBME280_1(data) {
    var myChart = echarts.init(document.getElementById("chart_BME280_1"));   //chart_BME280_1是2018年上半年的温度随时间所在的div的id名
    option = {
        title: {
            text: '时间-温度',
            textStyle: {
                    color: '#ffffff'
            }
        },
        grid:{
            x:35,
            y:30,
            x2:35,
            y2:30,
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//右边小图，默认为2018年上半年的湿度随时间变化
function chartBME280_2(data) {
    var myChart = echarts.init(document.getElementById("chart_BME280_2"));   //chart_BME280_2是2018年上半年的湿度随时间所在的div的id名
    option = {
        title: {
            text: '时间-湿度',
            textStyle: {
                    color: '#ffffff'
            }
        },
        grid:{
            x:35,
            y:30,
            x2:35,
            y2:30,
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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

//右边小图，默认为2018年上半年的PM10随时间变化
function chartBME280_3(data) {
    var myChart = echarts.init(document.getElementById("chart_BME280_3"));   //chart_BME280_0是2018年上半年的PM10随时间所在的div的id名
    option = {
        title: {
            text: '时间-PM10',
            textStyle: {
                    color: '#ffffff'
            }
        },
        grid:{
            x:35,
            y:30,
            x2:35,
            y2:30,
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
                    color:'#ff0002',
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
                        color:'#ff0002',
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
//
//
//
// function chartBME280_1(data) {
//     var myChart = echarts.init(document.getElementById("chart_BME280_1"));
//     function randomData() {
//     now = new Date(+now + oneDay);
//     value = value + Math.random() * 21 - 10;
//     return {
//         name: now.toString(),
//         value: [
//             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
//             Math.round(value)
//         ]
//     };
// }
//
// // var data = [];
// // var now = +new Date(1997, 9, 3);
// // var oneDay = 24 * 3600 * 1000;
// // var value = Math.random() * 1000;
// // for (var i = 0; i < 1000; i++) {
// //     data.push(randomData());
// // }
//
// option = {
//     title: {
//         text: '时间-相对湿度',
//         left: 'center',
//         textStyle: {
//             color: '#ffffff'
//         }
//     },
//     tooltip: {
//         trigger: 'axis',
//         formatter: function (params) {
//             params = params[0];
//             var date = new Date(params.name);
//             console.log(params);
//             return date.getFullYear()  + '-' + (date.getMonth() + 1) + '-'+ date.getDate() + " "+ params.value.toFixed(2);
//         },
//         axisPointer: {
//             animation: false
//         }
//     },
//      dataZoom: [{
//         type: 'inside',
//         start: 0,
//         end: 10
//     }, {
//         start: 0,
//         end: 10,
//         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//         handleSize: '80%',
//         handleStyle: {
//             color: '#fff',
//             shadowBlur: 3,
//             shadowColor: 'rgba(0, 0, 0, 0.6)',
//             shadowOffsetX: 2,
//             shadowOffsetY: 2
//         }
//     }],
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: data.timestamp,
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//     yAxis: {
//         type: 'value',
//         boundaryGap: [0, '100%'],
//         splitLine: {
//             show: false
//         },
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//     series: [{
//         name: '温度',
//         type: 'line',
//         showSymbol: false,
//         hoverAnimation: false,
//         data: data.humidity
//     }]
// };
//
// // setInterval(function () {
// //
// //     for (var i = 0; i < 5; i++) {
// //         data.shift();
// //         data.push(randomData());
// //     }
// //
// //     myChart.setOption({
// //         series: [{
// //             data: data
// //         }]
// //     });
// // }, 1000);
//
//     myChart.setOption(option);
//
// }
//
// function chartBME280_2(data){
//     var myChart = echarts.init(document.getElementById("chart_BME280_2"));
// option = {
//     tooltip: {
//         trigger: 'axis',
//         position: function (pt) {
//             return [pt[0], '10%'];
//         }
//     },
//     title: {
//         left: 'center',
//         text: '温度/时间',
//         textStyle: {
//                 color: '#ffffff'
//         },
//     },
//     toolbox: {
//         feature: {
//             dataZoom: {
//                 yAxisIndex: 'none'
//             },
//             restore: {},
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: data.timestamp,
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//     yAxis: {
//         type: 'value',
//         boundaryGap: [0, '100%'],
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//     dataZoom: [{
//         type: 'inside',
//         start: 0,
//         end: 10
//     }, {
//         start: 0,
//         end: 10,
//         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//         handleSize: '80%',
//         handleStyle: {
//             color: '#fff',
//             shadowBlur: 3,
//             shadowColor: 'rgba(0, 0, 0, 0.6)',
//             shadowOffsetX: 2,
//             shadowOffsetY: 2
//         }
//     }],
//     series: [
//         {
//             name: '温度',
//             type: 'line',
//             smooth: true,
//             symbol: 'none',
//             sampling: 'average',
//             itemStyle: {
//                 color: 'rgb(255, 70, 131)'
//             },
//             areaStyle: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgb(255, 158, 68)'
//                 }, {
//                     offset: 1,
//                     color: 'rgb(255, 70, 131)'
//                 }])
//             },
//             data: data.temperature
//         }
//     ]
// };
//     myChart.setOption(option);
// }
//
// function chartBME280_3(data) {
//     var myChart = echarts.init(document.getElementById("chart_BME280_3"));
//
// option = {
//
//     title: {
//         text: '折线图堆叠',
//         textStyle: {
//                 color: '#ffffff'
//         }
//     },
//     tooltip: {
//         trigger: 'axis'
//     },
//     color:['#ff0002','yellow'],
//     legend: {
//         data: ['PM2.5', 'PM10'],
//         textStyle: {
//                 color: '#ffffff',
//             },
//         left:'center',
//     },
//     // grid: {
//     //     left: '3%',
//     //     right: '4%',
//     //     bottom: '3%',
//     //     containLabel: true
//     // },
//     grid: { // 控制图的大小，调整下面这些值就可以，
//         x: 100,
//         x2: 40,
//         y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
//         containLabel: true
//     },
//     toolbox: {
//         feature: {
//             saveAsImage: {}
//         }
//     },
//     xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: data.timestamp,
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//
//     yAxis: {
//         type: 'value',
//         axisLabel: {
//             show: true,
//             textStyle: {
//                 color: '#ffffff'
//             }
//         },
//         axisLine:{
//             lineStyle:{
//                 color:'#ffffff',
//
//             }
//         }
//     },
//     dataZoom: [{
//         bottom: 10,
//         type: 'inside',
//         start: 0,
//         end: 50
//     }, {
//         start: 0,
//         end: 10,
//         handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
//         handleSize: '80%',  // 拖动按钮大小，默认80%
//         handleStyle: {
//             color: '#fff',
//             shadowBlur: 3,
//             shadowColor: 'rgba(0, 0, 0, 0.6)',
//             shadowOffsetX: 2,
//             shadowOffsetY: 2
//         }
//     }],
//     series: [
//         {
//             name: 'PM2.5',
//             type: 'line',
//             stack: '总量',
//             data: data.p1,
//             lineStyle:{
//                 color:'#ff0002',
//
//             }
//         },
//         {
//             name: 'PM10',
//             type: 'line',
//             stack: '总量',
//             data: data.p2,
//             lineStyle:{
//                 color:'yellow',
//             }
//         }
//     ]
// };
//
//     myChart.setOption(option);
//
// }