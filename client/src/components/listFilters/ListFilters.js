import React, {useContext} from 'react'
import TypeBar from '../TypeBrand/TypeBar'
import BrandBar from '../BrandBar/BrandBar'
import { Context } from '../..'

        
export const ListFilters = () => {
    const { product } = useContext(Context)
    const fuseSortedBrand = (product) => {
        if (Object.keys(product.selectedBrand).length !== 0) {
          return product.products.filter(item => item.brandId === product.selectedBrand.id)
        }
        return product.products
      }
      const fuseFilter = () => {
        const sortedProductByBrand = fuseSortedBrand(product)
        if (Object.keys(product.selectedType).length !== 0) {
          return sortedProductByBrand.filter(item => item.typeId === product.selectedType.id)
        }
        return sortedProductByBrand
      }//replace to state
  return (

    <div >
        <h5>Межосевое расстояние:</h5>
        <TypeBar fuseFilter={fuseFilter} />
        <h5>Модель:</h5>
          <BrandBar fuseFilter={fuseFilter}  />
    
    </div>
  )
}
