import { useQuery } from 'react-query'

import { QUERY_KEYS } from '../../enums/QueryKeys'
import { Filters } from '../../types/types'
import { WeatherApi } from './api'

const useWeathers = (filters: Filters) => {
  const { data, isLoading } = useQuery([QUERY_KEYS.WEATHERS, { filters }], () =>
    WeatherApi.getWeather(filters),
  )

  const icon = data?.current.weather.map(e => e.icon)
  return {
    data,
    isLoading,
    icon,
  }
}

export { useWeathers }
