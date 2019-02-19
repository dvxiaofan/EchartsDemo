/*
 * @Author: web_zhang 
 * @Date: 2019-01-16 18:47:26 
 * @Last Modified by: ZhangYanKun
 * @Last Modified time: 2019-02-19 17:42:16
 */


// echarts 实例化
let myChart = echarts.init(document.getElementById('main'));

// 配置信息
let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 32, 91, 934, 1290, 130, 1320],
        type: 'line',
        markLine: {
            itemStyle: {
                normal: { 
                    lineStyle: {
                        type: 'solid',
                        // 这儿设置的颜色是公共配置，如需单独配置，请在data里配置
                        // color: '#000',
                    }, 
                    label: { 
                        show: true,
                        position: 'end'
                    }
                },
            },
            data: [
                {
                    yAxis: 500,
                    lineStyle: {
						color: 'green',
                    }
                },
                {
                    yAxis: 200,
                    lineStyle: {
                        color: 'red'
                    }
                }
            ]
        },
    }]
};

// 设置数据给实例
myChart.setOption(option);

