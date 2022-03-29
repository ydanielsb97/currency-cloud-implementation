var currencyCloud = require('currency-cloud');
const config = require('../../config');



module.exports = {
    login: async () => {
        try {
            const token = await currencyCloud.authentication.login({
                environment: config.currencyCloud.environment, 
                loginId: config.currencyCloud.loginId, 
                apiKey: config.currencyCloud.apiKey
            });

    
            return token;
            
        } catch (error) {
            
            return { error: { message: "Unknown error"}}
        }
    },
    deleteAccount: () => {
        
    }
}