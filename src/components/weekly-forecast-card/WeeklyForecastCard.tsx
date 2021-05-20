import React from 'react'

import Card from '../card/Card'
import cities from './cities'
import Dropdown from '../dropdown/Dropdown'

import mockImage from '../../assets/Academy-Weather-bg160.svg'
import './WeeklyForecastCard.scss'

const WeeklyForecastCard = () => {
  return (
    <Card>
      <h1 className="weekly-forecast-card__header">7 Days Forecast</h1>
      <Dropdown className="weekly-forecast-card__dropdown" placeholder="Select city" options={cities} />
      <div className="weekly-forecast-card__image-container">
        <img src={mockImage} className="weekly-forecast-card__mock-image" alt="mocked weather" />
        <span className="text text--secondary text--bold">
          Fill in all the fields and the weather will be displayed
        </span>
      </div>
    </Card>
  )
}

export default WeeklyForecastCard
