var data = require('../data/data.js');
const axios = require('axios');

module.exports = function (app) {
    app.get("/getdata", (req, res) => {
        console.log("get request reached");
        res.status(200).json(data);
    })
}