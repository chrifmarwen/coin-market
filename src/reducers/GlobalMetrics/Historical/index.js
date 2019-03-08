import {
  FETCH_HISTORICAL_GLOBAL_METRICS_SUCCESS,
  FETCH_HISTORICAL_GLOBAL_METRICS_BEGIN,
  FETCH_HISTORICAL_GLOBAL_METRICS_FAILURE
} from '../../../constants/action_types'

const initialState = {
  data: {
    quotes: [
      {
        timestamp: '2018-12-19T05:57:00.000Z',
        btc_dominance: 53.6661,
        quote: {
          'USD': {
            'total_market_cap': 122650859767.138,
            'total_volume_24h': 19351147951.0239,
            'timestamp': '2018-12-19T05:57:00.000Z'
          }
        }
      },
      {
        timestamp: '2018-12-20T05:57:00.000Z',
        btc_dominance: 53.8702,
        quote: {
          'USD': {
            total_market_cap: 121887401717.107,
            total_volume_24h: 19698769094.272,
            timestamp: '2018-12-20T05:57:00.000Z'
          }
        }
      },
      {
        timestamp: '2018-12-21T05:57:00.000Z',
        btc_dominance: 53.3849,
        quote: {
          'USD': {
            total_market_cap: 130388484801.648,
            total_volume_24h: 28305179737.5254,
            timestamp: '2018-12-21T05:57:00.000Z'
          }
        }
      },
      {
        timestamp: '2018-12-22T05:57:00.000Z',
        'btc_dominance': 53.3674,
        'quote': {
          'USD': {
            'total_market_cap': 126603582163.207,
            'total_volume_24h': 19994408342.7147,
            'timestamp': '2018-12-22T05:57:00.000Z'
          }
        }
      }
    ]
  },
  loading: false,
  error: null
}

export default function historicalGlobalMetricsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_HISTORICAL_GLOBAL_METRICS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_HISTORICAL_GLOBAL_METRICS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null
      }

    case FETCH_HISTORICAL_GLOBAL_METRICS_FAILURE:
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
