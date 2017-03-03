import React, { Component } from 'react'
import Account from './account'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import actions from '../../redux/action'
import store from '../../redux/store'
import logo from '../../img/logo.png'
import CSSModules from 'react-css-modules'
import style from '../../css/header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    handleShow = (e) => {
        e.stopPropagation()
        store.dispatch(actions.toggleNav(true))
    }
    render() {
        return (
            <div styleName="header">
                <h1>
                    <Link to="/index" title="集奥方舟">
                        <img src={logo} width="148" height="43" alt="集奥方舟" title="集奥方舟" />
                    </Link>
                </h1>
                <ul styleName="header-content">
                    <li>
                        <Link styleName="icon news-icon" to="/message"></Link>
                    </li>
                    <Account />
                    <li styleName={this.props.navShow ? 'li-hover' : ''}>
                        <i styleName="icon nav-icon" onClick={this.handleShow}></i>
                        <div styleName="nav">
                            <a href="javascript:void(0)">
                                <i styleName="icon nav01"></i>
                                <span>人群上传</span>
                            </a>
                            <a href="/filter">
                                <i styleName="icon nav02"></i>
                                <span>标签筛选</span>
                            </a>
                            <a href="/models">
                                <i styleName="icon nav03"></i>
                                <span>建模筛选</span>
                            </a>
                            <a href="/report">
                                <i styleName="icon nav04"></i>
                                <span>统计分析</span>
                            </a>
                            <a data-href="datause" href="/project/list.html">
                                <i styleName="icon nav05"></i>
                                <span>标签应用</span>
                            </a>
                            <a href="/crowd/filter">
                                <i styleName="icon nav06"></i>
                                <span>人群管理</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        navShow: state.common.nav
    }
}

export default connect(mapStateToProps)(CSSModules(Header,style,{allowMultiple:true}))