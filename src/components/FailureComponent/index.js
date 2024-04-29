import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  Retry,
} from './StyledComponents'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

const FailureComponent = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {onClickRetry} = props
      const {isDarkTheme} = value
      const failImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <FailureContainer>
          <FailureImg src={failImg} alt="failure view" />
          <FailureHeading isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailurePara isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again.
          </FailurePara>
          <Retry type="button" onClick={onClickRetry}>
            Retry
          </Retry>
        </FailureContainer>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default FailureComponent
