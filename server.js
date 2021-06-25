const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.use(express.static('images'));
const server = app.listen(app.get('port'), () => {
  console.log('listening on port ', server.address().port);
});
