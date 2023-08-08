import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductList } from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import { fetchBrand, fetchDevice, fetchType } from '../http/deviceAPI'
import { ListFilters } from '../components/listFilters/ListFilters'
import { SortBar } from '../components/SortBar'
const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchType().then(data => device.setTypes(data))
    fetchBrand().then(data => device.setBrands(data))
    fetchDevice().then(data => {
      device.setDiveces(data.rows)
      device.setSortDevices(data.rows)
      device.setDevicesCount(data.count)
    })

  }, [])
  console.log(device)
  return (
    <Container style={{}} >
      <Row>
        <Col md={2} className=''>
          <ListFilters>


          </ListFilters>
        </Col>
        <Col md={10}>
          <div className='headerlist'>
            <h4 style={{ marginTop: '15px' }} >{Object.keys(device.devices).length} товаров</h4>
            <SortBar/>
          </div>
          <ProductList style={{ minHeight: '700px' }} />
        </Col>



      </Row>


    </Container>


  )
})

export default Shop