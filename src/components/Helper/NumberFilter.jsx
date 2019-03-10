import React from 'react'

const NumberFilter = ({ value }) => {
  return <span>
    {parseFloat(value.toString()).toFixed(2)}
  </span>
}

export default NumberFilter
