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

class GlobalMetrics extends ServiceProvider {

  constructor() {
    super()
    this.getLatestGlobalMetrics = this.getLatestGlobalMetrics.bind(this)
    this.on('latest_global_metrics_BEGIN', this.getLatestGlobalMetrics)
    this.getHistoricalGlobalMetrics = this.getHistoricalGlobalMetrics.bind(this)
    this.on('historical_global_metrics_BEGIN', this.getHistoricalGlobalMetrics)
  }

  static validate(method) {
    switch (method) {
      case 'latest_global_metrics': {
        return []
      }
      case 'historical_global_metrics': {
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
  async getLatestGlobalMetrics({}) {
    return axios.get(config.get('coinMarketBaseUrl') + config.get('latestGlobalMetricsRoute'), myInit)
      .then(json => {
        this.emit('latest_global_metrics' + '_SUCCESS', null, { data: json.data.data })
      })
      .catch(error => this.emit('latest_global_metrics' + '_FAILURE', null, error))
  }

  /**
   *
   * @param orders
   * @returns {Promise<void>}
   */
  async getHistoricalGlobalMetrics({}) {
    return axios.get(config.get('coinMarketBaseUrl') + config.get('historicalGlobalMetricsRoute'), myInit)
      .then(json => {
        this.emit('historical_global_metrics' + '_SUCCESS', null, { data: json.data.data })
      })
      .catch(error => this.emit('historical_global_metrics' + '_FAILURE', null, error))
  }
}

module.exports = GlobalMetrics
