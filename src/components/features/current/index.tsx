import { useEffect, useState } from 'react'

import { useWeathers } from '../../../hooks/useWeathers'
import { StyledCenterContainer } from '../../../styles/globalStyledComponents'

export const CurrentLocation = () => {
  const [latitude, setLatitude] = useState<number | undefined>()
  const [longitude, setLongitude] = useState<number | undefined>()
  const { data } = useWeathers({
    lat: latitude === undefined ? -34.5811123 : latitude,
    lon: longitude === undefined ? -58.4287612 : longitude,
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLatitude(coords.latitude)
      setLongitude(coords.longitude)
    })
  }, [])
  return <StyledCenterContainer>{data?.timezone}</StyledCenterContainer>
}
