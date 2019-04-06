const bcrypt = require("bcryptjs");
exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { id: 1, username: "asdf", password: bcrypt.hashSync("asdf", 4) },
    { id: 2, username: "asdf1", password: bcrypt.hashSync("asdf1", 4) },
    { id: 3, username: "asdf2", password: bcrypt.hashSync("asdf2", 4) }
  ]);
};
