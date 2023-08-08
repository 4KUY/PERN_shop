import { observer } from 'mobx-react-lite';
import './App.css';
import AppRouter from './components/AppRouter';
import  NavBar  from './components/NavBar';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
const App = observer(() =>{
  const {user} = useContext(Context)
  const [loading , setLoading] = useState(true)
    useEffect(()=>{
      check().then(data => {
        user.setIsUser(data)
        user.setIsAuth(true)
      }).finally(()=> setLoading(false) )
      
    
  } , [])
  
  if(loading){
    return <Spinner className='' animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  }
  return (
    <>
    <NavBar/>
    <AppRouter></AppRouter>
    
    </>
  );
})

export default App;
