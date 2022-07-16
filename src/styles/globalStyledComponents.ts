import { Card, Row } from 'antd'
import styled from 'styled-components'

const StyledCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.md};
`

const StyledCard = styled(Card)`
  width: ${props => props.theme.xxl};
  border: solid brown 1px;
  height: ${props => props.theme.xxl};
  padding: ${props => props.theme.sm};
  background-color: ${props => props.theme.cardBg};
`

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.md};
`
const StyledInfo = styled.h2`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.grayFonts};
`
const StyledInfoTitle = styled.span`
  font-size: ${props => props.theme.sm};
  color: ${props => props.theme.grayFonts};
`
const StyledLargeInfo = styled.h2`
  font-size: ${props => props.theme.lg};
`
const StyledMediumInfo = styled.span`
  font-size: ${props => props.theme.sm};
`
const StyledRow = styled(Row)`
  width: 100%;
  border: solid 1px brown;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
}
