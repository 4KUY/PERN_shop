import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductList } from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrand, fetchProducts, fetchType } from '../http/productAPI'
import { ListFilters } from '../components/listFilters/ListFilters'
import { SortBar } from '../components/SortBar'
const Shop = observer(() => {
  const { product } = useContext(Context)

  useEffect(() => {
    fetchType().then(data => product.setTypes(data))
    fetchBrand().then(data => product.setBrands(data))
    fetchProducts().then(data => {
      product.setProducts(data.rows)
      product.setSortProducts(data.rows)
    })

  }, [])
  return (
    <Container style={{}} >
      <Row>
        <Col md={2} className=''>
          <ListFilters>


          </ListFilters>
        </Col>
        <Col md={10}>
          <div className='headerlist'>
            <h4 style={{ marginTop: '15px' }} >{Object.keys(product.products).length} товаров</h4>
            <SortBar/>
          </div>
          <ProductList style={{ minHeight: '700px' }} />
        </Col>



      </Row>


    </Container>


  )
})

export default Shop