import { notification } from 'antd'
import { useQuery } from 'react-query'

import { QUERY_KEYS } from '../../enums/QueryKeys'
import { Filter } from '../../types/types'
import { WeatherApi } from './api'

const useWeathers = (filter: Filter) => {
  const onError = () => {
    notification.warning({
      message: 'Coordinates not found',
      description: 'Please enable your geolocation',
    })
  }
  const { data, isLoading } = useQuery(
    [QUERY_KEYS.WEATHERS, { filter }],
    () => WeatherApi.getWeather(filter),
    {
      onError,
    },
  )

  const icon = data?.current.weather.map(w => w.icon)
  const main = data?.current.weather.map(w => w.main)
  const description = data?.current.weather.map(w => w.description)
  const daily = data?.daily

  return {
    data,
    isLoading,
    icon,
    main,
    description,
    daily,
  }
}

export { useWeathers }
