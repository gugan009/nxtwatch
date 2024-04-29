import {Link} from 'react-router-dom'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  GamingListLi,
  GamingListDiv,
  GamingImg,
  GamingName,
  GamingText,
} from './StyledComponents'

const GamingVideoItem = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {each} = props

      const {title, id, thumbnailUrl, viewCount} = each
      console.log(title, thumbnailUrl, viewCount)
      return (
        <GamingListLi>
          <GamingListDiv as={Link} to={`/videos/${id}`}>
            <GamingImg alt="video thumbnail" src={thumbnailUrl} />
            <GamingName isDarkTheme={isDarkTheme}>{title}</GamingName>
            <GamingText isDarkTheme={isDarkTheme}>
              {viewCount} Watching
            </GamingText>
            <GamingText isDarkTheme={isDarkTheme}>Worldwide</GamingText>
          </GamingListDiv>
        </GamingListLi>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default GamingVideoItem
