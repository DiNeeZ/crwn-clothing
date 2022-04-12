import {
  Body,
  BackgroundImage,
  DirectoryItemContainer
} from './directory-item.styles.jsx'

const DirectoryItem = ({ category, large }) => {
  const {title, imageUrl} = category 

  return (
    <DirectoryItemContainer to={`/shop/${title}`} large={large}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem