import GoogleIcon  from '../../assets/google-icon.svg'
import styled from 'styled-components'

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  position: relative;
  padding-left: 50px;
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${GoogleIcon});
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  } 
`
