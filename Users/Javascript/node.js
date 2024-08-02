const mysql = require('mysql');

// Tạo kết nối đến cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Địa chỉ của máy chủ MySQL
  user: 'root', // Tên người dùng MySQL
  password: 'nguyenha2005', // Mật khẩu MySQL
  database: 'user' // Tên của cơ sở dữ liệu MySQL
});

// Kết nối đến MySQL
connection.connect(function(err) {
  if (err) {
    console.error('Lỗi kết nối:', err.stack);
    return;
  }

  console.log('Kết nối thành công với MySQL.');
});

// Sau khi thực hiện xong các thao tác với MySQL, đóng kết nối
connection.end();
