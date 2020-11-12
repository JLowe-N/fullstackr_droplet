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
	const stat = fileSystem.statSync(filePath)

	response.writeHead(200, {
		'Content-Type': 'text/plain',
		'Content-Length': stat.size
	})

	const readStream = fileSystem.createReadStream(filePath);
	readStream.pipe(response)
})


app.get('/tea', (req, res) => {
	res.status(418)
	res.set('X-Justin', 'Simply awesome')
	res.send('Would you like a spot of STATUS:418?');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
