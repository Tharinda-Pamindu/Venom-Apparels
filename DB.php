<?php
$conn = mysqli_connect("localhost","root","","venom_apparel");

//Check Connection
if(!$conn){
    die("Connection failed : ". mysqli_connect_error()); //when connection die this message occurred
}else{
    echo "Connection successful!<br>";
}

//Create user table
// mysqli injection
$userTableCreation = "CREATE TABLE IF NOT EXISTS user (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL UNIQUE,
    PASSWORD VARCHAR(255) NOT NULL
)";

//subcribe table creation query
$subscibeTableCreation = "CREATE TABLE IF NOT EXISTS subscribeLink (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE
)";

//user table sql code execute
if(mysqli_query($conn, $userTableCreation)){ //in-built function in php
    echo "Table created successfully <br>";
}
else{
    echo "<h3>500 - Internal server error<h3>";
}

if(mysqli_query($conn, $subscibeTableCreation)){
    echo "Table created successfully <br>"; //print this if successfully created
}else{
    echo "<h3>500 - Internal server error<h3>";
}

$conn->close(); //connection close
?>