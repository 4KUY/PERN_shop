import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Image, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/counsts'
import classes from './BasketItem.module.css'

export const Basketitem = ({ item, delProduct }) => {
    const navigate = useNavigate()
    return (
        <Card className={`mt-3  d-flex flex-row justify-content-between align-items-center ${classes.card}`}  >
            <div style={{ width: '40%' }}>
                <Image style={{ cursor: 'pointer' }} onClick={() => navigate(PRODUCT_ROUTE + `/${item.id}`)} width={210} height={190} src={process.env.REACT_APP_API_URL + item.img} />
            </div>
            <div style={{ width: '60%' }} className='mt-2  '>
                <div> {item.name}  </div>
                {item.info.length > 0 &&

                    item.info.map(a => <p key={item.title} style={{ fontSize: '25px' }}>{`${a.title}: ${a.description}`} </p>
                    )

                }

                <div className={classes.price} >{item.price} ₽</div>
                <Button
                    onClick={() => delProduct(item.id)}
                    className={classes.btnDel}
                    variant="outline-light">
                    <FontAwesomeIcon style={{ color: 'rgb(14, 50, 95)' }} icon={faTrash} />
                </Button>{' '}

            </div>


        </Card>
    )
}
