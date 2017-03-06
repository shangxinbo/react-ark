import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, IndexRoute, Router, Route, Link } from 'react-router'

const App = (location, callback) => { System.import('./App').then(component => { callback(null, component.default || component) }) }
const Index = (location, callback) => { System.import('./components/index/index').then(component => { callback(null, component.default || component) }) }
const Login = (location, callback) => { System.import('./components/index/login').then(component => { callback(null, component.default || component) }) }
const Message = (location, callback) => { System.import('./components/message/index').then(component => { callback(null, component.default || component) }) }
const Analysis = (location, callback) => { System.import('./components/analysis/index').then(component => { callback(null, component.default || component) }) }
// import App from './App'
// import Layout from './common/layout'
// import Index from './index/index'
// import Login from './index/login'

// let App = (location,callback) => { require.ensure([], function(require) { callback(null,require('./App')) },App) }
// let Layout = (location,callback) => { require.ensure([], function(require) { callback(null,require('./common/layout')) },Layout)}
// let Index = (location,callback) => { require.ensure([], function(require) { callback(null,require('./index/index')) },Index)}
// let Login = (location,callback) => { require.ensure([], function(require) { callback(null,require('./index/login')) },Login)}



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