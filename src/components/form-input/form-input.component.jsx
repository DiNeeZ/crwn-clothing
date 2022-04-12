import {
  FormInputLabel,
  Group,
  Input,

} from './form-inut.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className='form-input' {...otherProps} />
      <FormInputLabel shrink={otherProps.value.length} >
        {label}
      </FormInputLabel>
    </Group>
  )
}

export default FormInput