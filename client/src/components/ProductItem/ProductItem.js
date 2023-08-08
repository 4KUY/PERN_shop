import React, { useContext } from 'react'
import { Card, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../../utils/counsts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { createBasketStuff } from '../../http/deviceAPI'
import { Context } from '../..'
import classes from './ProductItem.module.css'

export const ProductItem = ({ device }) => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    const addProduct = (event) => {

        createBasketStuff(user.user.id, device.id).then(data => console.log(data))
        event.stopPropagation();
    }
    return (
        <Col md={6} onClick={() => navigate(DEVICE_ROUTE + `/${device.id}`)} >
            <Card className={`mt-3  d-flex flex-row justify-content-between align-items-center ${classes.card}`}  >
                <Image width={200} height={230} src={process.env.REACT_APP_API_URL + device.img} />
                <div style={{ width: '240px', fontSize: '20px', paddingRight: '16px'  , marginTop:'20px'}} >

                    <div style={{ height: '50px'}}>{device.name}</div>
                    <div className={` d-flex justify-content-between align-items-center ${classes.lower}`}

                    >

                        <div
                            className='d-flex'
                            style={{fontWeight:'600'}}
                        >{device.price} ₽</div>

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
