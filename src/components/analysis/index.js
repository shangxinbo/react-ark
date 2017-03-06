import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/result.css'
import loadGif from '../../img/load.gif'
import Filter from './filter'

class Analysis extends Component {
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