import styled from 'styled-components'

export const VideoList = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: 572px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`

export const ListDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
`

export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  width: 35px;
  margin-top: 10px;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const VideoViewsTimeName = styled.div`
  display: flex;
  align-items: center;
`
export const Info = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #64748b;
`
export const Dot = styled.p`
  font-size: 10px;
  margin-left: 5px;
  margin-right: 5px;
  color: #64748b;
`
