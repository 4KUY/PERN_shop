import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRAION_ROUTE, SHOP_ROUTE } from '../utils/counsts'
import Admin from '../pages/Admin'
import Basket from '../pages/Basket'
import Product from '../pages/Product'
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
    {path: PRODUCT_ROUTE + '/:id', component: <Product/>},
]



