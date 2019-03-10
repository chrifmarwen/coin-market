import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCryptoCurrencies } from '../../actions/CryptoCurrencies/cryptoCurrenciesActions'
import Table from './Table'

import style from './style.css'

class CryptoCurrencies extends Component {

  componentDidMount() {
    let { start, limit } = this.props
    this.props.dispatch(fetchCryptoCurrencies({ start, limit }))
  }

  render() {
    const { loading, data } = this.props

    return <div>
      <Table data={data} />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    ...state.cryptoCurrencies
  }
}
export default connect(
  mapStateToProps
)(CryptoCurrencies)
