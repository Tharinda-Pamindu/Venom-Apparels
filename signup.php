<?php

$conn = mysqli_connect("localhost", "root", "", "venom_apparel");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

class User
{
    private $id;
    private $name;
    private $email;
    private $password;

    public function __construct()
    {
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function __toString()
    {
        return $this->name . " " . $this->email . " " . $this->password;
    }
}

$tempUser = new User();
$count = 0;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['name'])) {
        $tempUser->setName($_POST['name']);
        $count++;
        echo $tempUser->getName();
    }
    if (isset($_POST['email'])) {
        $tempUser->setEmail($_POST['email']);
        $count++;
    }
    if (isset($_POST['password'])) {
        $hashedPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $tempUser->setPassword($hashedPassword);
        $count++;
    }
} else {
    echo "Error occurred: Invalid request method." . $_SERVER['REQUEST_METHOD'];
}

if ($count == 3) {
    $userCreate = "INSERT INTO user (USERNAME, EMAIL, PASSWORD) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($userCreate);
    $name = $tempUser->getName();
    $email = $tempUser->getEmail();
    $password = $tempUser->getPassword();

    // if ($stmt) {
    //     $stmt->bind_param("sss", $name, $email, $password);

    //     if ($stmt->execute()) {
    //         echo "New record created successfully!";
    //     } else {
    //         echo "Error executing query: " . $stmt->error;
    //     }

    //     $stmt->close();
    // } else {
    //     echo "Error preparing statement: " . $conn->error;
    // }

    try {
        $stmt->bind_param("sss", $name, $email, $password);
        if ($stmt->execute()) {
            echo "New record created successfully!";
        }
        $stmt->close();
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

$conn->close();
?>