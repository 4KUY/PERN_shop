import React, { useContext } from 'react'
import { Context } from '../..'
import { Row, Card, ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import classes from './BrandBar.module.css'
const BrandBar = observer(() => {
  const { product } = useContext(Context)

  const func = (brand) => {
    product.setSelectedBrand(brand)
    product.setFilteredProducts()
    }

  return (

    <div className='mt-2' >
      <ListGroup className='mt-2'>
        
         
      {product.brands.map(brand =>
        <ListGroup.Item
          active={brand.id === product.selectedBrand.id}
          className='p-3'
          key={brand.id}
          onClick={() => func(brand)}
          border="" 
          action variant="light"
        >{brand.name}</ListGroup.Item>
      )}
      
    </ListGroup>
      {Object.keys(product.selectedBrand).length !== 0 || Object.keys(product.selectedType).length !== 0 ? <Card
        className={`p-3 ms-5  ${classes.btnReset}`}  
        onClick={() => product.setBaseProducts(true)}
        border='danger' 
      >Сброс</Card> : <></>}
      <div>fd</div>
    </div>
  )
})
export default BrandBar
