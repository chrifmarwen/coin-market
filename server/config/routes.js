const routes = [
  {
    name: 'latest_global_metrics',
    route: '/global-metrics/latest',
    method: 'GET',
    provider: '../services/GlobalMetrics'
  },
  {
    name: 'crypto_currencies_list',
    route: '/currencies/latest',
    method: 'GET',
    provider: '../services/CryptoCurrencies'
  }
]
module.exports.routes = routes
