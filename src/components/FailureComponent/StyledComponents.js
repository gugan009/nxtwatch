import styled from 'styled-components'

export const FailureContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImg = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Retry = styled.button`
  height: 30px;
  width: 80px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  background-color: #4f46e5;
  border: none;
  cursor: pointer;
  border-radius: 2px;
`
