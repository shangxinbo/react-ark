import { combineReducers } from 'redux'
import common from './common'
import report from './report'

let rootReducer = combineReducers({ common,report })
export default rootReducer
