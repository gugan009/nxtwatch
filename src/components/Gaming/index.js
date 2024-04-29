import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'
import FailureComponent from '../FailureComponent/index'
import LoaderComponent from '../LoaderComponent/index'
import GamingVideoItem from '../GamingVideoItem/index'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  LeftNavigationBarAndGamingContainer,
  GamingContainer,
  GamingSuccess,
  GamingH1,
  GamingImgAndH1,
  GamingVideosList,
  GamingImg,
} from './StyledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(url, option)

    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const formattedVideos = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({
        videos: formattedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderSuccessView = isDarkTheme => {
    const {videos} = this.state
    return (
      <GamingSuccess>
        <GamingImgAndH1 isDarkTheme={isDarkTheme}>
          <GamingImg isDarkTheme={isDarkTheme} as={SiYoutubegaming} />
          <GamingH1 isDarkTheme={isDarkTheme}>Gaming</GamingH1>
        </GamingImgAndH1>

        <GamingVideosList>
          {videos.map(each => (
            <GamingVideoItem key={each.id} each={each} />
          ))}
        </GamingVideosList>
      </GamingSuccess>
    )
  }

  renderFailureView = () => (
    <FailureComponent onClickRetry={this.onClickRetry} />
  )

  renderLoaderView = () => <LoaderComponent />

  renderTrendingPage = isDarkTheme => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <LeftNavigationBarAndGamingContainer>
          <LeftNavigationBar />
          <ThemeAndVideo.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <GamingContainer data-testid="gaming" isDarkTheme={isDarkTheme}>
                  {this.renderTrendingPage(isDarkTheme)}
                </GamingContainer>
              )
            }}
          </ThemeAndVideo.Consumer>
        </LeftNavigationBarAndGamingContainer>
      </div>
    )
  }
}

export default Gaming
