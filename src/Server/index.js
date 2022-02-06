const dotenv = require('dotenv');
dotenv.config();

var textApi = new Meaning ({
    application_key: process.env.API_KEY
})

