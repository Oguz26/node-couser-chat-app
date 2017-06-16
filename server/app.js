const path = require('path');
const publicPath = path.join(__dirname, '../public');


var express = require('express');
var app = express();

app.use(express.static(publicPath));

app.get('/',)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}!`);
});
