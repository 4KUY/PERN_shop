import React , {useState , useContext} from 'react'
import { Container, Form, Card, Button } from 'react-bootstrap'
import { NavLink , useLocation, useNavigate } from 'react-router-dom'
import { REGISTRAION_ROUTE, SHOP_ROUTE } from '../utils/counsts'
import { LOGIN_ROUTE } from '../utils/counsts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer((props) => {
  let location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const {user} = useContext(Context)
  const navigate = useNavigate()

  const click = async() =>{
    try {
      let data
    if(isLogin){
      data = await login(email , password)
    }else{
      data = await registration(email , password)
    }
    
    user.setIsUser(data)
    user.setIsAuth(true)
    navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
    
  }

  return (
    <Container className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{width:600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-4'
            placeholder='Введите ваш email...'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш пароль...'
            value={password}
            onChange={e =>setPassword(e.target.value)}
            type='password'
          />
          
          </Form>
          <div className='d-flex justify-content-between mt-3 pl-3 pr-3'>
            {isLogin ?
              <div> <NavLink to={REGISTRAION_ROUTE}> Нет аккаунта... </NavLink></div>
            
            :
            <div> <NavLink to={LOGIN_ROUTE}> Войти! </NavLink></div>
            
          }
            
          <Button onClick={click} className='align-self-end' variant='outline-success'>{isLogin ? 'Войти': 'Зарегистрироватся'} </Button>
        
          </div>

      </Card>



    </Container>
  )
})


export default Auth
