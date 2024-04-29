import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: true,
  changeTheme: () => {},
  savedVideos: [],
  likedVideos: [],
  disLikedVideos: [],
  addOrRemoveSavedVideos: () => {},
  addToLikedVideos: () => {},
  addToDislikedVideos: () => {},
})

export default ThemeAndVideoContext
