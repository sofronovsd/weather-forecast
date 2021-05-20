import React, { useEffect, useState } from 'react'

import Card from '../card/Card'
import Dropdown from '../dropdown/Dropdown'

import cities, { City } from '../../assets/cities'
import mockImage from '../../assets/Academy-Weather-bg160.svg'
import { getWeatherForecast } from '../../api/weather-api'
import './DateForecastCard.scss'

const initialCity: City = {
  name: '',
  longitude: 0,
  latitude: 0
}

const DateForecastCard = () => {
  const [city, setCity] = useState(initialCity)

  useEffect(() => {
    if (city.name) {
      getWeatherForecast(city.latitude, city.longitude).then(res => {
        console.log('result', res)
      })
    }
  }, [city])

  const handleSelectCity = (city: City) => {
    setCity(city)
  }
  return (
    <Card>
      <h1 className="date-forecast-card__header">Forecast for a Date in the Past</h1>
      <div className="date-forecast-card__inputs-container">
        <Dropdown placeholder="Select city" options={cities} handleSelect={handleSelectCity} />
        <input type="date" />
      </div>
      <div className="date-forecast-card__image-container">
        <img src={mockImage} className="date-forecast-card__mock-image" alt="mocked weather" />
        <span className="text text--secondary text--bold">
          Fill in all the fields and the weather will be displayed
        </span>
      </div>
    </Card>
  )
}

export default DateForecastCard
