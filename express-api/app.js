const express = require("express");
const documentRoutes = require("./routes/document.routes");

const app = express();
const port = 3000;

app.use("/documents", documentRoutes);

app.listen(port, () => {
    console.log(`Server initiated on port ${port}`);
});