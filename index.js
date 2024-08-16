const routes = require('./routes/allRoutes');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`El servidor se está ejecutando en http://localhost:${port}`);
});
