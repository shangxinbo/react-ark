import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import '../../css/common.css'
import style from '../../css/login.css'
import logo from '../../img/logo-login.png'

class Login extends Component {
    render() {
        return (
            <div styleName="main">
                <h2><img src={logo} width="189" height="58" /></h2>
                <ul>
                    <li>
                        <i styleName="head"></i>
                        <input type="text" />
                    </li>
                    <li>
                        <i styleName="password"></i>
                        <input type="password" />
                    </li>
                    <li styleName="reminder">用户名或密码错误</li>
                    <li>
                        <button>登录</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CSSModules(Login,style,{allowMultiple:true})