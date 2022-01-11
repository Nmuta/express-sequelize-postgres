// the router file contains all the routes that can be accessed
const bagController = require('../controllers/bagController.js')

// create a Router object from express
const router = require('express').Router()

// add a new bag to the table
router.post('/', bagController.addBag)

// access all the bags in the table
router.get('/', bagController.getAllBags)

// access one bag by id
router.get('/:id', bagController.getOneBag)

// modify one bag by id
router.put('/:id', bagController.updateBag)

// delete one bag by id
router.delete('/:id', bagController.deleteBag)

module.exports = router