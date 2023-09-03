import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../../index';
const TypeBar = observer(() => {
  const { product } = useContext(Context)



  const func = (type) => {
    product.setSelectedType(type)
    
    product.setFilteredProducts()
   }
  
  return (
    <>
    <ListGroup className='mt-2'>
      {product.types.map(type =>
        <ListGroup.Item
          className='p-3'
          style={{ cursor: 'pointer' }}
          active={type.id === product.selectedType.id}
          key={type.id}
          onClick={() => func(type)}
          action variant="light"
        >{type.name}</ListGroup.Item>
        
      )}
    </ListGroup>
    
    </>
  )
})
export default TypeBar
