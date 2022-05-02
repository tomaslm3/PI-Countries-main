const { Activity, Country } = require('../../db.js')

const postActivity = async (name, difficulty, duration, season, countries) => {
    try {
        let newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });

        let selectCountries = await Country.findAll({
            where: {
                name: countries
            }
        });

        return newActivity.addCountry(selectCountries)
    } catch (error) {
        console.log('Error postActivity en controller ' + error)
    }
};

module.exports = {
    postActivity
};