<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "info@esesto.ar";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES ESTO</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/png" href="images/esesto32px.png">
</head>

<body>
    <div class="formContSend">
        <div class="formContSendInfo">
            <h3>Thank you for contacting us.</h3>
            <p class="back">Go back to the <a href="index.html">homepage</a>.</p>
            <img src="/images/cross.png" alt="cross">
        </div>
    </div>
</body>

</html>
';

?>