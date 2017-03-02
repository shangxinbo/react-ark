import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/action'
import store from '../redux/store'
import logo from '../img/logo.png'

class Account extends Component {
    handleClick = (e) => {
        e.stopPropagation()
        store.dispatch(actions.toggleAccount(true))
    }
    render() {
        return (
            <li className={this.props.show?'li-hover':''}>
                <i className="icon login-icon" onClick={this.handleClick}></i>
                <div id="quit" className="quit">
                    <p></p>
                    <a href="/users/index.html">
                        <i className="icon icon01"></i>
                        <span>账号管理</span>
                        <span>我的账号</span>
                    </a>
                    <a href="javascript:void(0)">
                        <i className="icon icon02"></i>
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

export default connect(mapStateToProps)(Account)