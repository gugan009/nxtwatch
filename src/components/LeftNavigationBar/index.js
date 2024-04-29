import {withRouter, Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  LeftNavContainer,
  NavLinksContainer,
  NavLinkContainer,
  NavLink,
  Navimg,
  Navtext,
  ContactUsContainer,
  ImgsList,
  ImgList,
  Contact,
  Img,
  ContactPara,
} from './StyledComponents'

import ThemeAndVideo from '../../Context/ThemeAndVideo'

const LeftNavigationBar = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {match} = props
      const {isDarkTheme} = value

      return (
        <LeftNavContainer isDarkTheme={isDarkTheme}>
          <NavLinksContainer>
            <NavLink selection={match.path === '/'} isDarkTheme={isDarkTheme}>
              <NavLinkContainer as={Link} to="/" selection={match.path === '/'}>
                <Navimg selection={match.path === '/'} as={AiFillHome} />
                <Navtext
                  isDarkTheme={isDarkTheme}
                  selection={match.path === '/'}
                >
                  Home
                </Navtext>
              </NavLinkContainer>
            </NavLink>
            <NavLink
              selection={match.path === '/trending'}
              isDarkTheme={isDarkTheme}
            >
              <NavLinkContainer
                as={Link}
                to="/trending"
                selection={match.path === '/'}
              >
                <Navimg selection={match.path === '/trending'} as={HiFire} />
                <Navtext
                  isDarkTheme={isDarkTheme}
                  selection={match.path === '/trending'}
                >
                  Trending
                </Navtext>
              </NavLinkContainer>
            </NavLink>
            <NavLink
              selection={match.path === '/gaming'}
              isDarkTheme={isDarkTheme}
            >
              <NavLinkContainer
                as={Link}
                to="/gaming"
                selection={match.path === '/'}
              >
                <Navimg
                  selection={match.path === '/gaming'}
                  as={SiYoutubegaming}
                />
                <Navtext
                  isDarkTheme={isDarkTheme}
                  selection={match.path === '/gaming'}
                >
                  Gaming
                </Navtext>
              </NavLinkContainer>
            </NavLink>
            <NavLink
              selection={match.path === '/saved-videos'}
              isDarkTheme={isDarkTheme}
            >
              <NavLinkContainer
                as={Link}
                to="/saved-videos"
                selection={match.path === '/'}
              >
                <Navimg
                  selection={match.path === '/saved-videos'}
                  as={MdPlaylistAdd}
                />
                <Navtext
                  isDarkTheme={isDarkTheme}
                  selection={match.path === '/saved-videos'}
                >
                  Saved Videos
                </Navtext>
              </NavLinkContainer>
            </NavLink>
          </NavLinksContainer>
          <ContactUsContainer>
            <Contact isDarkTheme={isDarkTheme}>CONTACT US</Contact>
            <ImgsList>
              <ImgList>
                <Img
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
              </ImgList>

              <ImgList>
                <Img
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
              </ImgList>

              <ImgList>
                <Img
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </ImgList>
            </ImgsList>
            <ContactPara isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </ContactUsContainer>
        </LeftNavContainer>
      )
    }}
  </ThemeAndVideo.Consumer>
)

export default withRouter(LeftNavigationBar)
