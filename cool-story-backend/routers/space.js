const express = require("express");
const { Router } = express;
const Space = require('../models').space
const router = new Router();

router.get('/space/spaces', async (req, res, next) => {
    try {
        const allSpaces = await Space.findAll()
        res.json(allSpaces)
    } catch (error) {
        res.status(500)
    }
})
module.exports = router;