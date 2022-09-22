const bunyan = require("bunyan");

const reqSerializer = (req) => {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  }
}

const logger = bunyan.createLogger({
    name: "express-api", 
    streams: [
        {
            level: process.env.NODE_ENV === "production" ? "info" : "debug",
            stream: process.stdout
        }
    ],
    serializers: {
        req: reqSerializer
    }
});

module.exports = {
    logger
};