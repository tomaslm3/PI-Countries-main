const { Router } = require('express')
const { getCountries, getCountriesByName } = require('../controllers/countriesControllers/getControllers')
const router = Router()

router.get('/', async function(req, res) {
    const { name } = req.query;
    try {
        if(name){
            const byNameCountries = await getCountriesByName(name)
            if(byNameCountries.length !== 0){
                res.status(200).send(byNameCountries)
            } else {
                res.status(404).send('Error 404, Pais no encontrado')
            }
        } else {
            const allCountries = await getCountries();
            if(allCountries){
                res.status(200).send(allCountries)
            } else {
                res.status(404).send('Error 404, Paises no encontrados')
            }
        }
    } catch (error) {
        console.log('Error getCountries en el llamado ' + error)
    }
})

module.exports = router;