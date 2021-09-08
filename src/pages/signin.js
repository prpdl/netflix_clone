import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import * as ROUTES from '../constants/router'

function Signin() {
 
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((userCredential) => {
          useHistory().push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setError(error.message)
        setEmailAddress('');
        setPassword('');
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input placeholder="Email address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
            <Form.Input type="password" autoComplete="off" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Form.Submit disabled={isInvalid} type="submit">Sign in</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix <Form.Link to={ROUTES.SIGN_UP}>Sign up Now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This Page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noreferrer">Learn more</a>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />

    </>
  )
}

export default Signin