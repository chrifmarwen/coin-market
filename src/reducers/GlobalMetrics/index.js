import { combineReducers } from 'redux'
import latest from './Latest'
import historical from './Historical'

export default combineReducers({ latest, historical })

