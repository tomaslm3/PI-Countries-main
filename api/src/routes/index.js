const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.js')
const country = require('./country.js')
const activity = require('./activity')
const filters = require('./filters')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries)
router.use('/country', country)
router.use('/activity', activity)
router.use('/filters', filters)


module.exports = router;
