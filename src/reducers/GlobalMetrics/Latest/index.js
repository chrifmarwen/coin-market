import {
  FETCH_LATEST_GLOBAL_METRICS_SUCCESS,
  FETCH_LATEST_GLOBAL_METRICS_BEGIN,
  FETCH_LATEST_GLOBAL_METRICS_FAILURE
} from '../../../constants/action_types'

const initialState = {
  data: {
    active_cryptocurrencies: '',
    active_market_pairs: '',
    active_exchanges: '',
    eth_dominance: '',
    btc_dominance: '',
    quote: {
      USD: {
        total_market_cap: '',
        total_volume_24h: '',
        last_updated: ''
      }
    },
    last_updated: ''
  },
  loading: false,
  error: null
}

export default function latestGlobalMetricsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LATEST_GLOBAL_METRICS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_LATEST_GLOBAL_METRICS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      }

    case FETCH_LATEST_GLOBAL_METRICS_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null
      }

    default:
      // ALWAYS have a default case in a reducer
      return state
  }
}
