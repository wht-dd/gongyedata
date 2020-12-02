
function drawLayer02Label(canvasObj, text, textBeginX, lineEndX) {
    var colorValue = '#04918B';

    var ctx = canvasObj.getContext("2d");

    ctx.beginPath();
    ctx.arc(35, 55, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = colorValue;
    ctx.fill();

    ctx.moveTo(35, 55);
    ctx.lineTo(60, 80);
    ctx.lineTo(lineEndX, 80);
    ctx.lineWidth = 1;
    ctx.strokeStyle = colorValue;
    ctx.stroke();

    ctx.font = '12px Georgia';
    ctx.fillStyle = colorValue;
    ctx.fillText(text, textBeginX, 92);
}


function drawLayer03Right(canvasObj, colorValue, rate) {
    var ctx = canvasObj.getContext("2d");

    var circle = {
        x: 65, //圆心的x轴坐标值
        y: 80, //圆心的y轴坐标值
        r: 60 //圆的半径
    };


    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#052639';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorValue;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'white';
    ctx.font = '20px Calibri';
    ctx.fillText(rate * 100 + '%', circle.x - 15, circle.y + 10);

}

function left_up() {
    var myChart = echarts.init(document.getElementById("left_up"));
  option = {
       tooltip: {
          trigger: "item",
          formatter: '{d}%\n{b}',
        },
        //标题
       title: {
            text: 'DFS',
            textStyle: {
                    color: '#ffffff'
            }
        },
        //图例组件
        legend: {
            orient: 'vertical',
            x:'right',
            padding:[20,20,0,0],
            selectedMode: false,
            icon:"circle",
            align:'left',
            textStyle: {
                color: '#ffffff',
            },
        },
        //全局颜色样式
        color: ["#C6E2FF", "#76B5F5", "#409EFF", "#166AC1","#68A4E2","#68A4E2"],
        series: [
          {
            name: "地区交易金额",
            type: "pie",
            radius: ["40%", "52%"],//圆环大小
            center: ["44%", "50%"],//图表的位置
            avoidLabelOverlap: false,//是否启用防止标签重叠策略
            hoverAnimation:false,//动画效果
            label: {
              formatter: '{d}%',// 显示百分比，
            },
            // 指示折现
            labelLine: {
              normal: {
                show: true,
                legend: 8,//第一条折现
                legend2: 15,//第二条折现
                lineStyle: {
                  color: "#166AC1"//折现颜色
                },
              }
            },
            data: [
              { value: 105.20, name: "dfs剩余的容量" },
              { value: 5.07, name: "dfs已使用的容量" },

            ]
          }
        ]
      }
 

    myChart.setOption(option);
}

function left_down() {
    var myChart = echarts.init(document.getElementById("left_down"));
       option = {
       title: {
            text: '使用容量',
            textStyle: {
                    color: '#ffffff'
            }
        },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

    myChart.setOption(option);
}




function center() {
    var myChart = echarts.init(document.getElementById("center"));
        option = {
        title: {
            text: '使用容量',
            textStyle: {
                    color: '#ffffff'
            }
        },
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter: '{value}%'},
                    data: [{value: 5.07, name: '使用占比'}]
                }
            ]
        };
    myChart.setOption(option);
}



function right_up() {
    var myChart = echarts.init(document.getElementById("right_up"));
   option = {
   title: {
            text: '使用容量',
            textStyle: {
                    color: '#ffffff'
            }
        },

        title: {
            text: '块',
            textStyle: {
                    color: '#ffffff'
            }
        },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '块状况',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 304, name: '处于复制下的块 '},
                {value: 0, name: '故障副本的块'},
                {value: 0, name: '丢失的快'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
    myChart.setOption(option);
}



function right_down() {
   var myChart = echarts.init(document.getElementById("right_down"));
  option = {
  title: {
            text: '使用容量',
            textStyle: {
                    color: '#ffffff'
            }
        },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

    myChart.setOption(option);
}



