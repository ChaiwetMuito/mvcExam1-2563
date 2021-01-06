var winston = require('winston');


var logger = module.exports = new winston.Logger({
    transports: [
        
        new winston.transports.Console({
            level: 'debug',
            prettyPrint: true,
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
        logger.debug('========================================================================================================');

    }
};