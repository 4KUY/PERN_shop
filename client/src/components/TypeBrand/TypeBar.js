import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from '../../index';
const TypeBar = observer(({fuseFilter}) => {
  const { device } = useContext(Context)



  const func = (type) => {
    device.setSelectedType(type)
    device.setSortDevices(fuseFilter())
    console.log(device.count)
  }
  
  return (
    <ListGroup className='mt-2'>
      {device.types.map(type =>
        <ListGroup.Item
          className='p-3'
          style={{ cursor: 'pointer' }}
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => func(type)}
          action variant="light"
        >{type.name}</ListGroup.Item>
      )}
    </ListGroup>
  )
})
export default TypeBar
