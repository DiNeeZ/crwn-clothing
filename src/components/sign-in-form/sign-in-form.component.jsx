import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'


import {
  SignInContainer,
  ButtonsContainer
} from './sign-in-form.styles'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()

    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email')
          break;

        case 'auth/user-not-found':
          alert('No user associated with this email')
          break;

        default:
          console.log(error)
          break;
      }
    }

  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with email  and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          value={email}
          type='email'
          name='email'
          onChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          value={password}
          type='password'
          name='password'
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button type='submit'>
            Sign in
          </Button>
          <Button
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm