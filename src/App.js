import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import actions from './redux/action'
import Header from './common/header'
import common from './css/common.css'

class App extends Component {
    handleClick = () => {
        store.dispatch(actions.toggleNav(false))
        store.dispatch(actions.toggleAccount(false))
    }
    render() {
        return (
            <Provider store={store}>
                <div onClick={this.handleClick}>
                    <Header />
                    {this.props.children}
                    <div className="footer">
                        <p>Copyright&nbsp;&copy;&nbsp;2016&nbsp;集奥聚合</p>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App
