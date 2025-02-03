<?php
$conn = mysqli_connect("localhost","root","","venom_apparel");

//Check Connection
if(!$conn){
    die("Connection failed : ". mysqli_connect_error());
}

//Create user table
$userTableCreation = "CREATE TABLE IF NOT EXISTS user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL UNIQUE,
    PASSWORD VARCHAR(255) NOT NULL
)";

if(mysqli_query($conn, $userTableCreation)){
    echo "Table created successfully";
}
else{
    echo "<h3>500 - Internal server error<h3>";
}