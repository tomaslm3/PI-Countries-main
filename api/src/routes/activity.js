const { Router } = require('express');
const { postActivity } = require('../controllers/activitiesControllers/postControllers.js')
const router = Router();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries} = req.body;
    try {
        let newActivity = await postActivity(name, difficulty, duration, season, countries)
        res.status(200).send(newActivity)
    } catch (error) {
        console.log('Error postActivity en el llamado ' + error)
    }
})

module.exports = router;