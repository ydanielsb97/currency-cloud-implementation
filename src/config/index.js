require("dotenv").config();

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    currencyCloud: {
        environment: process.env.CURRENCY_CLOUD_ENVIRONMENT,
        loginId: process.env.CURRENCY_CLOUD_LOGIN_ID,
        apiKey: process.env.CURRENCY_CLOUD_API_KEY,
    }
}