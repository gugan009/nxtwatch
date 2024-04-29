import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginPage,
  LoginFormContainer,
  FormContainer,
  Logo,
  InputContainer,
  Label,
  Error,
  Input,
  Show,
  Checkbox,
  CheckBoxContainer,
  LoginButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../Context/ThemeAndVideo'

class Login extends Component {
  state = {
    showPassword: false,
    userInput: '',
    passwordInput: '',
    isError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({userInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, isError: true})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userInput, passwordInput} = this.state
    const userDetails = {
      username: userInput,
      password: passwordInput,
    }
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, option)

    if (response.ok) {
      const data = await response.json()
      this.onSubmitSuccess(data.jwt_token)
    } else {
      const data = await response.json()
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      showPassword,
      userInput,
      isError,
      errorMsg,
      passwordInput,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginPage isDarkTheme={isDarkTheme}>
              <LoginFormContainer isDarkTheme={isDarkTheme}>
                <Logo src={websiteLogo} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label isDarkTheme={isDarkTheme} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      isDarkTheme={isDarkTheme}
                      type="text"
                      id="username"
                      value={userInput}
                      onChange={this.onChangeUsername}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label isDarkTheme={isDarkTheme} htmlFor="password">
                      PASSWORD
                    </Label>
                    <Input
                      isDarkTheme={isDarkTheme}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={passwordInput}
                      onChange={this.onChangePassword}
                    />
                    <CheckBoxContainer>
                      <Checkbox
                        checked={showPassword}
                        type="checkbox"
                        id="showPassword"
                        onChange={this.onToggleShowPassword}
                      />
                      <Show isDarkTheme={isDarkTheme} htmlFor="showPassword">
                        Show Password
                      </Show>
                    </CheckBoxContainer>
                  </InputContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {isError && <Error>{`*${errorMsg}`}</Error>}
                </FormContainer>
              </LoginFormContainer>
            </LoginPage>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Login
