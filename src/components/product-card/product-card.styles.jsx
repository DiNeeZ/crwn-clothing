import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const ProductCountContainer = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductCount = styled.div`
  transform: scale(0);
  font-size: 140px;
  font-weight: 700;
  opacity: .7;
  color: #fff;
  text-shadow: 0px 2px 6px black;
  animation: increase-text .3s linear;

  @keyframes increase-text {
    from {
      transform: scale(1);
      opacity: 0;
    }
    to {
      transform: scale(0);
      opacity: .7;
    }
  }
`

export const CardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  &:first-child {
    width: 90%;
    margin-bottom: 15px;
  }

  &:last-child {
    width: 10%;
  }
`

