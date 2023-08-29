import React, { useContext } from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/counsts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { createBasketStuff } from '../../http/productAPI'
import { Context } from '../..'
import classes from './ProductItem.module.css'

export const ProductItem = ({ product }) => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    const addProduct = (event) => {

        createBasketStuff(user.user.id, product.id).then(data => console.log(data))
        event.stopPropagation();
    }
    return (
        <Col md={6} onClick={() => navigate(PRODUCT_ROUTE + `/${product.id}`)} >
            <Card className={`mt-3  d-flex flex-row justify-content-between align-items-center ${classes.card}`}  >
                <Image width={200} height={230} src={process.env.REACT_APP_API_URL + product.img} />
                <div style={{ width: '240px', fontSize: '20px', paddingRight: '16px'  , marginTop:'20px'}} >

                    <div style={{ height: '50px'}}>{product.name}</div>
                    <div className={` d-flex justify-content-between align-items-center ${classes.lower}`}

                    >

                        <div
                            className='d-flex'
                            style={{fontWeight:'600'}}
                        >{product.price} ₽</div>

                        <Button
                            onClick={(e) => addProduct(e)}
                            variant="primary"><FontAwesomeIcon icon={faCartShopping}
                            style={{ color: '#fffff' }} /></Button>{' '}

                    </div>

                </div>


            </Card>


        </Col>
    )
}
