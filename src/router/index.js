const currencyCloud = require("../provider/currency-cloud");

const router = require("express").Router();

router.get("/", async (req, res) => {

    const logging = await currencyCloud.login();

    console.log({ logging })

    res.json({ success: true })

});

module.exports = router;