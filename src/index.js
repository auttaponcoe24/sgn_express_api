require("dotenv").config();
const express = require("express");
const core = require("cors");
const morgan = require("morgan");

const populationRoute = require("./routes/population-route");

const app = express();

app.use(core());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
	console.log("Hello World");
	res.send("Hello world");
});
app.use("/population", populationRoute);

const port = process.env.PORT || 5555;
app.listen(port, () => console.log(`server running on port ${port}`));
