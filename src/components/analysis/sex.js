import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import store from '../../redux/store'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'

class sexChart extends Component {
    constructor(props) {
        super(props)
        let key = ['男', '女']

        this.state = {
            option: {
                legend: {
                    orient: 'horizontal',
                    top: 5,
                    icon: 'rect',
                    data: key,
                    textStyle: {
                        color: "#FFF",
                        fontSize: '12'
                    },
                    selectedMode: false
                },
                series: [{
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            position: "inside",
                            formatter: function (data) {
                                return data.percent + '%'
                            }
                        }
                    },
                    data: []
                }]
            }
        }
    }
    componentWillReceiveProps(nextprops) {
        let data = nextprops.sex
        let key = ['男', '女']
        let value = [data['男'] ? data['男'] : 0, data['女'] ? data['女'] : 0]
        let option = this.state.option
        option.series.data = [{
            value: parseFloat(value[0]),
            name: key[0],
            itemStyle: {
                normal: {
                    color: "#E94D6A"
                }
            }
        }, {
            value: parseFloat(value[1]),
            name: key[1],
            itemStyle: {
                normal: {
                    color: "#09A88D"
                }
            }
        }]
        this.setState({ option: option })
    }
    render() {
        return (
            <div styleName="chart-warp">
                <h2>性别比例</h2>
                <ReactEcharts style={{ width: '100%', height: '100%' }} option={this.state.option}>&nbsp;</ReactEcharts>
            </div>
        )
    }
}

export default CSSModules(sexChart, style, { allowMultiple: true })