import styled from 'styled-components'

export const LoginPage = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f1f1f1')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
`
export const LoginFormContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 25px 15px 25px 15px;
  border: none;
  border-radius: 7px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  align-self: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  width: 100%;
`
export const Label = styled.label`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const Input = styled.input`
  border: 2px solid #94a3b8;
  width: 100%;
  height: 30px;
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  border-radius: 4px;
  padding-left: 20px;
  outline: none;
  cursor: pointer;
  max-width: 350px;
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const Show = styled.label`
  color: ${props => (props.isDarkTheme ? '#f1f1f1' : '#181818')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Checkbox = styled.input`
  border: 3px solid #64748b;
  height: 17px;
  width: 17px;
  margin-right: 5px;
`
export const LoginButton = styled.button`
  border: none;
  background-color: #00306e;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  max-width: 350px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  margin-top: 3px;
  color: #ff0000;
`
