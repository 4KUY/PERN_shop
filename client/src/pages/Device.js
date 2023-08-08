import React , {useEffect, useState} from 'react'
import { Card, Col, Container, Image, Row ,  Button } from 'react-bootstrap'
import star from '../assets/star.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
function Device() {
 
  
  const [device , setDevice] = useState({info:[]})

  const {id} = useParams()
  useEffect(()=>{
    
    fetchOneDevice(id).then(data => setDevice(data))
    console.log(id)
  },[])
  console.log(device)
  return (
    <Container>
      <Row style={{backgroundColor:'white' , border:'1px solid lightgray' , padding:'30px'}}>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row >
            <h2>{device.name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex align-items-center '
                style={{ fontSize:28 , border:'none'}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant='outline-dark' >Добавить в корзину</Button>
          </Card>
        </Col>

      </Row>


      <Row className='d-flex flex-column m-3'>
        <h2 style={{margin:'20px'}}>Характеристики:</h2>
        {device.info.map((info , index)  =>
            <Row key={info.title} style={{background: index % 2 ===0 ? '#f2f2f2' : 'transparent' , padding:20 , fontSize:'20px'}}>{info.title}:   {info.description}</Row>
          )}
      </Row>
    </Container>
  )
}

export default Device