/*
 * @Author: xiaofan 
 * @Date: 2019-01-08 20:54:54 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2019-01-11 15:48:22
 */


let myEcharts = echarts.init(document.getElementById('main'));


let dateList = [1, 2, 3, 4, 5, 6, 7];
let dateList1 = [11, 22, 33, 44, 55, 66, 77];

let valueList = [12, 23, 14, 25, 16, 7, 18];
let valueList1 = [32, 63, 24, 65, 16, 27, 48];

let option = {

	title: [{
		left: 'center',
		text: '水位图形'
	}, {
		top: '50%',
		left: 'center',
		text: '流量图形'
	}],
	tooltip: {
		trigger: 'axis'
	},
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: dateList
	}, {
		type: 'category',
		boundaryGap: false,
		data: dateList1,
		gridIndex: 1
	}],
	yAxis: [{
		name: '单位（m）',
		boundaryGap: [0, '50%']
	}, {
		gridIndex: 1,
		name: '流量（m³/s）',
		boundaryGap: [0, '50%']
	}],
	grid: [{
		bottom: '60%'
	}, {
		top: '60%'
	}],
	series: [{
		name: '水位',
		data: valueList,
		type: 'line',
		stack: 'a',
		smooth: true,
		areaStyle: {
			normal: {}
		},
		markLine: {
			silent: true,
			lineStyle: {
				width: 2,
				color: '#f00'
			},
			data: [{
				yAxis: 10
			}]
		}
	}, {
		name: '流量',
		data: valueList1,
		type: 'line',
		stack: 'a',
		smooth: true,
		areaStyle: {
			normal: {}
		},
		markLine: {
			silent: true,
			lineStyle: {
				width: 2,
				color: '#f00'
			},
			data: [{
				yAxis: 30
			}]
		},
		xAxisIndex: 1,
		yAxisIndex: 1
	}],
	visualMap: [{
		seriesIndex: 0,
		top: 20,
		right: 10,
		pieces: [{
			gt: 0,
			lte: 10,
			color: '#0ff'
		}],
		outOfRange: {
			color: '#f00'
		},
	},{
		seriesIndex: 1,
		top: '50%',
		right: 10,
		pieces: [{
			gt: 0,
			lte: 30,
			color: '#00f'
		}],
		outOfRange: {
			color: '#f00'
		},
	}], 
};


myEcharts.setOption(option);
