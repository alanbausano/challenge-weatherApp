import { useQuery } from 'react-query'

import { QUERY_KEYS } from '../../enums/QueryKeys'
import { Filters } from '../../types/types'
import { WeatherApi } from './api'

const useWeathers = (filters: Filters) => {
  const { data, isLoading } = useQuery([QUERY_KEYS.WEATHERS, { filters }], () =>
    WeatherApi.getWeather(filters),
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
