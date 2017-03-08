import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, IndexRoute, Router, Route } from 'react-router'

const App = (location, callback) => { System.import('./App').then(component => { callback(null, component.default || component) }) }
const Index = (location, callback) => { System.import('./components/index/index').then(component => { callback(null, component.default || component) }) }
const Login = (location, callback) => { System.import('./components/index/login').then(component => { callback(null, component.default || component) }) }
const Message = (location, callback) => { System.import('./components/message/index').then(component => { callback(null, component.default || component) }) }
const Analysis = (location, callback) => { System.import('./components/analysis/index').then(component => { callback(null, component.default || component) }) }

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" getComponent={App}>
            <IndexRoute getComponent={Index} />
            <Route path="index" getComponent={Index} />
            <Route path="message" getComponent={Message} />
            <Route path="report" getComponent={Analysis} />
        </Route>
        <Route path="login" getComponent={Login} />
    </Router>,
    document.getElementById('root')
)