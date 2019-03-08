import {
  FETCH_HISTORICAL_GLOBAL_METRICS_BEGIN,
  FETCH_HISTORICAL_GLOBAL_METRICS_FAILURE,
  FETCH_HISTORICAL_GLOBAL_METRICS_SUCCESS
} from '../../constants/action_types'
import Axios from 'axios'

export const fetchHistoricalGlobalMetricsBegin = () => ({
  type: FETCH_HISTORICAL_GLOBAL_METRICS_BEGIN
})

export const fetchHistoricalGlobalMetricsSuccess = data => ({
  type: FETCH_HISTORICAL_GLOBAL_METRICS_SUCCESS,
  payload: { data }
})

export const fetchHistoricalGlobalMetricsFailure = error => ({
  type: FETCH_HISTORICAL_GLOBAL_METRICS_FAILURE,
  payload: { error }
})

export function fetchHistoricalGlobalMetrics() {
  return dispatch => {
    dispatch(fetchHistoricalGlobalMetricsBegin())
    return Axios.get('/api/global-metrics/historical')
      .then(({ data }) => {
        dispatch(fetchHistoricalGlobalMetricsSuccess(data.data))
        return data.data
      })
      .catch(error => dispatch(fetchHistoricalGlobalMetricsFailure(error)))
  }
}
