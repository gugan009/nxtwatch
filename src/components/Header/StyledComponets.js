import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  height: 10vh;
  padding: 5px 20px 5px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
`

export const Logo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
`
export const ListItems = styled.li`
  margin-right: 5px;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ThemeImg = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-right: 10px;
  }
`
export const HamBurgerButton = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HamBurger = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Logout = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen (min-width: 768px) {
    font-size: 21px;
  }
`
export const PopupContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#101010' : '#ffffff')};
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  justify-content: space-between;
`
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
`
export const Close = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen (min-width: 768px) {
    font-size: 21px;
  }
`

export const PoppingListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const PopingList = styled.li`
  width: 100%;
  padding-left: 10px;
  background-color: ${props =>
    props.selection && props.isDarkTheme ? ' #383838' : null};

  background-color: ${props =>
    props.selection && props.isDarkTheme === false ? '#e2e8f0' : null};
`

export const NavigationItemContainer = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const PopingIcon = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  color: ${props => (props.selection ? 'red' : null)};
`

export const NavigationName = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: ${props => (props.selection ? '700' : '500')};
  margin-left: 10px;
`
export const ContactUsContainer = styled.div`
  padding-left: 10px;
`

export const Contact = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
`

export const CloseNavList = styled.div`
  display: flex;
  flex-direction: column;
`
export const ImgsList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`
export const ImgList = styled.li`
  margin-right: 15px;
`

export const Img = styled.img`
  width: 30px;
`
export const ContactPara = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
`
export const Profile = styled.img`
  width: 25px;
  margin-right: 10px;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const LogoutButtonBig = styled.button`
  display: none;
  height: 25px;
  width: 70px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border: 2px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#606060' : '#f1f5f9')};
  padding: 15px;
  border-radius: 10px;
  width: 350px;
`
export const LogoutPara = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 30px;
`

export const Cancel = styled.button`
  height: 35px;
  width: 80px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 20px;
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#0f0f0f')};
  border: 1px solid ${props => (props.isDarkTheme ? '#e2e8f0' : '#0f0f0f')};
`

export const Confirm = styled.button`
  height: 35px;
  width: 80px;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  border-radius: 2px;
  color: #ffffff;
  border: none;
`
