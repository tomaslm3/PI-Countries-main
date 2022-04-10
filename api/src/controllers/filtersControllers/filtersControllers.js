const { Country, Activity,countries_activities } = require('../../db.js')

const nameAsc = async () => {
    try {
        let az = await Country.findAll({
            order: [['name', 'ASC']],
            include: [Activity]
        });
        return az
    } catch (error) {
        console.log('Error en Name Asc en la funcion ' + error)
    }
};

const nameDesc = async () => {
    try {
        let za = await Country.findAll({
            order: [['name', 'DESC']],
            include: [Activity]
        });
        return za
    } catch (error) {
        console.log('Error en Name Desc en la funcion ' + error)
    }
};

const maxPopulation = async () => {
    try {
        let population = await Country.findAll({
            order: [['population', 'DESC']],
            include: [Activity]
        });
        return population
    } catch (error) {
        console.log('Error en Max Population en la funcion ' + error)
    }
};

const minPopulation = async () => {
    try {
        let population = await Country.findAll({
            order: [['population', 'ASC']],
            include: [Activity]
        });
        return population
    } catch (error) {
        console.log('Error en Min Population en la funcion ' + error)
    }
};

const getContinent = async (continent) => {
    try {
        let byContinent = await Country.findAll({
            where: {
                continents: continent
            },
            include: [Activity]
        });
        return byContinent
    } catch (error) {
        console.log('Error en get continent en la funcion ' + error)
    }
};

// Arreglar sobrio
const byActivities = async () => {
    try {
        let byActivities = await Activity.findAll({
        });
        return byActivities
    } catch (error) {
        console.log('Error en get activities en la funcion ' + error)
    }
};



module.exports = {
    nameAsc,
    nameDesc,
    maxPopulation,
    minPopulation,
    getContinent,
    byActivities
};