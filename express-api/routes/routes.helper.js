const { logger } = require("./../config/log.config");
const crypto = require("crypto");

const appendRequestIdentifier = (req, _res, next) => {
    req.log = logger.child({ reqId: crypto.randomUUID() });
    req.startTime = new Date();
    next();
};

const postRequestHandler = (req, _res) => {
    req.log.debug({ 
        executionTime: new Date() - req.startTime, 
        req: req 
    });
}

module.exports = {
    appendRequestIdentifier,
    postRequestHandler
}
