import styled from 'styled-components'

export const LeftNavContainer = styled.div`
  display: none;
  width: 210px;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const NavLink = styled.li`
  padding-left: 10px;
  background-color: ${props =>
    props.selection && props.isDarkTheme ? ' #383838' : null};

  background-color: ${props =>
    props.selection && props.isDarkTheme === false ? '#e2e8f0' : null};
`

export const NavLinkContainer = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
`
export const Navimg = styled.p`
  color: ${props => (props.selection ? '#ff0000' : '#909090')};
  font-size: 20px;
  margin-right: 15px;
`

export const Navtext = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  font-weight: ${props => (props.selection ? '600' : '400')};
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
  font-weight: 400;
`
export const ContactUsContainer = styled.div`
  padding-left: 10px;
`

export const Contact = styled.p`
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 400;
`

export const ImgsList = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`
