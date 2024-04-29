import styled from 'styled-components'

export const LeftNavigationBarAndTrendingContainer = styled.div`
  display: flex;
  width: 100vw;
`
export const TrendingContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
  height: 90vh;
  width: 100%;
  overflow-y: auto;
`
export const TrendingSuccess = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingImgAndH1 = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f1f1')}; ;
`

export const TrengingImg = styled.p`
  color: #ff0000;
  font-size: 30px;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
`

export const TrendingH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 572px) {
    padding: 20px;
  }
`
