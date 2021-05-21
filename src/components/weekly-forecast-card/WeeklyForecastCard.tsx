import React, { useEffect, useMemo, useState } from 'react'

import Card from '../card/Card'
import cities, { City } from '../../assets/cities'
import Dropdown from '../dropdown/Dropdown'

import mockImage from '../../assets/Academy-Weather-bg160.svg'
import arrowLeft from '../../assets/chevron-left.svg'
import arrowRight from '../../assets/chevron-right.svg'
import './WeeklyForecastCard.scss'
import { DailyForecast, getWeatherForecast } from '../../api/weather-api'
import WeatherCard from '../weather-card/WeatherCard'
import classNames from 'classnames'

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
  const [index, setIndex] = useState(0)

  const leftArrowStyles = classNames('weekly-forecast-card__arrow', 'weekly-forecast-card__arrow--left', {
    'weekly-forecast-card__arrow--disabled': index === 0
  })

  const rightArrowStyles = classNames('weekly-forecast-card__arrow', 'weekly-forecast-card__arrow--right', {
    'weekly-forecast-card__arrow--disabled': index === 5
  })

  const handleSelectCity = (city: City) => {
    setCity(city)
  }

  useEffect(() => {
    if (city.name) {
      setLoading(true)
      getWeatherForecast(city.latitude, city.longitude)
        .then(res => {
          setForecast(res)
        })
        .catch(e => {
          console.log('Error:', e.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [city])

  const isForecast = useMemo(() => {
    return forecast.daily.length > 0
  }, [forecast])

  const handleLeftArrowClick = () => {
    if (index > 0) {
      setIndex(prev => prev - 1)
    }
  }

  const handleRightArrowClick = () => {
    if (index < 5) {
      setIndex(prev => prev + 1)
    }
  }

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
        {isForecast ? (
          <>
            <img className={leftArrowStyles} src={arrowLeft} onClick={handleLeftArrowClick} alt="left" />
            <img className={rightArrowStyles} src={arrowRight} onClick={handleRightArrowClick} alt="left" />
            <div className="weekly-forecast-card__forecast-container">
              <WeatherCard
                icon={forecast.daily[index].weather[0].icon}
                temp={forecast.daily[index].temp.max}
                date={forecast.daily[index].dt}
                iconClassName="weekly-forecast-card__weather-icon"
                className="weekly-forecast-card__weather-card"
              />
              <WeatherCard
                icon={forecast.daily[index + 1].weather[0].icon}
                temp={forecast.daily[index + 1].temp.max}
                date={forecast.daily[index + 1].dt}
                iconClassName="weekly-forecast-card__weather-icon"
                className="weekly-forecast-card__weather-card"
              />
              <WeatherCard
                icon={forecast.daily[index + 2].weather[0].icon}
                temp={forecast.daily[index + 2].temp.max}
                date={forecast.daily[index + 2].dt}
                iconClassName="weekly-forecast-card__weather-icon"
                className="weekly-forecast-card__weather-card"
              />
            </div>
          </>
        ) : (
          <>
            <img src={mockImage} className="weekly-forecast-card__mock-image" alt="mocked weather" />
            <span className="text text--secondary text--bold text--center">
              Fill in all the fields and the weather will be displayed
            </span>
          </>
        )}
      </div>
    </Card>
  )
}

export default WeeklyForecastCard
