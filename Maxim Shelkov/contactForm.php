<?php

$name = $_POST["name"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$message = $_POST["message"];
$address = $_POST["address"];
$to = "victorvelma@gmail.com";
$subject = "New Message";
mail ($to, $subject, $message, "from: " . $name . $lastName);
echo "Your Message Has Been Sent";
 ?>
