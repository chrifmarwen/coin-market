import React from 'react'
import './App.css'
import LatestGlobalMetrics from './components/GlobalMetrics/Latest'
import HistoricalGlobalMetrics from './components/GlobalMetrics/Historical'

const App = () =>
  <div className="App">
    <header className="App-header">
      <p>
        Coin-market
      </p>
    </header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-12">
          <LatestGlobalMetrics />
        </div>
        <div className="col-md-6 col-sm-6 col-12">
          <HistoricalGlobalMetrics />
        </div>
        <div className="col-sm-3 col-12">
          One of three columns
        </div>
      </div>
    </div>
  </div>

export default App
