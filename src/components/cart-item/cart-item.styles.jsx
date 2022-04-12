import styled from 'styled-components'

export const CartItemContainer = styled.li`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`
export const CartItemImage = styled.img`
  width: 30%;
  object-fit: cover;
`
export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 20px;
`

export const CartItemName = styled.span`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
`
export const CartItemPrice = styled.span``
