import React from 'react'
import classNames from 'classnames'

import './Card.scss'

type CardProps = {
  className?: string
  children?: JSX.Element[] | JSX.Element
}

const Card = ({ children, className }: CardProps) => {
  const cardStyles = classNames(className, 'card')
  return <article className={cardStyles}>{children}</article>
}

export default Card
