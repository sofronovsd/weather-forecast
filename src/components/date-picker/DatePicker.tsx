import React, { useState } from 'react'

import './DatePicker.scss'

type DatePickerProps = {
  placeholder?: string
  handleSelect: (date: string) => void
  disabled?: boolean
}

const DatePicker = ({ placeholder, handleSelect, disabled }: DatePickerProps) => {
  const [value, setValue] = useState('')

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value
    setValue(date)
    handleSelect(date)
  }

  return (
    <input
      type="text"
      className="date-picker text text--secondary"
      placeholder={placeholder}
      value={value}
      onChange={handleChangeValue}
      disabled={disabled}
    />
  )
}

export default DatePicker
