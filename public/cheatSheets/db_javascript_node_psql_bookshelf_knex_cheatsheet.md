# DataBoss Command Cheat Sheet

Language: JavaScript
Framework: Node.js
ORM: Bookshelf.js built on the Knex SQL query builder
DB: PostgreSQL

## Commands:

### Install Knex and Bookshelf

`$ npm install knex --save`
`$ npm install bookshelf --save`

# Then add PostgreSQL database:
`$ npm install pg`


### Setup a database schema with help from Knex to generate migrations

`$ knex init`  

This generates a basic configuration file, 'knexfile.js':  

`module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: './dev.movies'
    }
  }
};`
