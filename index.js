/*
 * @Author: web_zhang 
 * @Date: 2019-01-16 18:47:26 
 * @Last Modified by: ZhangYanKun
 * @Last Modified time: 2019-01-17 17:58:55
 */


let now = new Date();
let datas = {
    upText: '水位图形',
    upUnit: '单位(m)',
    upName: '水位',
	upMark: 2.3,		// 分界值
    upData: ['1.139'],
    downText: '流量图形',
    downUnit: '单位(m)',
    downName: '水位',
	downMark: 3.5,
    downData: ['5.473'],
    date: [now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()]
};

// echarts 实例化
let myChart = echarts.init(document.getElementById('main'));

// 配置信息
let option = {

	title: [{
		left: 'center',
		text: datas.upText
	}, {
		top: '52%',				// 下面的折线图标题位置
		left: 'center',
		text: datas.downText
	}],
	toolbox: {
		// left: 'left',
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			restore: {},
			saveAsImage: {}
		}
	},
	dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            top: '45%',
            start: 12,
            end: 26
		},
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 12,
            end: 26
        },
		{
            type: 'slider',
            show: true,
            xAxisIndex: [1],
            start: 10,
            end: 35
		},
        {
            type: 'inside',
            xAxisIndex: [1],
            start: 10,
            end: 35
        }
		
    ],
	tooltip: {
		trigger: 'axis'			// 悬浮到折点时候的上线标记线
	},
	xAxis: [{
		boundaryGap: false,		// 默认为 true，此时刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
		data: datas.date
	}, {
		boundaryGap: false,
		data: datas.date,
		gridIndex: 1			// 下面的折线图索引, (上面的索引为0)
	}],
	yAxis: [{
		name: datas.upUnit,
		// boundaryGap: [0, '50%']
	}, {
		gridIndex: 1,
		name: datas.downUnit,
		// boundaryGap: [0, '50%']
	}],
	grid: [{
		bottom: '60%'
	}, {
		top: '60%'
	}],
	series: [{
		name: datas.upName,
		data:  datas.date,
		type: 'line',
		smooth: true,			// 是否为平滑曲线
		areaStyle: {			// 折现下是否填充
			normal: {}
        },  
		markLine: {				
			silent: true,		
			lineStyle: {
				width: 1,
				color: '#f00'
			},
			data: [{
				yAxis: datas.upMark
			}, {
				yAxis: 1
			}]
		}
	}, {
		name: datas.downName,
		data:  datas.date,
		type: 'line',
		smooth: true,
        itemStyle : {  
            normal : {  
                borderColor:'red'	// 折线折点颜色
            }  
        },
		markLine: {
			silent: true,
			lineStyle: {
				width: 1,
				color: '#f00'
			},
			data: [{
				yAxis: datas.downMark
			}]
		},
		xAxisIndex: 1,
		yAxisIndex: 1
	}],
	visualMap: [{				// 视觉映射组件
		seriesIndex: 0,
		top: 20,
		right: 10,
		pieces: [{
			gt: 1,				// 开始值
			lte: datas.upMark,	// 结束值
			color: '#0ff'
		}, {
			gt: 0,				
			lte: 1,	
			color: '#999'
		}],
		outOfRange: {			// 超出范围
			color: '#f00'
		},
	},{
		seriesIndex: 1,
		top: '50%',
		right: 10,
		pieces: [{
			gt: 0,
			lte: datas.downMark,
			color: 'orange'
		}],
		outOfRange: {
			color: '#f00'
		},
	}], 
};

// 设置数据给实例
myChart.setOption(option);

// 获取数据时间间隔
let INTERVAL_TIME = 3000;

// 模拟定时加载数据
setInterval(() => {
	// 最新时间
    let newDate = new Date();

	// 模拟获取数据
    datas.upData.push((Math.random() * 5).toFixed(3));
	datas.downData.push((Math.random() * 5).toFixed(3));
	// 按时间间隔设置时间
    datas.date.push(newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds())

	// 只取8个数据
    if (datas.upData.length >= 8) {
        datas.upData.shift();
        datas.downData.shift();
        datas.date.shift();
    }

	// 设置最新数据给折线图
    myChart.setOption({
        xAxis: [{
            data: datas.date
        },{
            data:datas.date,
            gridIndex: 1
        }],
        series: [{
            data: datas.upData
        },{
            data: datas.downData,
            xAxisIndex: 1,
            yAxisIndex: 1
        }]
    })

}, INTERVAL_TIME);
