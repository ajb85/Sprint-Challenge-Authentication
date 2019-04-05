const axios = require("axios");
const bcrypt = require("bcryptjs");

const { authenticate } = require("../auth/authenticate");
const Users = require("./users-model.js");
const getToken = require("./getToken.js");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

async function register(req, res) {
  try {
    const { username, password } = req.body;
    if (username && password) {
      const hashed = bcrypt.hashSync(password, 4);
      const newAccount = await Users.insert({ username, password: hashed });
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

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();
    console.log(password, user);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = getToken(user);
      res
        .status(200)
        .json({ message: `You are now logged in as: ${user.username}`, token });
    } else {
      res.status(400).json({ message: "Incorrect username/password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error while logging in" });
  }
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
