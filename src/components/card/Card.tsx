import React from 'react'

import './Card.scss'

type CardProps = {
  title?: string
  children?: JSX.Element[] | JSX.Element
}

const Card = ({ children }: CardProps) => {
  return <article className="card">{children}</article>
}

export default Card
