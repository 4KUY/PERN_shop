import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import { Row } from 'react-bootstrap'
import { ProductItem } from './ProductItem/ProductItem'

export const ProductList = observer(() => {
    const { product } = useContext(Context)
    return (
        <Row>
            {product.sortProduct.map(product =>
                <ProductItem key={product.id} product={product} /> 
                )}
        </Row>
    )
})
