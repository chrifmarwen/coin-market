import React from 'react'

export const QuoteDisplay = ({ quote = {} }) => {
  let { USD } = quote
  if (USD) {
    let { total_market_cap, total_volume_24h } = USD
    return <div>
      <div>
        <span className="label">Total market cap. :</span>
        <span>{total_market_cap} $</span>
      </div>
      <div>
        <span className="label">Total volume 24h :</span>
        <span>{total_volume_24h} $</span>
      </div>
    </div>
  } else {
    return <div>
      <div className="alert alert-warning" role="alert">
        The latest Global metrics are not available
      </div>
    </div>
  }
}
