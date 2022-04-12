import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

import {
  AuthenticationContainer,
  AuthenticationWrapper
} from './authentication.styles'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <AuthenticationWrapper>
        <SignInForm />
        <SignUpForm />
      </AuthenticationWrapper>
    </AuthenticationContainer>
  )
}

export default Authentication