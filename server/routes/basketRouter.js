const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')

router.post('/',BasketController.create) 
router.get('/',BasketController.getAll) 
router.get('/id',BasketController.getBasketOne)
router.delete('/',BasketController.delItemBasket)
module.exports = router