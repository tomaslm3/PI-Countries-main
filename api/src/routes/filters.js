const { Router } = require('express');
const router = Router();
const { nameAsc, nameDesc, maxPopulation, minPopulation, getContinent, byActivities } = require("../controllers/filtersControllers/filtersControllers");

router.get('/asc', async (req, res) => {
    try {
        let az = await nameAsc()
        res.status(200).send(az)
    } catch (error) {
        console.log('Error en Name Asc en el llamado ' + error)
    }
});

router.get('/desc', async (req, res) => {
    try {
        let za = await nameDesc()
        res.status(200).send(za)
    } catch (error) {
        console.log('Error en Name Desc en el llamado ' + error)
    }
});

router.get('/maxPopulation', async (req, res) => {
    try {
        let population = await maxPopulation()
        res.status(200).send(population)
    } catch (error) {
        console.log('Error en MaxPopulation en el llamado ' + error)
    }
});

router.get('/minPopulation', async (req, res) => {
    try {
        let population = await minPopulation()
        res.status(200).send(population)
    } catch (error) {
        console.log('Error en MinPopulation en el llamado ' + error)
    }
});

router.get('/continent/:continent', async (req, res) => {
    const continent = req.params.continent;
    try {
        let byContinent = await getContinent(continent)
        res.status(200).send(byContinent)
    } catch (error) {
        console.log('Error en continent en el llamado ' + error)
    }
});

// No acceder a esta ruta hasta no arreglarla sobrio, buscar la forma de traer solo los countries que contengan activities. Suerte Tom <3
router.get('/activities', async (req, res) => {
    try {
        let getActivities = await byActivities()
        res.status(200).send(getActivities)
    } catch (error) {
        console.log('Error en activities en el llamado ' + error)
    }
});

module.exports = router;