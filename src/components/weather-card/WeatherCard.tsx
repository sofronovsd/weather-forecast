import React from 'react'
import classNames from 'classnames'

import Card from '../card/Card'

import './WeatherCard.scss'
import moment from 'moment'

type WeatherCardProps = {
  className?: string
  iconClassName?: string
  icon: string
  temp: number
  date: number
}

const WeatherCard = ({ className, icon, temp, date, iconClassName }: WeatherCardProps) => {
  const cardStyles = classNames(className, 'weather-card')
  const iconStyles = classNames(iconClassName, 'weather-card__icon')

  const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`
  return (
    <Card className={cardStyles}>
      <img className={iconStyles} src={imgSrc} alt="weather" />
      <h1 className="weather-card__temp text--weak">{`${temp > 0 ? '+' : '-'}${Math.floor(temp)}°`}</h1>
      <span className="weather-card__date text text--weak text--bold">{moment(date * 1000).format('DD MMM YYYY')}</span>
    </Card>
  )
}

export default WeatherCard
