import React from 'react'
import classNames from 'classnames'

import Card from '../card/Card'

import './WeatherCard.scss'
import moment from 'moment'

type WeatherCardProps = {
  className?: string
  icon: string
  temp: number
  date: number
}

const WeatherCard = ({ className, icon, temp, date }: WeatherCardProps) => {
  const cardStyles = classNames(className, 'weather-card')

  const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <Card className={cardStyles}>
      <img className="weather-card__icon" src={imgSrc} alt="weather" />
      <h1 className="weather-card__temp text--weak">{`${temp > 0 ? '+' : '-'}${Math.floor(temp)}°`}</h1>
      <span className="weather-card__date text text--weak text--bold">{moment(date * 1000).format('DD MMM YYYY')}</span>
    </Card>
  )
}

export default WeatherCard
