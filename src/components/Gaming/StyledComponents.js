import styled from 'styled-components'

export const LeftNavigationBarAndGamingContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const GamingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
  height: 90vh;
  width: 100%;
  overflow-y: auto;
`
export const GamingSuccess = styled.div`
  display: flex;
  flex-direction: column;
`

export const GamingImgAndH1 = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f1f1')}; ;
`

export const GamingImg = styled.p`
  color: #ff0000;
  font-size: 30px;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
`

export const GamingH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const GamingVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`
