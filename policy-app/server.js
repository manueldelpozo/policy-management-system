const express = require('express');
const app = express();
app.listen(3000);
const fs = require('fs');
app.use(express.json());

app.get('/login/userLogin', (req, res) => {
    res.status(200).json({
        success: true
    });
});