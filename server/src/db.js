const knex = require('knex')
const { createTasksTables, createTaskVersionTable } = require("./tasks/ddl")
const createFileTables = require("./files/ddl")

async function connect(options) {
  const db = knex({
    client: 'pg',
    connection: options
  })

  await createTasksTables(db);
  await createTaskVersionTable(db);
  await createFileTables(db);
  return db
}

module.exports = connect
