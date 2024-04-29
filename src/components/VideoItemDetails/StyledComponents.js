import styled from 'styled-components'

export const LeftNavigationBarAndVideoDetailsContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? ' #0f0f0f' : '#f9f9f9')};
  height: 90vh;
  width: 100%;
  overflow-y: auto;
`
export const SuccessView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const EachVideoThumbnailImage = styled.div`
  width: 100%;
  padding-top: 20px;
`
export const VideoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const ViewsTimeLike = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ViewsTime = styled.div`
  display: flex;
  align-items: center;
`
export const Info = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Dot = styled.p`
  font-size: 10px;
  margin-left: 7px;
  margin-right: 7px;
  color: #64748b;
`

export const LikeDisLikeSave = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  margin-right: 20px;
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const LDS = styled.p`
  font-size: 25px;
  margin-right: 5px;
`
export const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: #475569;
  width: 100%;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileImg = styled.img`
  width: 50px;
  margin-right: 20px;
`
export const Name = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
