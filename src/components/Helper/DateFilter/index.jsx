import React from 'react'
import moment from 'moment'

const DateFilter = ({ date }) => {
  let momentDate = moment(date)
  return <span>
    {momentDate.format('YYYY MM DD')}
  </span>
}

export default DateFilter
