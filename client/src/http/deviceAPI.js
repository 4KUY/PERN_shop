import { $authHost , $host } from "./index";

export const createType = async(type) =>{
    const {data} = await $authHost.post('api/type/' , type)
    return data
}
export const fetchType = async() =>{
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async(brand) =>{
    const {data} = await $authHost.post('api/brand/' , brand)
    return data
}
export const fetchBrand = async() =>{
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async(device) =>{
    const {data} = await $authHost.post('api/device' , device)
    return data
}
export const fetchDevice = async() =>{
    const {data} = await $host.get('api/device')
    return data
}
export const fetchOneDevice = async(id) =>{
    const {data} = await $host.get('api/device/' + id)
    return data
}


export const fetchFilterDevice = async(idProducts) =>{
    const {data} = await $authHost.get(`api/basket/id/?id=${idProducts}`)
    return data
}//получить товары корзины
export const createBasketStuff = async(basketId ,deviceId) =>{
    const {data} = await $authHost.post('api/basket' , {basketId , deviceId})
    return data
}//добавить товар
export const fetchBasket = async(basketId) =>{
    const {data} = await $authHost.get(`api/basket/?basketId=${basketId}`)
    return data
}//получить корзину
export const delItemBasket = async(basketId , deviceId) =>{
    const {data} = await $authHost.delete(`api/basket/?basketId=${basketId}&deviceId=${deviceId}`)
    return data
}//получить корзину