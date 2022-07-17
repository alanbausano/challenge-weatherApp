import { Card, Col, Row, Select } from 'antd'
import styled from 'styled-components'

const StyledCenteredContainer = styled.div`
  padding: ${props => props.theme.md}!important;
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  padding: ${props => props.theme.sm};
  width: 1300px;
  background-color: ${props => props.theme.cardBg};
  & .main {
    margin-top: ${props => props.theme.md} !important;
    margin-bottom: ${props => props.theme.md} !important;
  }
`

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.md};
`
const StyledInfo = styled.span`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.grayFonts};
  text-align: left;
`
const StyledInfoTitle = styled.span`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.grayFonts};
  margin-right: 2px;
`
const StyledLargeInfo = styled.h2`
  font-size: ${props => props.theme.lg};
`
const StyledMediumInfo = styled.span`
  font-size: ${props => props.theme.sm};
`
const StyledRow = styled(Row)`
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const StyledHeader = styled(Row)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.sm};
`
const StyledCenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
`
const StyledCenteredCardDaysCol = styled(Col)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.sm};
`

const StyledDayCard = styled(Card)`
  text-align: center;
  width: 230px;
  background-color: ${props => props.theme.cardBg};
  padding: ${props => props.theme.sm};
  height: 280px;
`

const StyledSelect = styled(Select)`
  padding: 2px;
  flex: 0.5;
  display: flex;
`

export {
  StyledCenteredContainer,
  StyledCard,
  StyledTitle,
  StyledInfo,
  StyledLargeInfo,
  StyledRow,
  StyledInfoTitle,
  StyledMediumInfo,
  StyledCenteredCol,
  StyledCenteredCardDaysCol,
  StyledDayCard,
  StyledHeader,
  StyledSelect,
}
