const { Router } = require('express');
const { getCountryById } = require("../controllers/countryControllers/getControllers");
const router = Router();

router.get('/:id', async function(req, res) {
    const { id } = req.params;
    try {
        const countryByID = await getCountryById(id);
        if(countryByID){
            res.status(200).send(countryByID)
        } else {
            res.status(404).send('Error 404, Pais no encontrado')
        }
    } catch (error) {
        console.log('Error getCountryById en el llamado ' + error)
    }
})

module.exports = router;