import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'

import { Strings } from '../../../enums/Enums'
import { useWeathers } from '../../../hooks/useWeathers'
import {
  StyledCard,
  StyledCenteredContainer,
  StyledInfo,
  StyledInfoTitle,
  StyledLargeInfo,
  StyledMediumInfo,
  StyledRow,
  StyledTitle,
} from '../../../styles/globalStyledComponents'
import cloud from '../../../icons/03d.png'

export const CurrentLocation = () => {
  const BAIRES_GEOLOCATION = {
    lat: -34.5811123,
    lon: -58.4287612,
  }
  const [latitude, setLatitude] = useState<number | undefined>()
  const [longitude, setLongitude] = useState<number | undefined>()
  const { data } = useWeathers({
    lat: latitude === undefined ? BAIRES_GEOLOCATION.lat : latitude,
    lon: longitude === undefined ? BAIRES_GEOLOCATION.lon : longitude,
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLatitude(coords.latitude)
      setLongitude(coords.longitude)
    })
  }, [])

  const timezone = data?.timezone.replaceAll('_', ' ')
  const fullTimezone = timezone?.replaceAll('/', ' ')
  return (
    <StyledCenteredContainer>
      <StyledCard>
        <StyledInfo>{Strings.CURRENT_LOCATION}</StyledInfo>
        <StyledTitle>{fullTimezone}</StyledTitle>
        <StyledRow>
          <Col>
            <StyledLargeInfo>
              <img src={cloud} alt="cloud" />
              {data?.current.temp && `${Math.round(data?.current.temp)}°C`}
            </StyledLargeInfo>
          </Col>
          <Row>
            <Col>
              <StyledInfoTitle>{Strings.HUMIDITY}</StyledInfoTitle>
              <StyledMediumInfo>{data?.current.humidity} %</StyledMediumInfo>
            </Col>
            <Col>
              <StyledInfoTitle>{Strings.WIND}</StyledInfoTitle>
              <StyledMediumInfo>{data?.current.wind_speed} km/h</StyledMediumInfo>
            </Col>
          </Row>
        </StyledRow>
      </StyledCard>
    </StyledCenteredContainer>
  )
}
