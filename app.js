const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Esta es la prueba de devops con aws para skolmi'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
