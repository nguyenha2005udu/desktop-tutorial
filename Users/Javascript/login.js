document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Gửi yêu cầu đăng nhập đến server Node.js
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").innerText = "Login successful!";
        } else {
            document.getElementById("message").innerText = "Login failed. Please check your credentials.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
