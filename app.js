const beeJS       = require('./lib/beeJS')

const config      = require('./config')
const routes      = require('./routes')
const models      = require('./models')
const controllers = require('./controllers/index')

beeJS.db(config.db)

// TODO