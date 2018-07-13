const express = require('express');
const app = express();
app.listen(3000);
const fs = require('fs');
app.use(express.json());

app.post('/user/login', (req, res) => {
    console.log(req);
    res.status(200).json({
        success: true
    });
});

app.listen(8090);