import styled from 'styled-components'

export const GamingListLi = styled.li`
  margin-left: 20px;
  margin-bottom: 20px;
`

export const GamingListDiv = styled.div`
  cursor: pointer;
  text-decoration: none;
`

export const GamingImg = styled.img`
  width: 200px;
`

export const GamingName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const GamingText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#424242')};
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
