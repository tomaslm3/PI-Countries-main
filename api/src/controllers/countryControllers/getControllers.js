const { Country, Activity } = require('../../db.js')

const getCountryById = async (id) => {
    try {
        return await Country.findByPk(id, {
            include: [Activity]
        })
    } catch (error) {
        console.log('Error getCountryById en controller ' + error)
    }
}

module.exports = {
    getCountryById
};