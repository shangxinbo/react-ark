import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import store from '../../redux/store'
import chart from 'echarts-for-react'
import _ from 'lodash'

class LineChart extends Component {
    constructor(props) {
        super(props)
        let lineStyle = {
            color: '#60597C'
        }
        this.state = {
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
    render() {
        return (
            <div styleName="line-chart">
                <chart styleName="chart-warp" option={this.state.option}></chart>
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
                        <li styleName="checked" data-id="0">
                            <i styleName="icon"></i>
                            <em></em>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CSSModules(LineChart, style, { allowMultiple: true })