import { Col, Row, Spin } from 'antd'
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select'
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
import {
  BERLIN_GEOLOCATION,
  SAOPAULO_GEOLOCATION,
  SF_GEOLOCATION,
  MOSCOW_GEOLOCATION,
  TOKYO_GEOLOCATION,
} from '../geolocations'
import { NextDays } from '../nextDays'
import { Select } from '../Select'

export const WeatherLocation = () => {
  const [latitude, setLatitude] = useState<number | undefined>()
  const [longitude, setLongitude] = useState<number | undefined>()
  const [title, setTitle] = useState<string>()
  const [currentLat, setCurrentLat] = useState<number>()
  const [currentLon, setCurrentLon] = useState<number>()

  const { data, main, description, icon, daily, isLoading } = useWeathers({
    lat: latitude,
    lon: longitude,
  })

  const successGeoLocation = (position: GeolocationPosition) => {
    setTitle(Strings.CURRENT_LOCATION)
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)
    setCurrentLat(position.coords.latitude)
    setCurrentLon(position.coords.longitude)
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(successGeoLocation, err => {
      setTitle(Strings.LOCATION)
      setLatitude(BERLIN_GEOLOCATION.lat)
      setLongitude(BERLIN_GEOLOCATION.lon)
    })
  }

  useEffect(() => {
    getCurrentLocation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const timezone = data?.timezone.replaceAll('_', ' ')
  const fullTimezone = timezone?.replaceAll('/', ' ')
  const handleSelection = (
    value: unknown,
    option: DefaultOptionType | BaseOptionType | (DefaultOptionType | BaseOptionType)[],
  ) => {
    setTitle(Strings.LOCATION)
    if (value === 'mos') {
      setLatitude(MOSCOW_GEOLOCATION.lat)
      setLongitude(MOSCOW_GEOLOCATION.lon)
    }
    if (value === 'ber') {
      setLatitude(BERLIN_GEOLOCATION.lat)
      setLongitude(BERLIN_GEOLOCATION.lon)
    }
    if (value === 'tok') {
      setLatitude(TOKYO_GEOLOCATION.lat)
      setLongitude(TOKYO_GEOLOCATION.lon)
    }
    if (value === 'sao') {
      setLatitude(SAOPAULO_GEOLOCATION.lat)
      setLongitude(SAOPAULO_GEOLOCATION.lon)
    }
    if (value === 'san') {
      setLatitude(SF_GEOLOCATION.lat)
      setLongitude(SF_GEOLOCATION.lon)
    }
    if (value === 'current') {
      setTitle(Strings.CURRENT_LOCATION)
      setLatitude(currentLat)
      setLongitude(currentLon)
    }
  }
  return (
    <Spin spinning={isLoading}>
      <StyledCenteredContainer>
        <StyledCard>
          <StyledHeader>
            <StyledCenteredCol>
              <StyledInfo>{title}</StyledInfo>
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
              <Select handleOnChange={handleSelection} />
            </StyledCenteredCol>
          </StyledHeader>
          <StyledRow className="main">
            <StyledCenteredCol>
              {icon !== undefined && (
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="icon" />
              )}
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
    </Spin>
  )
}
