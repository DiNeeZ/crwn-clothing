import { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component'

import {
  CategoryContainer,
  CategoryTitle
} from './category.styles.jsx'

const Category = () => {
  const [products, setProducts] = useState([])
  const { category: key } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)

  useEffect(() => {
    setProducts(categoriesMap[key])
  }, [key, categoriesMap])


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