const { Router } = require('express');
const { byActivities } = require('../controllers/activitiesControllers/getControllers.js');
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

router.get('/', async (req, res) => {
    try {
        let getActivities = await byActivities()
        res.status(200).send(getActivities)
    } catch (error) {
        console.log('Error en activities en el llamado ' + error)
    }
});


module.exports = router;