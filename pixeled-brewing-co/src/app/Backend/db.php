<?php
$servername = "localhost";
$username = "zachary.kunz";
$password = "Low9mor@";
$dbname = "pixeled_brewing";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
?>