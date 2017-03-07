import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import store from '../../redux/store'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'

class LineChart extends Component {
    constructor(props) {
        super(props)
        let lineStyle = {
            color: '#60597C'
        }
        this.state = {
            legend: [],
            option: {
                xAxis: {
                    name: "日期",
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    splitLine: {
                        show: true,
                        lineStyle: lineStyle
                    },
                    axisLine: {
                        lineStyle: lineStyle
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: [{
                    name: "人数",
                    nameTextStyle: {
                        color: '#8E87A5',
                        fontSize: '14'
                    },
                    type: 'value',
                    splitLine: {
                        lineStyle: lineStyle
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0)', '#3F3D66']
                        }
                    },
                    axisLine: {
                        lineStyle: lineStyle
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }],
                grid: {
                    left: '3%',
                    right: '5%',
                    containLabel: true
                },
                tooltip: {
                    show: true
                },
                series: []
            }
        }
    }
    componentWillReceiveProps(nextprops) {
        let data = nextprops.data.slice(0, 5)
        let lineColor = ['#E94D6A', '#09A88D', '#398AD6', '#B84BC8', '#CC855A']
        let lineSybol = ['ring-red.png', 'ring-green.png', 'ring-blue.png', 'ring-violet.png', 'ring-brown.png']
        let xArr = [], itemArr = [], legend = []
        let option = this.state.option

        for (let i = 0; i < data.length; i++) {
            let ob = {
                type: 'line',
                symbolSize: 9,
                symbol: '/static/img/' + lineSybol[i],
                smooth: true,
                lineStyle: {
                    normal: {
                        color: lineColor[i]
                    }
                },
                name: data[i]['label'],
                connectNulls: false,
                data: []
            }
            xArr = []
            for (let j = 0; j < data[i]['vals'].length; j++) {
                xArr.push(data[i]['vals'][j]['date'])
                ob.data.push(data[i]['vals'][j]['val'])
            }
            itemArr.push(ob)
            legend.push({
                id: i,
                color: lineColor[i],
                name: data[i]['label'].replace(/特别行政区|回族自治区|壮族自治区|自治区|省|市/, '')
            })
        }
        option.xAxis.data = xArr
        option.series = itemArr
        this.setState({ option: option })
        this.setState({ legend: legend })

    }
    render() {

        let legend = this.state.legend.map((value, index) => {
            return <li styleName="checked" data-id="0" key={index}>
                <i styleName="icon"></i>
                <em style={{ backgroundColor: value.color }}></em>
                <span>{value.name}</span>
            </li>
        })

        return (
            <div styleName="line-chart">
                <ReactEcharts styleName="chart-warp" option={this.state.option}></ReactEcharts>
                <div styleName="line-legend">
                    <div styleName="select-warp">
                        <p>客户量</p>
                        <ul>
                            <li data-group="default">客户量</li>
                            <li data-group="sex">性别比例</li>
                            <li data-group="age">年龄分布</li>
                            <li data-group="area">地域分布</li>
                            <li data-group="mobile">手机品牌</li>
                        </ul>
                    </div>
                    <ul styleName="line-legend-item">
                        {legend}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CSSModules(LineChart, style, { allowMultiple: true })