const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',         
  password: 'password', 
  database: 'test'      
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Results:', results);
});

connection.end();
