import React, { useEffect, useState } from 'react'

import Card from '../card/Card'
import cities, { City } from '../../assets/cities'
import Dropdown from '../dropdown/Dropdown'

import mockImage from '../../assets/Academy-Weather-bg160.svg'
import './WeeklyForecastCard.scss'
import { DailyForecast, getWeatherForecast } from '../../api/weather-api'

const initialCity: City = {
  name: '',
  longitude: 0,
  latitude: 0
}

const initialForecast: DailyForecast = {
  daily: []
}

const WeeklyForecastCard = () => {
  const [city, setCity] = useState(initialCity)
  const [forecast, setForecast] = useState(initialForecast)
  const [loading, setLoading] = useState(false)

  const handleSelectCity = (city: City) => {
    setCity(city)
  }

  useEffect(() => {
    if (city.name) {
      setLoading(true)
      getWeatherForecast(city.latitude, city.longitude)
        .then(res => {
          console.log('result', res)
          setForecast(res)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [city])

  useEffect(() => {
    if (forecast.daily.length > 0) {
      console.log('forecast', forecast)
    }
  }, [forecast])
  return (
    <Card>
      <h1 className="weekly-forecast-card__header">7 Days Forecast</h1>
      <Dropdown
        className="weekly-forecast-card__dropdown"
        placeholder="Select city"
        options={cities}
        handleSelect={handleSelectCity}
        disabled={loading}
      />
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
