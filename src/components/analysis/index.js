import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import loadGif from '../../img/load.gif'
import Filter from './filter'
import axios from 'axios'
import API from '../../service/api'
import LineChart from './line'

class Analysis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: '',
            chart:[]
        }
    }
    componentWillMount(){
        axios.get(API.filter_searchline,{
            params:{
                crowd:123,
                filter:'',
                model:123
            }
        }).then(res =>{
            this.setState({ 
                count: res.data.detail.cus_total,
                chart: res.data.detail.group_res
            })
        })
    }
    render() {
        return (
            <div className={common.warp}>
                <div styleName="main">
                    <Filter></Filter>
                    <div styleName="center-button">
                        <p styleName="number">
                            <span>已选客户</span>
                            <em></em>
                        </p>
                        <a>
                            <i styleName="add"></i>
                            <span>筛选人群</span>
                        </a>
                    </div>
                    <LineChart></LineChart>
                    <div id="loading">
                        <img style={{display: 'block','margin': '60px auto'}} src={loadGif} />
                    </div>
                    <div styleName="two-charts">
                    </div>
                    <div styleName="two-charts" >
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Analysis, style, { allowMultiple: true })