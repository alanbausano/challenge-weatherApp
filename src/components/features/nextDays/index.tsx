import {
  StyledCenteredCardDaysCol,
  StyledDayCard,
  StyledInfo,
  StyledInfoTitle,
  StyledMediumInfo,
  StyledRow,
} from '../../../styles/globalStyledComponents'
import { Daily } from '../../../types/types'

interface NextDaysProps {
  daily: Daily | undefined
}
export const NextDays = ({ daily }: NextDaysProps) => {
  const fiveNextDays = daily?.slice(1, 6)

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {fiveNextDays?.map(d => (
        <StyledDayCard>
          <StyledRow>
            <StyledCenteredCardDaysCol>
              <StyledMediumInfo>
                {new Date(d.dt * 1000).toLocaleString('en-US', { weekday: 'long' })}
              </StyledMediumInfo>
              <StyledInfoTitle>{d.weather.map(w => w.description)}</StyledInfoTitle>
              <img
                src={`http://openweathermap.org/img/wn/${d.weather.map(w => w.icon)}.png`}
                alt="icon"
                width="60px"
              />
            </StyledCenteredCardDaysCol>
          </StyledRow>
          <StyledRow>
            <StyledInfo>Min:</StyledInfo>
            <StyledMediumInfo>{Math.round(d.temp.min)}°C</StyledMediumInfo>
            <StyledInfo>- Max:</StyledInfo>
            <StyledMediumInfo>{Math.round(d.temp.max)}°C</StyledMediumInfo>
          </StyledRow>
        </StyledDayCard>
      ))}
    </>
  )
}
