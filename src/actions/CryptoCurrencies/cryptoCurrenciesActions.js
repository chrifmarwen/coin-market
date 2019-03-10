import Axios from 'axios'
import {
  FETCH_CRYPT_CURRENCIES_BEGIN,
  FETCH_CRYPT_CURRENCIES_SUCCESS,
  FETCH_CRYPT_CURRENCIES_FAILURE
} from '../../constants/action_types'

export const fetchCryptoCurrenciesBegin = (payload) => ({
  type: FETCH_CRYPT_CURRENCIES_BEGIN,
  payload
})

export const fetchCryptoCurrenciesSuccess = ({ data, start, limit }) => ({
  type: FETCH_CRYPT_CURRENCIES_SUCCESS,
  payload: { data, start, limit }
})

export const fetchCryptoCurrenciesFailure = error => ({
  type: FETCH_CRYPT_CURRENCIES_FAILURE,
  payload: { error }
})

export function fetchCryptoCurrencies({ start = 1, limit = 10 }) {
  return dispatch => {
    dispatch(fetchCryptoCurrenciesBegin({ start, limit }))
    return Axios.get('/api/currencies/latest', {
      params: {
        start,
        limit
      }
    })
      .then(({ data }) => {
        dispatch(fetchCryptoCurrenciesSuccess({ data: data.data, start, limit }))
        return data.data
      })
      .catch(error => dispatch(fetchCryptoCurrenciesFailure(error)))
  }
}
