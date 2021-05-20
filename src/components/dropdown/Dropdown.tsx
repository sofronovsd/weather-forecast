import React from 'react'
import classNames from 'classnames'

type DropdownProps = {
  placeholder?: string
  options: any[]
  className?: string
}

const Dropdown = ({ placeholder, options, className }: DropdownProps) => {
  const selectStyles = classNames(className, 'text', 'text--secondary')

  return (
    <select className={selectStyles}>
      {placeholder && (
        <option selected hidden>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={option.name}>{option.name}</option>
      ))}
    </select>
  )
}

export default Dropdown
