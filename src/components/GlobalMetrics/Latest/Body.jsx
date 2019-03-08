import { QuoteDisplay } from './QuoteDisplay'
import React from 'react'

const Body = ({ loading, data }) => {
  const { active_cryptocurrencies, active_market_pairs, active_exchanges, eth_dominance, btc_dominance, quote } = data
  if (loading) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-grow text-primary m-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  } else {
    return <ul className="list-group list-group-flush latestGlobalMetricsList">
      <li className="list-group-item">
        <span className="label">Active crypto-currencies:</span>
        <span>{active_cryptocurrencies}</span>
      </li>
      <li className="list-group-item">
        <span className="label">Active market pairs:</span>
        <span>{active_market_pairs}</span>
      </li>
      <li className="list-group-item">
        <span className="label">Active exchange:</span>
        <span>{active_exchanges}</span>
      </li>
      <li className="list-group-item">
        <span className="label">ETH dominance:</span>
        <span>{eth_dominance}%</span>
      </li>
      <li className="list-group-item">
        <span className="label">BTC dominance:</span>
        <span>{btc_dominance}%</span>
      </li>
      <li className="list-group-item">
        <QuoteDisplay quote={quote} />
      </li>
    </ul>
  }
}

export default Body
