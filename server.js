// DE
const express = require("express");
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//INDEX

// NEW

// Listener
app.listen(port, () => console.log(`You are listening to PORT ${PORT}...`));
