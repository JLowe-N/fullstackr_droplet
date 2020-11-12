const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

	res.status(418)
	res.set('X-Justin', 'Simply awesome')
	res.send('Hello World!');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
