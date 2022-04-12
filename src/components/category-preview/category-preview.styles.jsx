import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const TitleContainer = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 25px;   
`

export const TitleLink = styled(Link)`
  margin: 0;
  padding: 0;
  font-size: 28px;
  cursor: pointer;

    &:hover ~ span {
      opacity: 1;
      transform: translateX(20px);
    }
`

export const ArrowRight = styled.span`
  position: relative;
  font-size: 24px;
  margin-left: -10px;
  opacity: 0;
  transition: opacity .3s ease-in-out, transform .3s ease-in-out;

  &::after {
    content: '\\2192';
  }
`

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`
