require('dotenv').config();

module.exports = {
    secretKey: process.env.SECRET_KEY,
    dbUrl: process.env.DB_URL
}