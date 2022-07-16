import axios from 'axios'

import { WeatherResponseType } from '../../types/types'
import { WeatherAppKey } from '../../utils'

type Params = {
  lat: number
  lon: number
}

const getWeather = async (params: Params) => {
  const { lat, lon } = params
  const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely,hourly,alerts}&units={metric}&appid=${WeatherAppKey}`
  const response = await axios.get<WeatherResponseType>(weatherUrl)
  return response.data
}

export const WeatherApi = { getWeather }
