import 'antd/dist/antd.css'
import { StyledSelect } from '../../../styles/globalStyledComponents'

export const Select = () => {
  const options = [
    { value: 'lon', label: 'Londres' },
    { value: 'par', label: 'Paris' },
    { label: 'Tokyo', value: 'tok' },
  ]
  return (
    <StyledSelect
      maxTagCount="responsive"
      allowClear
      showSearch
      placeholder="Location"
      value={options.values}
      options={options}
    />
  )
}
