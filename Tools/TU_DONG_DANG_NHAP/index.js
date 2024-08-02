// index.js

const mysql = require('mysql2');

// Tạo kết nối tới MySQL
const connection = mysql.createConnection({
  host: 'localhost',    // Địa chỉ của MySQL server
  user: 'root',         // Tên người dùng MySQL
  password: 'password', // Mật khẩu của người dùng MySQL
  database: 'test'      // Tên cơ sở dữ liệu
});

// Kết nối tới MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Thực hiện truy vấn
connection.query('SELECT * FROM your_table', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Results:', results);
});

// Đóng kết nối
connection.end();
