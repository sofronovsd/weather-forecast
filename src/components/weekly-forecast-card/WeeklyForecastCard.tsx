import React from 'react'

import Card from '../card/Card'
import cities from './cities'
import Dropdown from '../dropdown/Dropdown'

import './WeeklyForecastCard.scss'

const WeeklyForecastCard = () => {
  return (
    <Card>
      <h1>7 Days Forecast</h1>
      <Dropdown className="weekly-forecast-card__dropdown" placeholder="Select city" options={cities} />
    </Card>
  )
}

export default WeeklyForecastCard
