const {BasketProduct , Product , ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const {Sequelize} = require('sequelize')

class BasketController {
    async create(req , res){
        const {basketId ,deviceId} = req.body
        const basket = await BasketProduct.create({basketId, productId:deviceId});

        return res.json({basketId ,deviceId})
    }
    async getAll(req , res){
        const { basketId } = req.query
        const basketProduct = await BasketProduct.findAll({
            where:{basketId},
            
        })
        return res.json(basketProduct) 
    }
    async getBasketOne(req, res){
        const {id} = req.query
        const dev = await Product.findAll({
            where: { id: JSON.parse(id) },
            include:[{model:ProductInfo , as:'info'}], 
        })
        return res.json(dev)
    }//null
    async delItemBasket(req, res){
        const {basketId , deviceId} = req.query
        const del = await BasketProduct.destroy({
            where: { 
                basketId: basketId ,
                productId: deviceId
            }   
        })
        return res.json(del)
    }
}
//SELECT "id", "name", "price", "rating", "img", "createdAt", "updatedAt", "typeId", "brandId" FROM "devices" AS "device" WHERE "device"."id" = '[2 , 8 , 13]';
module.exports = new BasketController()