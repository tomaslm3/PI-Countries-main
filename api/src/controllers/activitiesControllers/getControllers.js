const { Activity } = require('../../db.js')

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
    byActivities
};