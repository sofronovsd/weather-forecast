import React, { useState } from 'react'

import './DatePicker.scss'

type DatePickerProps = {
  placeholder?: string
  handleSelect: (date: string) => void
}

const DatePicker = ({ placeholder, handleSelect }: DatePickerProps) => {
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
      pattern="[0-9/]{10}"
    />
  )
}

export default DatePicker
