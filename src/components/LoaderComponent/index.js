import Loader from 'react-loader-spinner'
import ThemeAndVideo from '../../Context/ThemeAndVideo'
import './index.css'

const LoaderComponent = () => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? '#ffffff' : '#000000'}
            height="50"
            width="50"
          />
        </div>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default LoaderComponent
