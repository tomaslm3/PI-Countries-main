const axios = require('axios');
const { Country } = require('../../db.js')

const getCountries = async () => {
    let dbCountries = await Country.findAll()
    try {
        if(dbCountries.length === 0) {
            const { data } = await axios.get('https://restcountries.com/v3/all');
            
            const countries = data.map((country) => {
                return {
                    id: country.cca3,
                    name: country.name.common,
                    flags: country.flags[1],
                    continents: country.continents[0],
                    capital: country.capital ? country.capital[0] : 'Undefined capital city',
                    subregion: country.subregion ? country.subregion : 'Undefinded Subregion',
                    area: country.area,
                    population: country.population
                };
            })
        
            countries.forEach((country) => {
                Country.findOrCreate({
                    where: { id: country.id },
                    defaults: {
                        id: country.id,
                        name: country.name,
                        flags: country.flags,
                        continents: country.continents,
                        capital: country.capital,
                        subregion: country.subregion,
                        area: country.area,
                        population: country.population,
                    }
                })
            });
            dbCountries = await Country.findAll()
        }
        return dbCountries
    } catch(error){
        console.log('Error controllers getCountries ' + error)
    }
}

module.exports = {
    getCountries
};