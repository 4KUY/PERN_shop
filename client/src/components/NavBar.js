import React, { useContext } from 'react'
import { Context } from '..'
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/counsts';
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../utils/counsts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse  } from '@fortawesome/free-solid-svg-icons'


const NavBar = observer(() => {
  const navigate = useNavigate()
  const { user } = useContext(Context)
  const logout = ()=>{
    user.setIsUser({})
    user.setIsAuth(false)
    localStorage.clear('token')
  }

  return (
    <div>
      
      <Navbar bg="" variant="dark" style={{backgroundColor: '#0e325f'}}>
        <Container>
          <NavLink  style={{ color: 'white' }} to={SHOP_ROUTE}> 
          <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#ffffff",}} />
          
           </NavLink>
          {user.isAuth ?
            <Nav className="ml-auto">
              <Button
              style={user.user.role !== 'ADMIN' ? {display:'none'} :  {display:'block' , color:'white'}}
                variant={''}
                onClick={() => navigate(ADMIN_ROUTE)}
              >Админ панель</Button>
              <Button
              style={{ color: 'white' }}
              variant={''}
                className='ms-4'
                onClick={() => navigate(BASKET_ROUTE)}
              >Корзина</Button>
              <Button
                variant={'outline-danger'} //outline-light
                className='ms-4'
                onClick={() => logout()}
              >Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto">
              <Button style={{color: 'white'}} variant={''} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }


        </Container>
      </Navbar>
      <br />


    </div>
  )
})

export default NavBar