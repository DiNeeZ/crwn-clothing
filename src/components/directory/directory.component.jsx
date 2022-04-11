import DirectoryItem from '../directory-item/directory-item.component'
import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {
        categories.map((category, idx) => {
          const prevLastIndex = categories.length - 2
          const isLarge = idx >= prevLastIndex

          return (
            <DirectoryItem key={category.id} category={category} large={isLarge} />
          )
        })
      }
    </div>
  )
}

export default Directory