const express = require('express');
const app = express();
const fileSystem = require('fs');
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {

	res.send('Hello World!');

});

app.get('/.well-known/pki-validation/A77313B52F2D555618AE53C29CDABCDE.txt', (req, res) => {
	const filePath = path.join('/home/jlowen/.well-known/pki-validation', 'A77313B52F2D555618AE53C29CDABCDE.txt')
	res.set({"Content-Disposition":"attachment; filename=\"A77313B52F2D555618AE53C29CDABCDE.txt\""});
	const text = `4CB606AC8955B2E53E457AEC76C88BE1214EDF3F4A1CB014E1CC298B25BAAD06
	comodoca.com
	dcfe715c7a0d9ae`
	res.send(text)
})


app.get('/tea', (req, res) => {
	res.status(418)
	res.set('X-Justin', 'Simply awesome')
	res.send('Would you like a spot of STATUS:418?');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
