const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.json({ response: "okey" })
})


app.listen(8080, () => console.log(`server is started`))