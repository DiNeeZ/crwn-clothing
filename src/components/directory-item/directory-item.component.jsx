import { Link } from 'react-router-dom'
import './directory-item.styles.scss'

const DirectoryItem = ({ category, large }) => {
  const {title, imageUrl} = category 

  return (
    <Link to={`/shop/${title}`} className={`directory-item-container ${large ? 'large' : ''}`}>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default DirectoryItem