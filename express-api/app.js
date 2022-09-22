const { logger } = require("./config/log.config");
const express = require("express");
const documentRoutes = require("./routes/document.routes");

const app = express();
const port = 3000;

app.use("/documents", documentRoutes);

app.listen(port, () => {
    logger.info(`Server initiated on port ${port}`);
});