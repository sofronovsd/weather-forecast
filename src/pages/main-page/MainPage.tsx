import React from 'react'

import Logo from '../../components/logo/Logo'
import WeeklyForecastCard from '../../components/weekly-forecast-card/WeeklyForecastCard'
import DateForecastCard from '../../components/date-forecast-card/DateForecastCard'

import './MainPage.scss'

const MainPage = () => {
  return (
    <article className="main-page">
      <header className="main-page__header">
        <Logo />
      </header>
      <main className="main-page__main">
        <WeeklyForecastCard />
        <DateForecastCard />
      </main>
      <footer className="main-page__footer">
        <span className="text text--small text--weak">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</span>
      </footer>
    </article>
  )
}

export default MainPage
