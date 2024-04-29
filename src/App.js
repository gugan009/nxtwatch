import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'

import ProtectedRoute from './components/ProtectedRoute/index'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './Context/ThemeAndVideo'

class App extends Component {
  state = {
    isDarkTheme: false,
    likedVideos: [],
    disLikedVideos: [],
    savedVideos: [],
  }

  addOrRemoveSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(each => each.id === videoDetails.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, videoDetails]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  addToDislikedVideos = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (likedVideos.includes(id)) {
      this.setState(prevState => ({
        likedVideos: prevState.likedVideos.filter(each => each !== id),
      }))
    }
    if (disLikedVideos.includes(id)) {
      this.setState(prevState => ({
        disLikedVideos: prevState.disLikedVideos.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({
        disLikedVideos: [id, ...prevState.disLikedVideos],
      }))
    }
  }

  addToLikedVideos = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (disLikedVideos.includes(id)) {
      this.setState(prevState => ({
        disLikedVideos: prevState.disLikedVideos.filter(each => each !== id),
      }))
    }
    if (likedVideos.includes(id)) {
      this.setState(prevState => ({
        likedVideos: prevState.likedVideos.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({
        likedVideos: [id, ...prevState.likedVideos],
      }))
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme, likedVideos, disLikedVideos, savedVideos} = this.state

    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          savedVideos,
          likedVideos,
          disLikedVideos,
          addToLikedVideos: this.addToLikedVideos,
          addOrRemoveSavedVideos: this.addOrRemoveSavedVideos,
          addToDislikedVideos: this.addToDislikedVideos,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
