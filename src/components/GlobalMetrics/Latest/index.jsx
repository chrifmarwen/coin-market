import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLatestGlobalMetrics } from '../../../actions/GlobalMetrics/latestGlobalMetricsActions'
import Body from './Body'

class LatestGlobalMetrics extends Component {

  componentDidMount() {
    this.props.dispatch(fetchLatestGlobalMetrics())
  }

  render() {
    const { loading, data } = this.props

    return <div className="card">
      <div className="card-header">
        Latest Global Metrics
      </div>
      <Body loading={loading}
            data={data} />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    ...state.globalMetrics.latest
  }
}
export default connect(
  mapStateToProps
)(LatestGlobalMetrics)
