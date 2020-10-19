const express = require('express');
const router = express.Router();

// statuses model
const Statuses = require('../../models/status');

// @routes POST api/status
// @desc Create aa status
router.post('/', async (req, res) => {
    const newStatus = new Statuses(req.body);
    try {
        const statusOne = await newStatus.save();
        if(!statusOne) { 
            throw Error('Something went wrong on saving flight status');
        }    
        res.status(200).json(statusOne);
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes GET api/status
// @desc Get all statuses
router.get('/', async (req, res) => {
    try {
        const allStatuses = await Statuses.find();
        if(!allStatuses) throw Error('No item founded');
        res.status(200).json(allStatuses)
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;