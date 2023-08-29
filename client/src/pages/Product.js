import React , {useEffect, useState , useContext} from 'react'
import { Card, Col, Container, Image, Row ,  Button } from 'react-bootstrap'
import star from '../assets/star.png'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI'
import { createBasketStuff } from '../http/productAPI'
import { Context } from '..'
function Product() {
  
  const { user } = useContext(Context)
  const [product , setProduct] = useState({info:[]})
  const {id} = useParams()

  useEffect(()=>{
    fetchOneProduct(id).then(data => setProduct(data))
  },[])

  const addProduct = ()=>{
    createBasketStuff(user.user.id, id).then(data => console.log(data))
  }
  return (
    <Container>
      <Row style={{backgroundColor:'white' , border:'1px solid lightgray' , padding:'30px'}}>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img} />
        </Col>
        <Col md={4}>
          <Row >
            <h2>{product.name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='d-flex align-items-center '
                style={{ fontSize:28 , border:'none'}}
          >
            <h3>От: {product.price} руб.</h3>
            <Button variant='outline-dark' onClick={()=> addProduct()} >Добавить в корзину</Button>
          </Card>
        </Col>

      </Row>


      <Row className='d-flex flex-column m-3'>
        <h2 style={{margin:'20px'}}>Характеристики:</h2>
        {product.info.map((info , index)  =>
            <Row key={info.title} style={{background: index % 2 ===0 ? '#f2f2f2' : 'transparent' , padding:20 , fontSize:'20px'}}>{info.title}:   {info.description}</Row>
          )}
      </Row>
    </Container>
  )
}

export default Product