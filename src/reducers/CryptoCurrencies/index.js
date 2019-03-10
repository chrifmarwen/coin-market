import {
  FETCH_CRYPT_CURRENCIES_SUCCESS,
  FETCH_CRYPT_CURRENCIES_BEGIN,
  FETCH_CRYPT_CURRENCIES_FAILURE
} from '../../constants/action_types'

const initialState = {
  data: [],
  loading: false,
  start: 1,
  limit: 10,
  error: null
}

export default function cryptoCurrenciesReducer(state = initialState, action) {
  let { start, limit } = action.payload || { start: 1, limit: 10 }
  switch (action.type) {
    case FETCH_CRYPT_CURRENCIES_BEGIN:
      return {
        ...state,
        loading: true,
        start,
        limit,
        error: null
      }

    case FETCH_CRYPT_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        start,
        limit,
        error: null
      }

    case FETCH_CRYPT_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: null
      }

    default:
      return state
  }
}
