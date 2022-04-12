import ProductCard from '../product-card/product-card.component'

import {
  CategoryPreviewContainer,
  TitleContainer,
  TitleLink,
  ArrowRight,
  Preview
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <TitleLink to={title}>
          {title.toUpperCase()}
        </TitleLink>
        <ArrowRight />
      </TitleContainer>
      <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map(product => {
              return <ProductCard key={product.id} product={product} />
            })
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview