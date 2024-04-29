import {Component} from 'react'
import Cookies from 'js-cookie'

import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'
import FailureComponent from '../FailureComponent/index'
import LoaderComponent from '../LoaderComponent/index'
import HomeVideoItem from '../HomeVideoItem'

import {
  LeftNavigationBarAndHomeContainer,
  HomeContainer,
  BannerContainer,
  Logo,
  BannerText,
  BannerButton,
  BannerCloseButton,
  BannerClose,
  HomeContent,
  SearchBoxContainer,
  SearchInput,
  SearchButton,
  NoVideosContainer,
  SearchIcon,
  VideosContainer,
  NoVideoImg,
  NoVideoH1,
  NovideoPara,
  Retry,
  VideosList,
} from './styledComponent'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    search: '',
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchBtn = async () => {
    const {searchInput} = this.state
    await this.setState({search: searchInput})
    this.getHomeVideos()
  }

  onClickBannerCloseBtn = () => {
    this.setState({showBanner: false})
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  renderSuccessView = () => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videos} = this.state
        if (videos.length === 0) {
          return (
            <NoVideosContainer>
              <NoVideoImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideoH1 isDarkTheme={isDarkTheme}>
                No Search results found
              </NoVideoH1>
              <NovideoPara isDarkTheme={isDarkTheme}>
                Try different key words or remove search filter
              </NovideoPara>
              <Retry type="button" onClick={this.onClickRetry}>
                Retry
              </Retry>
            </NoVideosContainer>
          )
        }
        return (
          <VideosContainer>
            <VideosList>
              {videos.map(each => (
                <HomeVideoItem key={each.id} each={each} />
              ))}
            </VideosList>
          </VideosContainer>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  renderFailureView = () => (
    <FailureComponent onClickRetry={this.onClickRetry} />
  )

  renderLoaderView = () => <LoaderComponent />

  renderHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
      <div data-testid="home">
        <Header />
        <LeftNavigationBarAndHomeContainer>
          <LeftNavigationBar />
          <ThemeAndVideo.Consumer>
            {value => {
              const {isDarkTheme} = value
              const {showBanner, searchInput} = this.state
              return (
                <HomeContainer isDarkTheme={isDarkTheme}>
                  {showBanner && (
                    <BannerContainer data-testid="banner">
                      {' '}
                      <BannerCloseButton
                        data-testid="close"
                        type="button"
                        onClick={this.onClickBannerCloseBtn}
                      >
                        <BannerClose as={GrFormClose} />
                      </BannerCloseButton>
                      <Logo
                        alt="nxt watch logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <HomeContent>
                    <SearchBoxContainer isDarkTheme={isDarkTheme}>
                      <SearchInput
                        onChange={this.onChangeSearchInput}
                        isDarkTheme={isDarkTheme}
                        value={searchInput}
                        type="search"
                      />
                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onClickSearchBtn}
                        type="button"
                        isDarkTheme={isDarkTheme}
                      >
                        <SearchIcon isDarkTheme={isDarkTheme} as={BsSearch} />
                      </SearchButton>
                    </SearchBoxContainer>
                    {this.renderHomePage()}
                  </HomeContent>
                </HomeContainer>
              )
            }}
          </ThemeAndVideo.Consumer>
        </LeftNavigationBarAndHomeContainer>
      </div>
    )
  }
}

export default Home
