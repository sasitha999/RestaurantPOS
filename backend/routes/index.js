
const express = require('express')

const ItemController = require('../controllers/item-controllers')
const OrderController = require('../controllers/order-controllers')
const CategoryController = require('../controllers/category-controllers')
const ConfigController = require('../controllers/config-controllers')

const router = express.Router()

router.get('/categories', CategoryController.getCategories)
router.get('/configs', ConfigController.getConfigs)
router.get('/items', ItemController.getItems)
router.post('/order', OrderController.createOrder)


module.exports = router
