import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInContainer, SignInTitle, SignInButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='email' name='email' label='email' value={this.state.email} handleChange={this.handleChange} required />          
          <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} required />

          <SignInButtonsContainer>
            <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} value='Submit Form' isGoogleSignIn>Sign In With Google</CustomButton>
          </SignInButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn;