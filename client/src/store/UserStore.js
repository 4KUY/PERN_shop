import {makeAutoObservable} from 'mobx'


export default class UserStore {
    constructor(){
        this._isAuth = false
        this._user ={}
        this._basket =[]
        this._basketProducts =[]
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth = bool
    }
    setIsUser(user){
        this._user = user
    }
    setUserBasket(basket){
        this._basket = basket
    }
    setBasketsProducts(products){
        this._basketProducts = products
    }
    setDelBasket(deviceId){
       this._basketProducts = this._basketProducts.filter(item => item.id !== deviceId)
    }
    get basketProducts(){
        return this._basketProducts
    }
    get isAuth(){
        return this._isAuth
    }
    get basket(){
        return this._basket
    }
    get user(){
        return this._user
    }
}