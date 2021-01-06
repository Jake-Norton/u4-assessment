const axios = require('axios');
const data = require('./data.json')
module.exports = {
    getItems: (req, res) => {
        console.log(data)
    }
}