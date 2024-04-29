import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'

import {
  VideoList,
  Thumbnail,
  ListDiv,
  VideoDetailsContainer,
  ProfileImg,
  VideoTitle,
  VideoViewsTimeName,
  Info,
  Dot,
} from './StyledComponents'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

const HomeVideoItem = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {each} = props
      const {publishedAt, channel, id, viewCount, thumbnailUrl, title} = each
      const {name, profileImageUrl} = channel
      const {isDarkTheme} = value
      const timeline = formatDistanceToNow(new Date(publishedAt))

      return (
        <VideoList>
          <ListDiv as={Link} to={`/videos/${id}`}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViewsTimeName>
                  <Info>{name}</Info>
                  <Dot as={GoPrimitiveDot} />
                  <Info>{viewCount} views</Info>
                  <Dot as={GoPrimitiveDot} />
                  <Info>{timeline} ago</Info>
                </VideoViewsTimeName>
              </div>
            </VideoDetailsContainer>
          </ListDiv>
        </VideoList>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default HomeVideoItem
