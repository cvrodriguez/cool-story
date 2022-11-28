const express = require("express");
const { Router } = express;
const Story = require('../models').story
const router = new Router();


router.get("/", async (req, res, next) => {
    try {
        const allstories = await Story.findAll()
        if (!allstories) {
            res.status(404).send("we do not have stories");
        }
        res.json(allstories)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

router.get("/spaces/:id/", async (req, res, next) => {
    try {
        const allStoriesBySpace = await Story.findAll({ where: { spaceId: req.params.id } })
        if (!allStoriesBySpace) {
            res.status(404).send("that space  does not exist");
        }
        res.json(allStoriesBySpace)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})




module.exports = router;