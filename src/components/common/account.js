import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/action'
import store from '../../redux/store'
import logo from '../../img/logo.png'
import CSSModules from 'react-css-modules'
import style from '../../css/header.css'

class Account extends Component {
    handleClick = (e) => {
        e.stopPropagation()
        store.dispatch(actions.toggleAccount(true))
    }
    render() {
        return (
            <li styleName={this.props.show?'li-hover':''}>
                <i styleName="icon login-icon" onClick={this.handleClick}></i>
                <div id="quit" styleName="quit">
                    <p></p>
                    <a href="/users/index.html">
                        <i styleName="icon icon01"></i>
                        <span>账号管理</span>
                        <span>我的账号</span>
                    </a>
                    <a href="javascript:void(0)">
                        <i styleName="icon icon02"></i>
                        <span>退 出</span>
                    </a>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        show: state.common.account
    }
}

export default connect(mapStateToProps)(CSSModules(Account,style,{allowMultiple:true}))