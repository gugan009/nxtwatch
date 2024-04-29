import styled from 'styled-components'

export const SavedVideosli = styled.li`
  margin-bottom: 20px;
`

export const SavedVideoDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 572px) {
    flex-direction: row;
  }
`
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 220px;
  @media screen and (min-width: 572px) {
    min-width: 300px;
    max-width: 300px;
  }
  @media screen and (min-width: 1200px) {
    min-width: 400px;
    max-width: 400px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
`
export const ProfileImg = styled.img`
  width: 35px;
  margin-top: 10px;
  margin-right: 10px;
  @media screen and (min-width: 572px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const VideoViewsTimeName = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 572px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Info = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const Dot = styled.p`
  font-size: 10px;
  margin-left: 5px;
  margin-right: 5px;
  color: #64748b;
  @media screen and (min-width: 572px) {
    display: ${props => (props.show ? 'none' : null)};
  }
`

export const ViewsTime = styled.div`
  display: flex;
  align-items: center;
`
