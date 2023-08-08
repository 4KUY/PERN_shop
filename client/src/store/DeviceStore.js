import {makeAutoObservable} from 'mobx'


export default class DeviceStore {
    
    constructor(){
        
        this._types = [
            
        ]
        this._brands = [
            
        ]
        this._devices = []
        this._selectedType ={}
        this._sortDevices =[]
        this._selectedBrand ={}
        this._devicesCount = 0
        this._tempSortDev ={}
        makeAutoObservable(this)
    }
    setDevicesCount(count){
        this._devicesCount= count
        
    }
    setSelectedBrand(brand){
        this._selectedBrand= brand
        
    }
    setBaseDevices(bool){
        if(bool){
        this._selectedType = {}
        this._selectedBrand= {}
        this._sortDevices = this._devices
        }else{
            this._sortDevices = this._tempSortDev
        }
    }
    setSelectedType(type){
        this._selectedType = type
    }
    
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDiveces(devices){
        this._devices = devices
    }
    setSortDevices(devices){
        this._sortDevices = devices
    }


    setSortByPrice(){
        this._tempSortDev =  this._sortDevices
        this._sortDevices = this._sortDevices.map(item => item).sort((a, b) => {return a.price - b.price})
    }




    get count(){
        return this._devicesCount
    }
    get types(){
        return this._types
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get selectedType(){
        return this._selectedType
    }
    get brands(){
        return this._brands
    }
    get sortDevices(){
        return this._sortDevices
    }
    get devices(){
        return this._devices
    }
}