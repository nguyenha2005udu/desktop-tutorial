const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Kết nối MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nguyenha2005",
    database: "user"
});

connection.connect();

app.get("/", (req, res) => {
    res.send("Welcome to the login page");
});

// Xử lý yêu cầu đăng nhập
app.use(bodyParser.json());
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false });
        } else {
            if (results.length > 0) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
