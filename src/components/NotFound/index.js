import ThemeAndVideo from '../../Context/ThemeAndVideo'
import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'

import {
  LeftNavigationBarAndNotFoundContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundPara,
  NotFoundHeading,
} from './StyledComponents'

const NotFound = () => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <div>
          <Header />
          <LeftNavigationBarAndNotFoundContainer>
            <LeftNavigationBar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImg alt="not found" src={imgUrl} />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </LeftNavigationBarAndNotFoundContainer>
        </div>
      )
    }}
  </ThemeAndVideo.Consumer>
)
export default NotFound
