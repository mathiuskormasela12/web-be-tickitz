// ====== Database
// import mysql
const mysql = require('mysql')

class Database {
  constructor () {
    this.db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })

    this.connect()
  }

  connect () {
    this.db.connect(err => {
      if (!err) {
        console.log('Database has been connected')
      } else {
        console.log(err)
      }
    })
  }
}

module.exports = Database
