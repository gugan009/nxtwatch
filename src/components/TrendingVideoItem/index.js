import {Link} from 'react-router-dom'
// import {formatDistanceToNow} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'

import ThemeAndVideo from '../../Context/ThemeAndVideo'
import {
  Trengingli,
  VideoDetails,
  TrendingDiv,
  ThumbnailImg,
  ProfileImg,
  VideoTitle,
  VideoViewsTimeName,
  Info,
  Dot,
  ViewsTime,
} from './StyledComponents'

const TrendingVideoItem = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {each} = props
      const {publishedAt, channel, viewCount, thumbnailUrl, id, title} = each
      const {name, profileImageUrl} = channel
      const {isDarkTheme} = value
      // const timeline = formatDistanceToNow(new Date(publishedAt))
      const show = true
      return (
        <Trengingli>
          <TrendingDiv as={Link} to={`/videos/${id}`}>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetails>
              <ProfileImg alt="channel logo" src={profileImageUrl} />
              <div>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViewsTimeName>
                  <Info>{name}</Info>
                  <ViewsTime>
                    <Dot
                      show={show}
                      as={GoPrimitiveDot}
                      isDarkTheme={isDarkTheme}
                    />
                    <Info>{viewCount} views</Info>
                    <Dot as={GoPrimitiveDot} />
                    <Info>{publishedAt}</Info>
                  </ViewsTime>
                </VideoViewsTimeName>
              </div>
            </VideoDetails>
          </TrendingDiv>
        </Trengingli>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default TrendingVideoItem
