const express = require('express');
const app = express();

app.get('/',(require, res) => {
    res.send({hi: 'there'});

})

const PORT = process.env.PORT || 5000;
app.listen(5000);