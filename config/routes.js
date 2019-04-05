const axios = require("axios");
const { authenticate } = require("../auth/authenticate");

const Users = require("./users-model.js");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  try {
    const { username, password } = req.body;
    if (username && password) {
      const newAccount = await Users.insert(req.body);
      // Normally would not return the password
      res.status(201).json(newAccount);
    } else {
      res
        .status(400)
        .json({ message: "Please include a username and password" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Server error encountered creating your account" });
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: "application/json" }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
