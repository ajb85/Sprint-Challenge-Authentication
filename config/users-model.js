const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findBy,
  insert
};

function find() {}

function findBy(filter) {
  return db("users").where(filter);
}

async function insert(user) {
  try {
    const [id] = await db("users").insert(user);
    return findBy({ id }).first();
  } catch (err) {
    console.log(err);
  }
}
