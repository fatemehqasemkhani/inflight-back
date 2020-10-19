const express = require('express');
const router = express.Router();

// flights model
const Flights = require('../../models/flight');

// @routes GET api/flights
// @desc Get all flights
router.get('/', async (req, res) => {
    try {
        const flights = await Flights.find();
        if(!flights) throw Error('No item founded');
        res.status(200).json(flights)
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes GET api/flights/:id
// @desc Get single flight by id
router.get('/:id', async (req, res) => {
    try {
        const flight = await Flights.findById(req.params.id);
        if(!flight) throw Error('No item founded');
        res.status(200).json(flight)
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes POST api/flights
// @desc Create a flight
router.post('/', async (req, res) => {
    const newFlight = new Flights(req.body);
    try {
        const flight = await newFlight.save();
        if(!flight) { 
            throw Error('Something went wrong on saving flight'); 
        }
        res.status(200).json(flight)
    } catch(err) {
        res.status(400).json({ msg: err });
    }
});

//@routes DELETE api/flights/:id
// @desc Delete flight
router.delete('/:id', async (req, res) => {
    try {
        const flight = await Flights.findByIdAndDelete(req.params.id);
        if(!flight) throw Error('Item  not founded');
        res.status(200).json({ message: 'Item deleted successfully!' })
    } catch(err) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
});

// @routes UPDATE api/flights/:id
// @desc Delete flight
router.patch('/:id', async (req, res) => {
    try {
        const flight = await Flights.findByIdAndUpdate(req.params.id, req.body);
        if(!flight) throw Error('Item  not founded');
        res.status(200).json({ message: 'Item updated successfully!' })
    } catch(err) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
});

module.exports = router;