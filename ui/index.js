
// Packages and apps
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connects db
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'abc123',
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );

function traverse() {
console.log('dis linked and traversing!!');
}

// db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//     console.log('\n COUNTS \n');
//     console.log(results);
//     console.log('\n COUNTS \n');
//   });
  
//   db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//     console.log('\n SELECT SUM \n');
//     console.log(results);
//     console.log('\n SELECT SUM \n');
//   });

module.exports = traverse;