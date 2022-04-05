import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg'
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      { buttonType === 'google' && <GoogleIcon className='google-icon' /> }
      {children}
    </button>
  )
}

export default Button