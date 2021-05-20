interface DailyForecast {
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

export const getHistoricalWeather = async (lat: number, lon: number, time: number) => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  ).then(res => res.json())

  if (result) {
    console.log('result', result)
    return result
  } else {
    throw new Error('Cannot fetch historical weather')
  }
}

export const getWeatherForecast = async (lat: number, lon: number): Promise<DailyForecast> => {
  const result: DailyForecast = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  ).then(res => res.json())

  if (result) {
    console.log('result', result)
    return result
  } else {
    throw new Error('Cannot fetch forecast')
  }
}
