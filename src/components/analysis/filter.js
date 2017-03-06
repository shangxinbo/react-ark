import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import store from '../../redux/store'
import _ from 'lodash'

class Filter extends Component {
    render() {
        let report = store.getState().report

        let crowd = report.crowd ? <div styleName="filters-item first">
            <h3>上传人群：</h3>
            <span>{report.crowd.name}
                <i styleName="delete"></i>
            </span>
            <i styleName="modify"></i>
        </div>
            : <div styleName="filters-item first">
                <h3>上传人群：</h3>
                <a href="javascript:void(0);" data-dialog="upLoadCrowd">点击筛选</a>
            </div>

        let filter
        if (report.filter.tagcode.length > 0 && !_.isEmpty(report.filter.fixedpros)) {

            let tags = report.filter.tagcode.map(item => {
                return item.map(value => {
                    return <span> {value.text}
                        <i styleName="delete"></i>
                    </span>
                })
            })
            _.forIn(report.filter.fixedpros, (value, key) => {
                _.forIn(value, (item, index) => {
                    tags.push(<span>{item.text}
                        <i styleName="delete"></i>
                    </span>)
                })
            })
            filter = <div styleName="filters-item second">
                <h3>标签筛选：</h3>
                {tags}
                <i styleName="modify"></i>
            </div>
        } else {
            filter = <div styleName="filters-item second">
                <h3>标签筛选：</h3>
                <a href="javascript:void(0)">点击筛选</a>
            </div>
        }


        let model = report.model ? <div styleName="filters-item">
            <h3>建模筛选：</h3>
            <span>{report.model.name}
                <i styleName="delete"></i>
            </span>
            <i styleName="modify"></i>
        </div>
            : <div styleName="filters-item">
                <h3>建模筛选：</h3>
                <a href="javascript:void(0);">点击筛选</a>
            </div>



        return (
            <div styleName="filters">
                <div styleName="filters-content">
                    {crowd}
                    <div styleName="last-two">
                        {filter}
                        {model}
                    </div>
                </div>
                <div styleName="filters-history">
                    <a href="javascript:void(0);" data-dialog="filterHistory">
                        <i></i>
                        <span>使用历史筛选</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default CSSModules(Filter, style, { allowMultiple: true })