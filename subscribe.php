<?php

$conn = mysqli_connect("localhost", "root", "", "venom_apparel");
if (!$conn) {
    die("Connection failed : ". mysqli_connect_error());
}
$email = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }

    try {
        $stmt = $conn->prepare("INSERT INTO subscribeLink (email) VALUES (?)");
        $stmt->bind_param("s", $email);
        if ($stmt->execute()) {
            echo "New record created successfully!";
        }
        $stmt->close();
    } catch (Exception $e) {
        echo $e->getMessage();
    }

} else {
    echo "Error occurred: Invalid request method." . $_SERVER['REQUEST_METHOD'];
}

$conn->close();

?>