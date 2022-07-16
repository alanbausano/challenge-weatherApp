import { useQuery } from 'react-query'

import { QUERY_KEYS } from '../../Enums/QueryKeys'
import { Filters } from '../../types/types'
import { WeatherApi } from './api'

const useWeathers = (filters: Filters) => {
  const { data, isLoading } = useQuery([QUERY_KEYS.WEATHERS, { filters }], () =>
    WeatherApi.getWeather(filters),
  )

  return {
    data,
    isLoading,
  }
}

export { useWeathers }
