const { Router } = require('express');
const { getCountryById } = require("../controllers/countryControllers/getControllers");
const router = Router();

router.get('/:id', async function(req, res) {
    const { id } = req.params;
    try {
        const countryByID = await getCountryById(id);
        res.status(200).send(countryByID)
    } catch (error) {
        console.log('Error getCountryById en el llamado ' + error)
    }
})

module.exports = router;