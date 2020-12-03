const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 9090;

const app = express();
const router = express.Router();

let corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/api', router);

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Uhuu, It's is OK!." });
});

require("./routes/user.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
