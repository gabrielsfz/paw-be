const express = require('express');
const app = express();
app.use(express.json());


app.get('/test', (req, res) => {
    res.status(200).json({
        message: 'Success'
    });
});

app.use("/user", require("./routes/userRoutes"));
app.use("/kopi", require("./routes/kopiRoutes"));
app.use("/login", require("./routes/loginRoutes"));


module.exports = app;
