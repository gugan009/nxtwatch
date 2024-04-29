import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'
import SavedVideosItem from '../SavedVideosItem'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  LeftNavigationBarAndSavedVideosContainer,
  SavedVideosContainer,
  SavedVideosIn,
  SavedVideosImg,
  SavedVideosImgAndH1,
  SavedVideosH1,
  SavedVideosList,
  NoVideoContainer,
  NoVideoImg,
  NoVideoHeading,
  NoVideoPara,
} from './StyledComponents'

const SavedVideos = () => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      return (
        <div>
          <Header />
          <LeftNavigationBarAndSavedVideosContainer>
            <LeftNavigationBar />
            <SavedVideosContainer
              data-testid="savedVideos"
              isDarkTheme={isDarkTheme}
            >
              {savedVideos.length === 0 ? (
                <NoVideoContainer>
                  <NoVideoImg
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoVideoHeading isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </NoVideoHeading>
                  <NoVideoPara>
                    You can see your videos while watching them
                  </NoVideoPara>
                </NoVideoContainer>
              ) : (
                <SavedVideosIn>
                  <SavedVideosImgAndH1 isDarkTheme={isDarkTheme}>
                    <SavedVideosImg
                      isDarkTheme={isDarkTheme}
                      as={MdPlaylistAdd}
                    />
                    <SavedVideosH1 isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SavedVideosH1>
                  </SavedVideosImgAndH1>
                  <SavedVideosList>
                    {savedVideos.map(each => (
                      <SavedVideosItem key={each.id} each={each} />
                    ))}
                  </SavedVideosList>
                </SavedVideosIn>
              )}
            </SavedVideosContainer>
          </LeftNavigationBarAndSavedVideosContainer>
        </div>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default SavedVideos
