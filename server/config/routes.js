const routes = [
  {
    name: 'latest_global_metrics',
    route: '/global-metrics/latest',
    method: 'GET',
    provider: '../services/GlobalMetrics'
  },
  {
    name: 'historical_global_metrics',
    route: '/global-metrics/historical',
    method: 'GET',
    provider: '../services/GlobalMetrics'
  }
]
module.exports.routes = routes
