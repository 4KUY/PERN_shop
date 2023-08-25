import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import jwtDecode from 'jwt-decode'
import { observer } from 'mobx-react-lite'
import { fetchBasket, fetchFilterDevice, delItemBasket } from '../http/deviceAPI'
import { Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Basketitem } from '../components/BasketItem/Basketitem'


const Basket = observer(() => {
  const { user } = useContext(Context)
  const user1 = jwtDecode(localStorage.getItem('token'))
  function takeArr() {
    return user.basket.map(item => item.productId)
  }
  useEffect(() => {
    fetchBasket(user1.id).then(data => {
      user.setUserBasket(data)
      fetchFilterDevice(JSON.stringify(takeArr())).then(data => {
        user.setBasketsProducts(data)
      })
    })

  }, [])
 
  const delProduct = ( deviceId ) => {
    delItemBasket(user1.id , deviceId).then(data => console.log(data))
    user.setDelBasket(deviceId)
  }


  return (
    <Container >
      {user.basketProducts.map(item =>
        <Basketitem key={item.id}  item={item} delProduct={delProduct}/>
        
      )}

    </Container>
  )
})


export default Basket
