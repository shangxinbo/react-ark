import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import style from '../css/index.css'

class App extends Component {
    render() {
        return (
            <div styleName="warp">
                <div styleName="main">
                    <div styleName="index-button">
                        <a href="javascript:void(0);">新客获取向导</a>
                        <a href="javascript:void(0);">存量营销向导</a>
                    </div>
                    <ul styleName="index-content">
                        <li>
                            <a href="javascript:void(0);">
                                <i styleName="index-icon uc"></i>
                                <h2>上传人群</h2>
                                <h3>Upload Crowd</h3>
                                <p>上传您的客户数据，匹配我们的数据，
                                    <br />对您的客户群体进行深度分析和应用
                                </p>
                            </a>
                        </li>
                        <li data-key="tags">
                            <a href="/filter">
                                <i styleName="index-icon ts"></i>
                                <h2>标签筛选</h2>
                                <h3>Tags Screening</h3>
                                <p>通过我们的海量标签和特征属性库,
                            <br />筛选出您想要的目标客户群体</p>
                            </a>
                        </li>
                        <li>
                            <a href="/models">
                                <i styleName="index-icon ms"></i>
                                <h2>建模筛选</h2>
                                <h3>Modeling Screening</h3>
                                <p>使用我们成熟高效的建模模型,
                            <br />筛选出您想要的目标客户群体</p>
                            </a>
                        </li>
                        <li>
                            <a href="/report">
                                <i styleName="index-icon sa"></i>
                                <h2>统计分析</h2>
                                <h3>Statistical Analysis</h3>
                                <p>多维度分析统计客户群体特征,
                            <br />为您的决策和应用提供最直观有效的依据</p>
                            </a>
                        </li>
                        <li>
                            <a href="/project">
                                <i styleName="index-icon la"></i>
                                <h2>标签应用</h2>
                                <h3>Label Application</h3>
                                <p>
                                    营销应用筛选出来的目标客户群体,
                            <br />并对营销反馈阶段进行管理
                        </p>
                            </a>
                        </li>
                        <li>
                            <a href="/crowd/filter">
                                <i styleName="index-icon cm"></i>
                                <h2>人群管理</h2>
                                <h3>Crowd Management</h3>
                                <p>对本账号历史上传人群,
                            <br />和以往筛选记录的相关管理与应用</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CSSModules(App,style,{allowMultiple:true})
