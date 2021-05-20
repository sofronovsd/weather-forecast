import React, { useRef, useState } from 'react'
import classNames from 'classnames'

import './Dropdown.scss'

type DropdownProps = {
  placeholder?: string
  options: any[]
  className?: string
  handleSelect: (option: any) => void
  disabled?: boolean
}

const Dropdown = ({ placeholder, options, className, handleSelect, disabled }: DropdownProps) => {
  const [selected, setSelected] = useState()
  const dropdownElement = useRef<HTMLButtonElement>(null)
  const optionsListElement = useRef<HTMLDivElement>(null)

  const handleSelectOption = (option: any) => {
    handleSelect(option)
    setSelected(option.name)
    dropdownElement.current?.blur()
  }

  const handleFocus = () => {
    optionsListElement.current?.classList.add('dropdown__option-list--visible')
  }

  const handleBlur = () => {
    optionsListElement.current?.classList.remove('dropdown__option-list--visible')
  }

  const selectStyles = classNames(className, 'dropdown', 'text', 'text--secondary')

  return (
    <button
      className={selectStyles}
      ref={dropdownElement}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
    >
      {selected || placeholder}
      <div className="dropdown__option-list" ref={optionsListElement}>
        {options.map(option => (
          <div key={option.name} onClick={() => handleSelectOption(option)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Dropdown
