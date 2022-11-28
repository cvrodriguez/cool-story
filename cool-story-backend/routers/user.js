const express = require("express");
const { Router } = express;
const Space = require('../models').space
const Story = require('../models').story
const router = new Router();

router.post('/stories', async (req, res, next) => {

    try {
        const { user } = req
        const userSpace = await Space.findOne({ where: { userId: user.id } })
        if (!userSpace) {
            res.status(400).send("No space found it")
        }
        const allUserStories = await Story.findAll({ where: { spaceId: userSpace.id } })
        res.json(allUserStories)

    } catch (error) {
        console.log(error)
        res.status(500)
    }

})



module.exports = router;