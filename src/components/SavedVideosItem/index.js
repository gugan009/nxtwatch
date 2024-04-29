import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {GoPrimitiveDot} from 'react-icons/go'
import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  SavedVideosli,
  VideoDetails,
  SavedVideoDiv,
  ThumbnailImg,
  ProfileImg,
  VideoTitle,
  VideoViewsTimeName,
  Info,
  Dot,
  ViewsTime,
} from './StyledComponents'

const SavedVideosItem = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {each} = props
      const {publishedAt, channel, viewCount, thumbnailUrl, id, title} = each
      const {name} = channel
      const {isDarkTheme} = value
      const timeline = formatDistanceToNow(new Date(publishedAt))
      const show = true
      return (
        <SavedVideosli>
          <SavedVideoDiv as={Link} to={`/videos/${id}`}>
            <ThumbnailImg alt="video thumbnail" src={thumbnailUrl} />
            <VideoDetails>
              <ProfileImg alt="channel logo" src={channel.profile_image_url} />
              <div>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViewsTimeName>
                  <Info>{name}</Info>
                  <ViewsTime>
                    <Dot show={show} as={GoPrimitiveDot} />
                    <Info>{viewCount} views</Info>
                    <Dot as={GoPrimitiveDot} />
                    <Info>{timeline} ago</Info>
                  </ViewsTime>
                </VideoViewsTimeName>
              </div>
            </VideoDetails>
          </SavedVideoDiv>
        </SavedVideosli>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default SavedVideosItem
