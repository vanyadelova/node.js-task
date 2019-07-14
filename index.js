const express = require('express')
const bodyParser = require('body-parser')
const shipyardsRouter = require('./shipyards/routes');
const shipsRouter = require('./ships/routes');
const usersRouter = require('./users/routes');
const authRouter = require('./auth/routes')

const app = express()
const port = process.env.PORT || 4000


app
  .use(bodyParser.json())
  .use(shipyardsRouter)
  .use(shipsRouter)
  .use(usersRouter)
  .use(authRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));