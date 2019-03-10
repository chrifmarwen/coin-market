import React from 'react'
import v4 from 'uuid'
import NumberFilter from '../Helper/NumberFilter'

export default ({ data }) => <div>
  <table className="table cryptoCurrenciesTable">
    <thead>
    <tr>
      <td>#</td>
      <td>Name</td>
      <td>Market cap</td>
      <td>Price</td>
      <td>Volume (24h)</td>
      <td>Circulating supply</td>
      <td>Change (24h)</td>
      <td>Price graph (7d)</td>
    </tr>
    </thead>
    <tbody>
    {
      data.map((row) => <tr key={v4()}>
          <td>{row.id}</td>
          <td>
            <img className="logo" alt={row.symbol} src={row.metadata.logo} />
            <span>{row.name}</span></td>
          <td>
            <NumberFilter value={row.quote.USD.market_cap} />$
          </td>
          <td>
            <NumberFilter value={row.quote.USD.price} />$
          </td>
          <td>
            <NumberFilter value={row.quote.USD.volume_24h} />$
          </td>
          <td>
            <NumberFilter value={row.circulating_supply} />
          </td>
          <td>
            <NumberFilter value={row.quote.USD.percent_change_24h} />
          </td>
          <td>
            <img alt={row.symbol}
                 src={`https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/${row.id}.png`} />
          </td>
        </tr>
      )
    }
    </tbody>
  </table>
</div>
