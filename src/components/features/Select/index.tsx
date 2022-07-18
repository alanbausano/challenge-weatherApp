import 'antd/dist/antd.min.css'
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select'

import { StyledSelect } from '../../../styles/globalStyledComponents'

interface SelectProps {
  handleOnChange: (
    value: unknown,
    option: DefaultOptionType | BaseOptionType | (DefaultOptionType | BaseOptionType)[],
  ) => void
}
export const Select = ({ handleOnChange }: SelectProps) => {
  const options = [
    { value: 'ber', label: 'Berlin' },
    { value: 'tok', label: 'Tokyo' },
    { value: 'mos', label: 'Moscow' },
    { value: 'san', label: 'Los Angeles' },
    { value: 'sao', label: 'Sao Paulo' },
    { value: 'current', label: 'My current location' },
  ]
  return (
    <StyledSelect
      maxTagCount="responsive"
      onChange={handleOnChange}
      allowClear
      showSearch
      placeholder="Location"
      options={options}
    />
  )
}
