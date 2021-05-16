import React from 'react'

import './MainPage.scss'
import Logo from '../../components/logo/Logo'
import Card from '../../components/card/Card'

const MainPage = () => {
  return (
    <article className="main-page">
      <header className="main-page__header">
        <Logo />
      </header>
      <main className="main-page__main">
        <Card />
        <Card />
      </main>
      <footer className="main-page__footer">
        <span className="text text--small text--weak">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</span>
      </footer>
    </article>
  )
}

export default MainPage
