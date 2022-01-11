// require the db created in the index file
const db = require('../models/index')

// get the Bags model
const Bag = db.Bags;

// main work
const addBag = async (req, res) => {
    let input_data = {
        label: req.body.label,
        customerId: req.body.customerId,
     }
     // using the builtin 'create' function on Bag Model
     const bag = await Bag.create(input_data)
     
     // send a 200 response with the created entry
     res.status(200).send(bag)
}

const getAllBags = async (req, res) => {

    // using the builtin 'findAll' function on Bag Model
    let bags = await Bag.findAll({})
    res.status(200).send(bags)
}

const getOneBag = async (req, res) => {
    
    // getting the id from the params in the req
    let id = req.params.id

    // using the builtin 'findAll' function on Bag Model
    let bags = await Bag.findOne({where: {id: id}})
    res.status(200).send(bags)
}

const updateBag = async (req, res) => {
    let id = req.params.id

    // using the builtin 'findAll' function on Bag Model
    const bag = await Bag.update(req.body, { where: {id: id}})
    res.status(200).send(bag)
}

const deleteBag = async (req, res) => {
    let id = req.params.id

    // using the builtin 'destroy' function on Bag Model
    await Bag.destroy({where :{id: id}})
    res.status(200).send(`bag with id: ${id} is deleted`)
}

// export all the controller functions
module.exports = {
    addBag,
    getAllBags,
    getOneBag,
    updateBag,
    deleteBag
}