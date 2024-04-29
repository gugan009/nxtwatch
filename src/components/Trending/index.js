import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'
import FailureComponent from '../FailureComponent/index'
import LoaderComponent from '../LoaderComponent/index'
import TrendingVideoItem from '../TrendingVideoItem/index'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  LeftNavigationBarAndTrendingContainer,
  TrendingContainer,
  TrendingSuccess,
  TrendingH1,
  TrendingImgAndH1,
  TrendingVideosList,
  TrengingImg,
} from './StyledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const formattedVideos = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        publishedAt: each.published_at,
        viewCount: each.view_count,
        title: each.title,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
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
    this.getTrendingVideos()
  }

  renderSuccessView = isDarkTheme => {
    const {videos} = this.state
    return (
      <TrendingSuccess>
        <TrendingImgAndH1 isDarkTheme={isDarkTheme}>
          <TrengingImg isDarkTheme={isDarkTheme} as={HiFire} />
          <TrendingH1 isDarkTheme={isDarkTheme}>Trending</TrendingH1>
        </TrendingImgAndH1>
        <TrendingVideosList>
          {videos.map(each => (
            <TrendingVideoItem key={each.id} each={each} />
          ))}
        </TrendingVideosList>
      </TrendingSuccess>
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
        <LeftNavigationBarAndTrendingContainer>
          <LeftNavigationBar />
          <ThemeAndVideo.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <TrendingContainer
                  data-testid="trending"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderTrendingPage(isDarkTheme)}
                </TrendingContainer>
              )
            }}
          </ThemeAndVideo.Consumer>
        </LeftNavigationBarAndTrendingContainer>
      </div>
    )
  }
}

export default Trending
