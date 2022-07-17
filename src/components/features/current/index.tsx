import { Col, Row } from 'antd'
import { useEffect, useState } from 'react'

import { Strings } from '../../../enums/Enums'
import { useWeathers } from '../../../hooks/useWeathers'
import {
  StyledCard,
  StyledCenteredCol,
  StyledCenteredContainer,
  StyledHeader,
  StyledInfo,
  StyledInfoTitle,
  StyledLargeInfo,
  StyledMediumInfo,
  StyledRow,
  StyledTitle,
} from '../../../styles/globalStyledComponents'
import { NextDays } from '../nextDays'
import { Select } from '../Select'

export const CurrentLocation = () => {
  const BAIRES_GEOLOCATION = {
    lat: -34.5811123,
    lon: -58.4287612,
  }
  const [latitude, setLatitude] = useState<number | undefined>()
  const [longitude, setLongitude] = useState<number | undefined>()

  const { data, main, description, icon, daily } = useWeathers({
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
        <StyledHeader>
          <StyledCenteredCol>
            <StyledInfo>{Strings.CURRENT_LOCATION}</StyledInfo>
            <StyledTitle>{fullTimezone}</StyledTitle>
            <StyledInfo>
              {data?.current.dt
                ? new Date(data.current.dt * 1000).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : undefined}
            </StyledInfo>
          </StyledCenteredCol>
          <StyledCenteredCol>
            <StyledInfo>{Strings.CHOOSE_LOCATION}</StyledInfo>
            <Select />
          </StyledCenteredCol>
        </StyledHeader>
        <StyledRow className="main">
          <StyledCenteredCol>
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
            {description}
          </StyledCenteredCol>
          <Col>
            <StyledLargeInfo>
              {data?.current.temp && `${Math.round(data?.current.temp)}°C`}
            </StyledLargeInfo>
          </Col>
          <Col>
            <Row>
              <StyledInfoTitle>{Strings.HUMIDITY}</StyledInfoTitle>
              <StyledMediumInfo>{data?.current.humidity}%</StyledMediumInfo>
            </Row>
            <Row>
              <StyledInfoTitle>{Strings.WIND}</StyledInfoTitle>
              <StyledMediumInfo>{data?.current.wind_speed} km/h</StyledMediumInfo>
            </Row>
            <Row>
              <StyledInfoTitle>{Strings.CURRENTLY}</StyledInfoTitle>
              <StyledMediumInfo>{main}</StyledMediumInfo>
            </Row>
          </Col>
        </StyledRow>
        <StyledRow>
          <NextDays daily={daily} />
        </StyledRow>
      </StyledCard>
    </StyledCenteredContainer>
  )
}
