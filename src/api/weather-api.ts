export interface DailyForecast {
  daily: DayForecast[]
}

interface DayForecast {
  dt: number
  weather: Weather[]
  temp: Temperature
}

interface Weather {
  icon: string
}

interface Temperature {
  max: number
}

export interface HistoricalWeather {
  current: CurrentWeather
}

interface CurrentWeather {
  dt: number
  weather: Weather[]
  temp: number
}

export const getHistoricalWeather = async (lat: number, lon: number, time: number): Promise<HistoricalWeather> => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  )

  if (result.ok) {
    return result.json()
  } else {
    throw new Error('Cannot fetch historical weather')
  }
}

export const getWeatherForecast = async (lat: number, lon: number): Promise<DailyForecast> => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  )

  if (result.ok) {
    return result.json()
  } else {
    throw new Error('Cannot fetch forecast')
  }
}
