import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import actions from './redux/action'
import Header from './components/common/header'
import footer from './css/footer.css'

class Layout extends Component {
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
                    <div className={footer.footer}>
                        <p>Copyright&nbsp;&copy;&nbsp;2016&nbsp;集奥聚合</p>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default Layout

