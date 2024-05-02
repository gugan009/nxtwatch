import {Component} from 'react'
import Cookies from 'js-cookie'

import ReactPlayer from 'react-player'

import {GoPrimitiveDot} from 'react-icons/go'
// import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import LeftNavigationBar from '../LeftNavigationBar'
import FailureComponent from '../FailureComponent/index'
import LoaderComponent from '../LoaderComponent/index'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

import {
  LeftNavigationBarAndVideoDetailsContainer,
  VideoDetailsContainer,
  LikeDisLikeSave,
  ViewsTime,
  SuccessView,
  EachVideoThumbnailImage,
  ViewsTimeLike,
  VideoTitle,
  Name,
  Info,
  Dot,
  Button,
  LDS,
  Line,
  ProfileImg,
  ChannelContainer,
  Description,
} from './StyledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const fData = {
        videoDetails: data.video_details,
      }
      const {videoDetails} = fData

      const fVideoDetails = {
        channel: videoDetails.channel,
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        videoDetails: fVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  renderSuccessView = isDarkTheme => (
    <ThemeAndVideo.Consumer>
      {value => {
        const {
          addToDislikedVideos,
          addToLikedVideos,
          addOrRemoveSavedVideos,
          likedVideos,
          disLikedVideos,
          savedVideos,
        } = value
        const {videoDetails} = this.state
        const {
          viewCount,
          videoUrl,
          title,
          publishedAt,
          description,
          id,
          channel,
        } = videoDetails
        //  const time = formatDistanceToNow(new Date(publishedAt))

        const onClickLike = () => {
          addToLikedVideos(id)
        }

        const onClickDislike = () => {
          addToDislikedVideos(id)
        }

        const clickSaveBtn = () => {
          addOrRemoveSavedVideos(videoDetails)
        }

        const isLiked = likedVideos.includes(id)
        const isDisliked = disLikedVideos.includes(id)
        const isSaved = savedVideos.some(each => each.id === id)
        return (
          <SuccessView>
            <EachVideoThumbnailImage
              as={ReactPlayer}
              width="100%"
              height="70vh"
              url={videoUrl}
              controls
            />
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <ViewsTimeLike>
              <ViewsTime>
                <Info>{viewCount} views</Info>
                <Dot as={GoPrimitiveDot} isDarkTheme={isDarkTheme} />
                <Info>{publishedAt}</Info>
              </ViewsTime>
              <LikeDisLikeSave>
                <Button active={isLiked} type="button" onClick={onClickLike}>
                  <LDS as={BiLike} />
                  Like
                </Button>
                <Button
                  type="button"
                  active={isDisliked}
                  onClick={onClickDislike}
                >
                  <LDS as={BiDislike} />
                  Dislike
                </Button>
                <Button type="button" active={isSaved} onClick={clickSaveBtn}>
                  <LDS as={BiListPlus} />
                  {isSaved ? 'saved' : 'save'}
                </Button>
              </LikeDisLikeSave>
            </ViewsTimeLike>
            <Line />
            <ChannelContainer>
              <ProfileImg alt="channel logo" src={channel.profile_image_url} />
              <div>
                <Name isDarkTheme={isDarkTheme}>{channel.name}</Name>
                <Info>{channel.subscriber_count} subscribers</Info>
              </div>
            </ChannelContainer>
            <Description isDarkTheme={isDarkTheme}>{description}</Description>
          </SuccessView>
        )
      }}
    </ThemeAndVideo.Consumer>
  )

  renderFailureView = () => (
    <FailureComponent onClickRetry={this.onClickRetry} />
  )

  renderLoaderView = () => <LoaderComponent />

  renderVideoItemDetailsPage = isDarkTheme => {
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
        <LeftNavigationBarAndVideoDetailsContainer>
          <LeftNavigationBar />
          <ThemeAndVideo.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <VideoDetailsContainer
                  data-testid="videoItemDetails"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderVideoItemDetailsPage(isDarkTheme)}
                </VideoDetailsContainer>
              )
            }}
          </ThemeAndVideo.Consumer>
        </LeftNavigationBarAndVideoDetailsContainer>
      </div>
    )
  }
}

export default VideoItemDetails
