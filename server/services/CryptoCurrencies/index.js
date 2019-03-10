const { body } = require('express-validator/check')
const ServiceProvider = require('../../GenericApiResolver/ServiceProvider')
const axios = require('axios')
const config = require('config')

let myInit = {
  headers: {
    'X-CMC_PRO_API_KEY': '8cd5bde4-c102-488d-a13b-61126288b412',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
}

const CRYPT_CURRENCIES_LIST = 'crypto_currencies_list'

class CryptCurrencies extends ServiceProvider {

  constructor() {
    super()
    this.getCryptoCurrenciesList = this.getCryptoCurrenciesList.bind(this)
    this.on(CRYPT_CURRENCIES_LIST + '_BEGIN', this.getCryptoCurrenciesList)
  }

  static validate(method) {
    switch (method) {
      case CRYPT_CURRENCIES_LIST: {
        return []
      }
      default:
        throw new Error(`This method ${method} is not supported by Orders provider.`)
    }
  }

  /**
   *
   * @param orders
   * @returns {Promise<void>}
   */
  async getCryptoCurrenciesList({ start = 1, limit = 10 }) {
    let requestConfig = { ...myInit, ...{ params: { start, limit } } }
    return axios.get(config.get('coinMarketBaseUrl') + config.get('cryptoCurrencyListing'), requestConfig)
      .then(json => {
        let cryptoCurrenciesList = json.data.data

        const results = cryptoCurrenciesList.map(async (obj) => {
          let objRequestConfig = { ...myInit, ...{ params: { id: obj.id } } }

          let quote = await axios.get(config.get('coinMarketBaseUrl') + config.get('cryptoCurrenciesQuotes'), objRequestConfig)
            .then(json => {
              let key = Object.keys(json.data.data)[0]
              return json.data.data[key]
            })

          let metadata = await axios.get(config.get('coinMarketBaseUrl') + config.get('cryptoCurrencyMetadata'), objRequestConfig)
            .then(json => {
              let key = Object.keys(json.data.data)[0]
              return json.data.data[key]
            })

          return {
            ...obj,
            ...quote,
            metadata: { ...metadata }
          }
        })

        Promise.all(results).then((result) =>
          this.emit(CRYPT_CURRENCIES_LIST + '_SUCCESS', null, { data: result })
        )
      })
      .catch(error => this.emit(CRYPT_CURRENCIES_LIST + '_FAILURE', error))
  }

}

module.exports = CryptCurrencies
