import {
  FETCH_LATEST_GLOBAL_METRICS_BEGIN,
  FETCH_LATEST_GLOBAL_METRICS_FAILURE,
  FETCH_LATEST_GLOBAL_METRICS_SUCCESS
} from '../../constants/action_types'
import Axios from 'axios'

export const fetchLatestGlobalMetricsBegin = () => ({
  type: FETCH_LATEST_GLOBAL_METRICS_BEGIN
})

export const fetchLatestGlobalMetricsSuccess = data => ({
  type: FETCH_LATEST_GLOBAL_METRICS_SUCCESS,
  payload: { data }
})

export const fetchLatestGlobalMetricsFailure = error => ({
  type: FETCH_LATEST_GLOBAL_METRICS_FAILURE,
  payload: { error }
})

export function fetchLatestGlobalMetrics() {
  return dispatch => {
    dispatch(fetchLatestGlobalMetricsBegin())
    return Axios.get('/api/global-metrics/latest')
      .then(({ data }) => {
        dispatch(fetchLatestGlobalMetricsSuccess(data.data))
        return data.data
      })
      .catch(error => dispatch(fetchLatestGlobalMetricsFailure(error)))
  }
}
