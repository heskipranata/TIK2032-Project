<?php
$host = 'localhost';
$user = 'root';
$pass = 'root1';
$dbname = 'personal_web';
$port = 3307;

$conn = mysqli_connect($host, $user, $pass, $dbname, $port);
if (!$conn) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

if (isset($_POST['submit'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    $query = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";

    if (mysqli_query($conn, $query)) {
        // Redirect dengan parameter success=true
        header('Location: ../page/contact.html?success=true');
        exit();
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
