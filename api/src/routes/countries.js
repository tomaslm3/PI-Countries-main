const { Router } = require('express')
const { getCountries } = require('../controllers/countriesControllers/getControllers')
const router = Router()

router.get('/', async function(req, res) {
    try {
        const allCountries = await getCountries();
        if(allCountries){
            res.status(200).send(allCountries)
        } else {
            res.status(404).send('Error 404, Paises no encontrados')
        }
    } catch (error) {
        console.log('Error getCountries en el llamado ' + error)
    }
})

module.exports = router