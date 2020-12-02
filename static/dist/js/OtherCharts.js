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
function realTemAndHum_data(data) {
    var myChart = echarts.init(document.getElementById("realTemAndHum_1"));
    // var data = [];
    // var data2 = [];
    // var now = +new Date(2014, 11, 29);
    // var oneDay = 24 * 3600 * 1000;
    // var value = Math.random() * 1000;
    //
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
    //
    //
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



    // for (var i = 0; i < 1000; i++) {
    //     data.push(randomData());
    //     data2.push(randomData2());
    // }

    //指定图表的配置项和数据
            option = {
                title: {
                    text: '设备实时温度',
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    // formatter: "{a},{b},{c},{d},{e}",
                    // axisPointer: {
                    //     animation: false
                    // }
                },
                 legend: {
                    data: ['温度','湿度'],
                    textStyle: {
                            color: '#ffffff',
                        },
                    left:'center',
                },


                xAxis: {
                    type: 'category',
                    data:data.create_time,
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
                    data: data.temp,

                    markPoint:{
                        symbol:'circle',
						symbolSize: 10,
						large: false,
                        effect: { show: false },
                        itemStyle:{
                                        color:'red'
                                        },
						data :
						(function(){
                            var data1 = [];
                            var len = 300;
                            console.log(len);
                            for(var i=0;i<len;i++) {
                             console.log(i);
                                if(data["nt"][i]!=0){
                                    data1.push({
                                        name : i,
//                                        value : data["nt"][i],
                                        xAxis: data["create_time"][i],
                                        yAxis: data["temp"][i]

                                    });
                                    }
                            }
                            console.log(data1);
                            return data1;
                        })()
					}



                }, {
                    name: '湿度',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data.hum,
                    markPoint:{
                        symbol:'circle',
						symbolSize: 10,
						large: true,
                        effect: { show: true },
                        itemStyle:{
                                        color:'#253A5D'
                                        },
						data :
                          (function(){
                            var data1 = [];
                            var len = 300;
                            console.log(len);
                            for(var i=0;i<len;i++) {
                             console.log(i);
                                if(data["nh"][i]!=0){
                                    data1.push({
                                        name : i,

                                        xAxis: data["create_time"][i],
                                        yAxis: data["hum"][i]

                                    });
                                    }
                            }
                            console.log(data1);
                            return data1;
                        })()
					}
                },



                ]
            };

            setInterval(function() {

                $.ajax({
            url: "/getRealData",
            type: "GET",
            async: true,
            cache: false,
            dataType: "json", //返回数据格式为json
            success: function (Ldata) {//请求成功完成后要执行的方法

                console.log(Ldata);
                if(Ldata["nt"]!=0){

                    var src = "http://data.huiyi8.com/2017/gha/03/17/1702.mp3";
			        new Audio(src).play();
			        alert("警告，温度超出阈值！\n"+"在"+Ldata["create_time"]+"温度为"+Ldata["temp"]);




                };
                data["create_time"].shift();
                data["hum"].shift();
                data["temp"].shift();
                data["nt"].shift();
                data['nh'].shift();
                data["create_time"].push(Ldata["create_time"]);
                data["hum"].push(Ldata["hum"]);
                data["temp"].push(Ldata["temp"]);
                data["nt"].push(Ldata["nt"]);
                data['nh'].push(Ldata['nh']);

            }
        });




            myChart.setOption(
{
                    xAxis:{
                        data:data["create_time"]
                    },


                    series: [{
                        data: data["temp"],

                    },
                    {
                        data: data["hum"]
                    }]


                }
);
            }, 10000);

    myChart.setOption(option);
    
}


