// 传感器比例饼图
function proportion(datax, datay) {

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
                data: datay,
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
function realTemAndHum_data(data) {
    // data = JSON.parse(data);
    console.log("这里是控制台，测试是否能够拿到数据")
    console.log(data);
    var myChart = echarts.init(document.getElementById("realTemAndHum_1"));
    // var data_temp = data.temp;
    // var data_hum = data.hum;
    // var data_time = data.create_time;
    // var data_temp = [];
    // var data_hum = [];
    // var data_time = [];

    // console.log("温度数据：")
    // console.log(data_temp);
    //
    // console.log("湿度数据")
    // console.log(data_hum);
    //
    // console.log("时间数据")
    // console.log(data_time);
    // var now = +new Date(2014, 11, 29);
    // var oneDay = 24 * 3600 * 1000;
    // var value = Math.random() * 1000;

    // function randomData() {
    //     now = new Date(+now + oneDay);
    //     value = value + Math.random() * 21 - 10;
    //     return {
    //         name: now.toString(),
    //         value: [
    //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
    //             Math.round(value)
    //         ]
    //     }
    // }


    // function randomData2() {
    //     now = new Date(+now + oneDay);
    //     value = value + Math.random() * 21 - 10;
    //     return {
    //         name: now.toString(),
    //         value: [
    //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
    //             Math.round(value + 100)
    //         ]
    //     }
    // }

// real_data = JSON.parse()

    // for (var i = 0; i < 1000; i++) {
    //     // console.log(data.temp[i])
    //     data_temp.push(data['temp'][i]);
    //     data_hum.push(data['hum'][i]);
    //     data_time.push(data['create_time'][i]);
    // }
    console.log("温度数据：")
    console.log(data.temp);

    console.log("湿度数据")
    console.log(data.hum);

    console.log("时间数据")
    console.log(data.create_time);

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
            formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
            },
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data: ['温度', '湿度'],
            textStyle: {
                color: '#ffffff',
            },
            left: 'center',
        },


        xAxis: {
            type: 'category',
            data: data.data_time,
            splitLine: {
                show: false
            },
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
            axisLine: {
                lineStyle: {
                    color: '#ffffff',
                }
            }
        },

        series: [{
            name: '温度',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.data_temp
        }, {
            name: '湿度',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data.data_hum
        }]
    };

    setInterval(function () {

        // for (var i = 0; i < 5; i++) {
        //     data.shift();
        //     data_temp.push(randomData());
        //     data_hum.push(randomData2());
        //     data_time.push(randomData2());
        //     data_temp.push(45);
        //     data_hum.push(30);
        //     data_time.push("2020-11-19 16:04:04");
        // }

        myChart.setOption({
            series: [{
                data: data.data_temp
            }, {
                data: data.data_hum
            }]
        });
    }, 1000);

    myChart.setOption(option);

}


function map() {

    $.get("/static/dist/json/洛龙区.json", function (map) {
        var data = [
            {name: '洛阳理工学院', value: 1}
        ];
        var geoCoordMap = {

            '洛阳理工学院': [112.427988, 34.618912],
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

        echarts.registerMap("luoyang", map);
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
                roam: true,//鼠标滚轮缩放
                aspectScale: 1,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#ffffff',//区域边框色
                        areaColor: 'rgba(128, 128, 128, 0.1)',//区域背景色:透明


                    },

                },
            },

            series: [
                {
                    name: '传感器',
                    type: 'scatter',
                    coordinateSystem: 'geo', // series坐标系类型
                    data: convertData(data),

                },

            ]

        }


        myChart.setOption(option);

    })
}