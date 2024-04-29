import styled from 'styled-components'

export const LeftNavigationBarAndNotFoundContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
  height: 90vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`

export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
