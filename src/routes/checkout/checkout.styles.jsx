import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  max-width: 70%;
  margin: 0 auto;

  button {
    width: 35px;
    height: 35px;
    background: none;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;

    &:hover {
      svg {
        fill: #a7a7a7;
      }
    }

    &:focus {
      border: 1px dashed #a7a7a7;
      border-radius: 3px;
    }

    &:active {
      svg {
        transform: translateY(2px);
      }
    }

    svg {
      width: 100%;
      height: 100%;
      font-size: 240px;
    }
  }
`

export const CheckoutTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  

  thead {
    box-shadow: 0 8px 6px -6px rgba(156, 156, 156, 0.5);
  }

  tr {
    &:not(:last-child) {
      box-shadow: 0 8px 6px -6px rgba(156, 156, 156, 0.3);
    }
  }

  th {
    font-size: 18px;
    font-weight: 600;
    padding: 20px 0;
    border-collapse: collapse;
  }

  td {
    padding: 10px 0;
    text-align: center;
  }
`

export const Total = styled.div`
  padding: 50px 20px;
  text-align: right;
  font-size: 24px;
`

export const ImageContainer = styled.td`
  width: 100px;

  img {
    width: 100%;
  }
`

export const Quantity = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: inline-block;
    width: 20px;
    margin: 0 5px;
  }
`



