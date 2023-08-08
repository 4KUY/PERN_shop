import React, { useContext } from 'react'
import { Context } from '../..'
import { Row, Card, ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
const BrandBar = observer(({fuseFilter}) => {
  const { device } = useContext(Context)

  const func = (brand) => {
    device.setSelectedBrand(brand)
    device.setSortDevices(fuseFilter())
  }

  return (

    <div className='mt-2' >
      <ListGroup className='mt-2'>
        
         
      {device.brands.map(brand =>
        <ListGroup.Item
          active={brand.id === device.selectedBrand.id}
          className='p-3'
          key={brand.id}
          onClick={() => func(brand)}
          border="" 
          action variant="light"
        >{brand.name}</ListGroup.Item>
      )}
      
    </ListGroup>
      {Object.keys(device.selectedBrand).length !== 0 || Object.keys(device.selectedType).length !== 0 ? <Card
        style={{ cursor: 'pointer'  }}
        className='p-3 ms-5 '
        onClick={() => device.setBaseDevices(true)}
        border='danger' 
      >Сброс</Card> : <></>}
      
    </div>
  )
})
export default BrandBar
