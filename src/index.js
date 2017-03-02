import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, IndexRoute, Router, Route, Link } from 'react-router'

let App = (location,callback) => { System.import('./App').then(component => { callback(null,component.default || component) }) }
let Index = (location,callback) => { System.import('./index/index').then(component => { callback(null,component.default || component) })}
let Login = (location,callback) => { System.import('./index/login').then(component => { callback(null,component.default || component) })}

const render = ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/login" getComponent={Login} />
        <Route path="/" getComponent={App}>
            <IndexRoute getComponent={Index} />
            <Route path="/index" getComponent={Index} />
        </Route>
    </Router>,
    document.getElementById('root')
)