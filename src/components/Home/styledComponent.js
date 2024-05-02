import styled from 'styled-components'

export const LeftNavigationBarAndHomeContainer = styled.div`
  display: flex;
  width: 100vw;
`
export const HomeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #181818' : '#f9f9f9')};
  height: 90vh;
  width: 100%;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 30vh;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const BannerCloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
`
export const BannerClose = styled.p`
  font-size: 19px;
`

export const Logo = styled.img`
  width: 70px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 100px;
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 13px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`
export const BannerButton = styled.button`
  height: 30px;
  margin-top: 10px;
  border: 1px solid #1e293b;
  color: #1e293b;
  font-size: 14px;
  font-weight: 600;
  width: 100px;
  background-color: transparent;
`
export const HomeContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 572px) {
    padding: 20px;
  }
`
export const SearchBoxContainer = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${props => (props.isDarkTheme ? '#606060' : ' #7e858e')};
  height: 30px;
  max-width: 400px;
`
export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 85%;
  height: 100%;
  font-size: 15px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const SearchButton = styled.button`
  width: 15%;
  height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#f1f5f9')};
  border: none;
  border-left: 2px solid ${props => (props.isDarkTheme ? '#606060' : '#cccccc')};
`

export const SearchIcon = styled.p`
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#383838')};
`
export const NoVideosContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoVideoImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NoVideoH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const Retry = styled.button`
  height: 30px;
  width: 80px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  background-color: #4f46e5;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 572px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
