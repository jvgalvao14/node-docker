const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Bom dia</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Yo bro, this server runnin on port ${port}`);
});
