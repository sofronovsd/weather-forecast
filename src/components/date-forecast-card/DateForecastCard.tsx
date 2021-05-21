import React, { useEffect, useMemo, useState } from 'react'

import Card from '../card/Card'
import Dropdown from '../dropdown/Dropdown'

import cities, { City } from '../../assets/cities'
import mockImage from '../../assets/Academy-Weather-bg160.svg'
import { getHistoricalWeather, HistoricalWeather } from '../../api/weather-api'
import './DateForecastCard.scss'
import DatePicker from '../date-picker/DatePicker'
import moment from 'moment'
import WeatherCard from '../weather-card/WeatherCard'

const initialCity: City = {
  name: '',
  longitude: 0,
  latitude: 0
}

const initialForecast: HistoricalWeather = {
  current: {
    dt: 0,
    temp: 0,
    weather: []
  }
}

const DateForecastCard = () => {
  const [city, setCity] = useState(initialCity)
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [forecast, setForecast] = useState(initialForecast)

  useEffect(() => {
    if (city.name && /[0-9/]{10}/.test(date)) {
      setLoading(true)
      const formattedDate =
        moment(date, 'DD/MM/YYYY')
          .add(12, 'hours')
          .toDate()
          .getTime() / 1000
      getHistoricalWeather(city.latitude, city.longitude, formattedDate)
        .then(res => {
          console.log('result', res)
          // const historicalWeather = res.current
          setForecast(res)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [city, date])

  const isForecast = useMemo(() => {
    return forecast.current.weather.length > 0
  }, [forecast])

  const handleSelectCity = (city: City) => {
    setCity(city)
  }

  const handleSelectDate = (date: string) => {
    setDate(date)
  }

  return (
    <Card>
      <h1 className="date-forecast-card__header">Forecast for a Date in the Past</h1>
      <div className="date-forecast-card__inputs-container">
        <Dropdown placeholder="Select city" options={cities} handleSelect={handleSelectCity} disabled={loading} />
        <DatePicker placeholder="Select date" handleSelect={handleSelectDate} disabled={loading} />
      </div>
      <div className="date-forecast-card__image-container">
        {isForecast ? (
          <WeatherCard
            icon={forecast.current.weather[0]?.icon}
            temp={forecast.current.temp}
            date={forecast.current.dt}
          />
        ) : (
          <>
            <img src={mockImage} className="date-forecast-card__mock-image" alt="mocked weather" />
            <span className="text text--secondary text--bold">
              Fill in all the fields and the weather will be displayed
            </span>
          </>
        )}
      </div>
    </Card>
  )
}

export default DateForecastCard
