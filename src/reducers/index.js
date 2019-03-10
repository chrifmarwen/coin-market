import { combineReducers } from 'redux'
import globalMetrics from './GlobalMetrics'
import cryptoCurrencies from './CryptoCurrencies'

export default combineReducers({ globalMetrics, cryptoCurrencies })
