const express = require('express');
const app = express();

app.get('/',(require, res) => {
    res.send({bye: 'buddy'});

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0');