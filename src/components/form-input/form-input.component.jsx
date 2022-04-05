import './form-inut.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  const isValue = otherProps.value.length
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label className={`${isValue ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput