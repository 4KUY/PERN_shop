import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRAION_ROUTE, SHOP_ROUTE } from '../utils/counsts'
import Admin from '../pages/Admin'
import Basket from '../pages/Basket'
import Device from '../pages/Device'
import Auth from '../pages/Auth'
import Shop from '../pages/Shop'

export const privateRoutes = [
    {path: ADMIN_ROUTE , component: <Admin/>},
    {path: BASKET_ROUTE , component: <Basket/>},
]

export const publicRoutes =[
    {path: SHOP_ROUTE , component: <Shop/>},
    {path: LOGIN_ROUTE , component: <Auth/>},
    {path: REGISTRAION_ROUTE , component: <Auth/>},
    {path: DEVICE_ROUTE + '/:id', component: <Device/>},
]



