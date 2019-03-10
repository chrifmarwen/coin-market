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

const LATEST_GLOBAL_METRICS = 'latest_global_metrics'

class GlobalMetrics extends ServiceProvider {

  constructor() {
    super()
    this.getLatestGlobalMetrics = this.getLatestGlobalMetrics.bind(this)
    this.on(LATEST_GLOBAL_METRICS + '_BEGIN', this.getLatestGlobalMetrics)
  }

  static validate(method) {
    switch (method) {
      case LATEST_GLOBAL_METRICS: {
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
        this.emit(LATEST_GLOBAL_METRICS + '_SUCCESS', null, { data: json.data.data })
      })
      .catch(error => this.emit(LATEST_GLOBAL_METRICS + '_FAILURE', null, error))
  }
}

module.exports = GlobalMetrics
