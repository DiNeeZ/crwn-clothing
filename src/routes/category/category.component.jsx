import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'

import {
  CategoryContainer,
  CategoryTitle
} from './category.styles.jsx'
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector'

const Category = () => {

  const { category: key } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const products = categoriesMap[key]

  return (
    <Fragment>
      <CategoryTitle>{key}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </CategoryContainer>
    </Fragment>
  )
}

export default Category