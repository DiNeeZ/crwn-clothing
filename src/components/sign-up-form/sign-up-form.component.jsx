import { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'


import { SignUpContainer } from './sign-up-form.styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

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

    if (password !== confirmPassword) {
      alert('passwords do not match!')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)      
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
      
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert(`User with email ${email} is already exist`)
      }
      console.log('error creating a user', error.message)
    }

  }

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your emai and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          value={displayName}
          type='text'
          name='displayName'
          onChange={handleChange}
          required />

        <FormInput
          label='Email'
          value={email}
          type='email'
          name='email'
          onChange={handleChange}
          required />

        <FormInput
          label='Password'
          value={password}
          type='password'
          name='password'
          onChange={handleChange}
          required />

        <FormInput
          label='Confirm Password'
          value={confirmPassword}
          type='password'
          name='confirmPassword'
          onChange={handleChange}
          required />

        <Button type='submit'>SIGN UP</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm