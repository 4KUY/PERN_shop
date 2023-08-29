import React, { useContext, useState , useEffect } from 'react'
import { Modal, Button, Form, Dropdown, Col , Row } from 'react-bootstrap'
import {Context} from '../..'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { observer } from 'mobx-react-lite'
import { createProduct, fetchBrand,  fetchType } from '../../http/productAPI'
const CreateDevice = observer(({show , onHide}) => {
    const { product } = useContext(Context)
    const [info , setInfo] = useState([])
    const [name , setName] = useState('')
    const [price , setPrice] = useState(0)
    const [file , setFile] = useState(null)



    useEffect(()=>{
        fetchType().then(data => product.setTypes(data))
        fetchBrand().then(data => product.setBrands(data))
      },[])
     const addInfo = ()=>{
        setInfo([...info , {title: '' , description: '' , number: Date.now()}])
    }
    const removeInfo = (number)=>{
        setInfo(info.filter(i => i.number !== number))
        console.log(typeof price)
    }
    const changeInfo = (key , value , number) =>{
        setInfo(info.map(i => i.number === number ? {...i , [key]: value}: i ))
    }
    const addDevice = ()=>{
        const formData = new FormData()
        formData.append('name' , name)
        formData.append('price' , `${price}`)
        formData.append('img' , file)
        formData.append('brandId' , product.selectedBrand.id)
        formData.append('typeId' , product.selectedType.id)
        formData.append('info' , JSON.stringify(info))
        console.log(formData)
        createProduct(formData).then(data => onHide)
    }
    const selectFile = e =>{
       setFile(e.target.files[0])
        console.log(file)
    }
  return (
    <Modal
    show={show}
    onHide={onHide}
    size="lg"
    centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройсво
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Dropdown>
                <DropdownToggle>{product.selectedType.name || 'Выберите тип'}</DropdownToggle>
                <Dropdown.Menu>
                {product.types.map(type => 
                        <DropdownItem 
                            onClick={() => product.setSelectedType(type)} 
                            key={type.id}
                            >{type.name}</DropdownItem>
                )}

                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-2 mb-2'>
                <DropdownToggle>{product.selectedBrand.name || 'Выберите бренд'}</DropdownToggle>
                <Dropdown.Menu>
                {product.brands.map(brand => 
                        <DropdownItem 
                            onClick={() => product.setSelectedBrand(brand)} 
                            key={brand.id}
                            
                            >{brand.name}</DropdownItem>
                )}

                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                value={name}
                onChange={e => setName(e.target.value)}
                className='mt-3'
                placeholder='Введите название устройства'
            />
            <Form.Control
                value={price}
                onChange={e => setPrice(+e.target.value)}
                className='mt-3'
                placeholder='Введите стоимость устройства'
                type='number'
            />
            <Form.Control
                className='mt-3'
                type='file'
                onChange={selectFile}
            />
            <hr/>
            <Button 
                variant='outline-dark'
                onClick={addInfo}
            >Добавить новое свойство</Button>
            {info.map(i => 
                <Row className='mt-3' key={i.number}>
                    <Col md={4}>
                        <Form.Control 
                            placeholder='Введите название свойства' 
                            value={i.title}
                            onChange={(e)=> changeInfo('title' , e.target.value , i.number)}
                            />
                    </Col>
                    <Col md={4}>
                        <Form.Control 
                            placeholder='Введите описание свойства' 
                            value={i.description}
                            onChange={(e)=> changeInfo('description' , e.target.value , i.number)}
                            />
                    </Col>
                    <Col md={4}>
                       <Button variant='outline-dark' onClick={() => removeInfo(i.number)} >delete</Button>
                    </Col>
                </Row>
                )}
        </Form>

    </Modal.Body>
    <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
    </Modal.Footer>
</Modal>
  )
})

export default CreateDevice