import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import store from '../../redux/store'
import ReactEcharts from 'echarts-for-react'
import { mAjax, accAdd, accSub, accMul, accDiv } from '../../service/functions'
import ECharts from 'echarts'
import chinaMap from './china.json'
import _ from 'lodash'

ECharts.registerMap('china', chinaMap)

class areaChart extends Component {
    constructor(props) {
        super(props)
        
        function arrMerge(arr1, arr2) {
            for (var i = 0; i < arr1.length; i++) {
                var item = arr1[i]
                for (var j = 0; j < arr2.length; j++) {
                    if (arr2[j].name == item.name) {
                        item.value = arr2[j].value
                    }
                }
            }
            return arr1
        }

        this.state = {
            option: {
                visualMap: {
                    type: 'piecewise',
                    top: 'top',
                    left: 'center',
                    itemGap: 1,
                    itemHeight: 10,
                    hoverLink: false,
                    textStyle: {
                        color: '#FFF'
                    },
                    orient: 'horizontal',
                    text: ['高', '低'],
                    inRange: {
                        color: ['#313161', '#3E2649', '#5E2F53', '#8A365A', '#E94D6A'],
                        symbol: 'rect'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    fontFamily: 'Microsoft Yahei',
                    fontSize: '12',
                    formatter: function (param) {
                        if (param.value > 0) {
                            return param.name + '：' + accMul(param.value, 10)
                        } else {
                            return param.name
                        }
                    }
                },
                series: [{
                    type: 'map',
                    map: 'china',
                    data: [],
                    silent: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#292952'
                        },
                        emphasis: {
                            areaColor: false,
                            borderColor: '#595990',
                            borderWidth: 1
                        }
                    }
                }]
            }
        }
    }
    componentWillReceiveProps(nextprops) {
        
    }
    render() {
        return (
            <div styleName="chart-warp">
                <h2>地域分布：</h2>
                <ReactEcharts style={{ width: '100%', height: '100%' }} option={this.state.option}>&nbsp;</ReactEcharts>
            </div>
        )
    }
}

export default CSSModules(areaChart, style, { allowMultiple: true })