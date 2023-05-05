const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const serviceOption = require("./data/serviceOption.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome, Server is running...YAY!");
});

app.get("/service", (req, res) => {
  res.send(serviceOption);
});

app.get("/serviceDestination/:id", (req, res) => {
  const id = req.params.id;
  const selectedService = serviceOption.find((option) => option.id === id);
  res.send(selectedService);
});

app.listen(PORT, () => {
  console.log(`server is running on PORT : ${PORT}`);
});
