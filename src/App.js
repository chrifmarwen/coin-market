import React from 'react'
import './App.css'
import LatestGlobalMetrics from './components/GlobalMetrics/Latest'
import CryptoCurrencies from './components/CryptoCurrencies'

const App = () =>
  <div className="App">
    <header className="App-header">
      <p>
        Coin-market
      </p>
    </header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-12 col-12">
          <LatestGlobalMetrics />
        </div>
        <div className="col-md-9 col-sm-12 col-12">
          <CryptoCurrencies />
        </div>
      </div>
    </div>
  </div>

export default App
