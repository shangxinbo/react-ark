import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import common from '../../css/common.css'
import style from '../../css/crowd.css'
import axios from 'axios'
import API from '../../service/api'
import Page from '../common/pages'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        let _this = this
        axios.get(API.message_list)
            .then(function (response) {
                _this.setState({ list: response.data.detail.messages.data })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    render() {
        
        const list = this.state.list.map((item,index) =>
            <tr key={index}>
                <td styleName="tl">{item.content}</td>
                <td>{item.created_at}</td>
                <td>
                    <a href="javascript:void(0);">删除</a>
                </td>
            </tr>
        )

        const table = list.length ?
            <table styleName="com-table">
                <tbody>
                    <tr>
                        <th styleName="ti10 tl">消息内容</th>
                        <th styleName="w20p">时间</th>
                        <th styleName="w20p">操作</th>
                    </tr>
                    {list}
                </tbody>
            </table>
            :
            <div styleName="com-table-null">暂无数据</div>

        return (
            <div className={common.warp + ' ' + style.warp}>
                <div styleName="main">
                    <div styleName="nav-switch">
                        <h3>我的消息</h3>
                    </div>
                    <div id="com-table" styleName="news-table">
                        {table}
                        {Page}
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(List, style, { allowMultiple: true })
