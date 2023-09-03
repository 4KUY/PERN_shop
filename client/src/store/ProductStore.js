import {makeAutoObservable} from 'mobx'


export default class ProductStore {
    
    constructor(){
        
        this._types = [
            
        ]
        this._brands = [
            
        ]
        this._products = []
        this._selectedType ={}
        this._sortProduct =[]
        this._selectedBrand ={}
        this._tempSortDev ={}
        makeAutoObservable(this)

    }
    
    setSelectedBrand(brand){
        this._selectedBrand= brand
        
    }
    setBaseProducts(bool){
        if(bool){
        this._selectedType = {}
        this._selectedBrand= {}
        this._sortProduct = this._products
        }else{
            this._sortProduct = this._tempSortDev
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
    setProducts(products){
        this._products = products
    }
    setSortProducts(products){
        this._sortProduct = products
    }
    setFilteredProducts(){
        if (Object.keys(this._selectedBrand).length !== 0 && Object.keys(this._selectedType).length !== 0) {
            this._sortProduct = this._products.filter(item => item.brandId === this._selectedBrand.id)
            this._sortProduct = this._sortProduct.filter(item => item.typeId === this._selectedType.id)
        }else if(Object.keys(this._selectedType).length !== 0) {
            this._sortProduct = this._products.filter(item => item.typeId === this._selectedType.id)
        
        }else{
            this._sortProduct = this._products.filter(item => item.brandId === this._selectedBrand.id)
        }
        
        
        
    }


    setSortByPrice(){
        this._tempSortDev =  this._sortProduct
        this._sortProduct = this._sortProduct
                                    .map(item => item)
                                        .sort((a, b) => {return a.price - b.price})
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
    get sortProduct(){
        return this._sortProduct
    }
    get products(){
        return this._products
    }
}