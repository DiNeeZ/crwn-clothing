import DirectoryItem from '../directory-item/directory-item.component'
import { DirectoryContainer } from './directory.styles.jsx'

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {
        categories.map((category, idx) => {
          const prevLastIndex = categories.length - 2
          const isLarge = idx >= prevLastIndex

          return (
            <DirectoryItem key={category.id} category={category} large={isLarge} />
          )
        })
      }
    </DirectoryContainer>
  )
}

export default Directory