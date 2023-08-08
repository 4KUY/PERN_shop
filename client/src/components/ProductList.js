import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'
import { ProductItem } from './ProductItem/ProductItem'

export const ProductList = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row>
            {device.sortDevices.map(device =>
                <ProductItem key={device.id} device={device} /> 
                )}
        </Row>
    )
})
