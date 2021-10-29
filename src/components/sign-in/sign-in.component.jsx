import React from 'react';
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target);
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // alert('A email was submitted: ' + this.state.email);

    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInAndSignUp;
