<?php
session_start();
$servername = "localhost";
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "users_db"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Allow only @banasthali.in emails
    if (!preg_match("/@banasthali\.in$/", $email)) {
        echo "<script>alert('Only @banasthali.in emails are allowed!'); window.location.href='index.html';</script>";
        exit();
    }

    // Check user in database
    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION["user"] = $email;
            header("Location: frontpage.html"); // Redirect to frontpage
            exit();
        } else {
            echo "<script>alert('Invalid password!'); window.location.href='index.html';</script>";
        }
    } else {
        echo "<script>alert('User not found!'); window.location.href='index.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>
