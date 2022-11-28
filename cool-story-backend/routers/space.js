const express = require("express");
const { Router } = express;
const Space = require('../models').space
const router = new Router();

router.get('/', async (req, res, next) => {
    try {
        const allSpaces = await Space.findAll()
        if (!allSpaces) {
            res.status(404).send("Spaces  does not exist");
        }
        res.json(allSpaces)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})
router.get('/:id', async (req, res, next) => {
    try {
        const spaces = await Space.findByPk(req.params.id)
        if (!spaces) {
            res.status(404).send("that space do not exist");
        }
        res.json(spaces)

    } catch (error) {
        console.log(error)
        res.status(500)
    }
})


module.exports = router;