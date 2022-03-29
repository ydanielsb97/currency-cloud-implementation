const config = require("./src/config");
const express = require("express");
const mainRouter = require("./src/router");
const app = express();

app.use("/api", mainRouter)

app.use("*", (req, res) => {
    return res.status(404).json({ 
        error: "Test"
    })
})

app.listen(config.port, () => {
    console.log(`Running in: http://localhost:${config.port}`);
});