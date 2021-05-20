import React, { useEffect, useState } from 'react'

import Card from '../card/Card'
import Dropdown from '../dropdown/Dropdown'

import cities, { City } from '../../assets/cities'
import mockImage from '../../assets/Academy-Weather-bg160.svg'
import { getHistoricalWeather } from '../../api/weather-api'
import './DateForecastCard.scss'
import DatePicker from '../date-picker/DatePicker'
import moment from 'moment'

const initialCity: City = {
  name: '',
  longitude: 0,
  latitude: 0
}

const DateForecastCard = () => {
  const [city, setCity] = useState(initialCity)
  const [date, setDate] = useState('')

  useEffect(() => {
    if (city.name && /[0-9/]{10}/.test(date)) {
      const formattedDate =
        moment(date, 'DD/MM/YYYY')
          .toDate()
          .getTime() / 1000
      getHistoricalWeather(city.latitude, city.longitude, formattedDate).then(res => {
        console.log('result', res)
      })
    }
  }, [city, date])

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
        <Dropdown placeholder="Select city" options={cities} handleSelect={handleSelectCity} />
        <DatePicker placeholder="Select date" handleSelect={handleSelectDate} />
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
