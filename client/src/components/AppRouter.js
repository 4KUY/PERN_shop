import React, { useContext } from 'react'
import {Routes , Route , Navigate} from 'react-router-dom'
import {privateRoutes , publicRoutes} from '../router/routes'
import { SHOP_ROUTE } from '../utils/counsts'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth && privateRoutes.map(({path , component}) => 
        <Route key={path} path={path} element={component} exact/>)
      }
      
      {publicRoutes.map(({path , component}) => 
        <Route key={path} path={path} element={component} exact/>
        )}
         <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
  )
})

export default AppRouter
