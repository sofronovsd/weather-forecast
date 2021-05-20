import React from 'react'

import './MainPage.scss'
import Logo from '../../components/logo/Logo'
import Card from '../../components/card/Card'
import WeeklyForecastCard from '../../components/weekly-forecast-card/WeeklyForecastCard'

const MainPage = () => {
  return (
    <article className="main-page">
      <header className="main-page__header">
        <Logo />
      </header>
      <main className="main-page__main">
        <WeeklyForecastCard />
        <Card />
      </main>
      <footer className="main-page__footer">
        <span className="text text--small text--weak">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</span>
      </footer>
    </article>
  )
}

export default MainPage
