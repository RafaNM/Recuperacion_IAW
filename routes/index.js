const express = require('express');
const router = express.Router();
const hotel = require('../models/hotels');

//@route get /
router.get('/', async (req, res) => {
    try{
        const hotels = await hotels.find().sort( { stars: -1 } ).limit(5).lean();
        res.render('home', {
            hotels,
        })
    } catch (err) {
        console.error(err)
        res.render('error/404')
    }
})

// @desc about
// @route GET /about
router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;
