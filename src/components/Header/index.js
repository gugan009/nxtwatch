import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavContainer,
  ListContainer,
  ThemeImg,
  ThemeButton,
  ListItems,
  Logo,
  HamBurgerButton,
  LogoutButton,
  Logout,
  LogoutButtonBig,
  HamBurger,
  PopupContainer,
  CloseBtn,
  PoppingListContainer,
  Close,
  PopingList,
  NavigationItemContainer,
  PopingIcon,
  NavigationName,
  CloseNavList,
  ContactUsContainer,
  ButtonsContainer,
  Contact,
  ImgsList,
  ImgList,
  Img,
  ContactPara,
  LogoutContainer,
  Profile,
  LogoutPara,
  Cancel,
  Confirm,
} from './StyledComponets'

import ThemeAndVideoContext from '../../Context/ThemeAndVideo'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {match} = props

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const {isDarkTheme, changeTheme} = value

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <NavContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>
          <ListContainer>
            <ListItems>
              <ThemeButton
                data-testid="theme"
                onClick={changeTheme}
                type="button"
              >
                <ThemeImg
                  isDarkTheme={isDarkTheme}
                  as={isDarkTheme ? FiSun : FaMoon}
                />
              </ThemeButton>
            </ListItems>

            <ListItems>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <HamBurgerButton type="button">
                    <HamBurger isDarkTheme={isDarkTheme} as={GiHamburgerMenu} />
                  </HamBurgerButton>
                }
              >
                {close => (
                  <PopupContainer isDarkTheme={isDarkTheme}>
                    <CloseNavList>
                      <CloseBtn onClick={() => close()} type="button">
                        <Close as={IoMdClose} isDarkTheme={isDarkTheme} />
                      </CloseBtn>

                      <PoppingListContainer>
                        <PopingList
                          isDarkTheme={isDarkTheme}
                          selection={match.path === '/'}
                        >
                          <NavigationItemContainer
                            as={Link}
                            to="/"
                            onClick={() => close()}
                          >
                            <PopingIcon
                              selection={match.path === '/'}
                              as={AiFillHome}
                              isDarkTheme={isDarkTheme}
                            />
                            <NavigationName
                              selection={match.path === '/'}
                              isDarkTheme={isDarkTheme}
                            >
                              Home
                            </NavigationName>
                          </NavigationItemContainer>
                        </PopingList>
                        <PopingList
                          isDarkTheme={isDarkTheme}
                          selection={match.path === '/trending'}
                        >
                          <NavigationItemContainer
                            as={Link}
                            to="/trending"
                            onClick={() => close()}
                          >
                            <PopingIcon
                              selection={match.path === '/trending'}
                              as={HiFire}
                              isDarkTheme={isDarkTheme}
                            />
                            <NavigationName
                              selection={match.path === '/trending'}
                              isDarkTheme={isDarkTheme}
                            >
                              Trending
                            </NavigationName>
                          </NavigationItemContainer>
                        </PopingList>
                        <PopingList
                          isDarkTheme={isDarkTheme}
                          selection={match.path === '/gaming'}
                        >
                          <NavigationItemContainer
                            as={Link}
                            to="/gaming"
                            onClick={() => close()}
                          >
                            <PopingIcon
                              selection={match.path === '/gaming'}
                              as={SiYoutubegaming}
                              isDarkTheme={isDarkTheme}
                            />
                            <NavigationName
                              selection={match.path === '/gaming'}
                              isDarkTheme={isDarkTheme}
                            >
                              Gaming
                            </NavigationName>
                          </NavigationItemContainer>
                        </PopingList>
                        <PopingList
                          isDarkTheme={isDarkTheme}
                          selection={match.path === '/saved-videos'}
                        >
                          <NavigationItemContainer
                            as={Link}
                            to="/saved-videos"
                            onClick={() => close()}
                          >
                            <PopingIcon
                              selection={match.path === '/saved-videos'}
                              as={MdPlaylistAdd}
                              isDarkTheme={isDarkTheme}
                            />
                            <NavigationName
                              selection={match.path === '/saved-videos'}
                              isDarkTheme={isDarkTheme}
                            >
                              Saved videos
                            </NavigationName>
                          </NavigationItemContainer>
                        </PopingList>
                      </PoppingListContainer>
                    </CloseNavList>
                    <ContactUsContainer>
                      <Contact isDarkTheme={isDarkTheme}>CONTACT US</Contact>
                      <ImgsList>
                        <ImgList>
                          <Img
                            alt=""
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                          />
                        </ImgList>

                        <ImgList>
                          <Img
                            alt=""
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                          />
                        </ImgList>

                        <ImgList>
                          <Img
                            alt=""
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                          />
                        </ImgList>
                      </ImgsList>
                      <ContactPara isDarkTheme={isDarkTheme}>
                        Enjoy! Now to see your channels and recommendations
                      </ContactPara>
                    </ContactUsContainer>
                  </PopupContainer>
                )}
              </Popup>
            </ListItems>
            <ListItems>
              <Popup
                modal
                trigger={
                  <LogoutButtonBig type="button" isDarkTheme={isDarkTheme}>
                    Logout
                  </LogoutButtonBig>
                }
              >
                {close => (
                  <LogoutContainer isDarkTheme={isDarkTheme}>
                    <LogoutPara isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout
                    </LogoutPara>
                    <ButtonsContainer>
                      <Cancel
                        type="button"
                        onClick={() => close()}
                        isDarkTheme={isDarkTheme}
                      >
                        Cancel
                      </Cancel>
                      <Confirm type="button" onClick={onClickLogout}>
                        Confirm
                      </Confirm>
                    </ButtonsContainer>
                  </LogoutContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <LogoutButton type="button">
                    <Logout as={FiLogOut} isDarkTheme={isDarkTheme} />
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutContainer isDarkTheme={isDarkTheme}>
                    <LogoutPara isDarkTheme={isDarkTheme}>
                      Are you sure, you want to logout
                    </LogoutPara>
                    <ButtonsContainer>
                      <Cancel
                        type="button"
                        onClick={() => close()}
                        isDarkTheme={isDarkTheme}
                      >
                        Cancel
                      </Cancel>
                      <Confirm type="button" onClick={onClickLogout}>
                        Confirm
                      </Confirm>
                    </ButtonsContainer>
                  </LogoutContainer>
                )}
              </Popup>
            </ListItems>
          </ListContainer>
        </NavContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
