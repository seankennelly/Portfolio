<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

$config = require 'config.php';
$email_account = $config['email_account'];
$password = $config['gmail_app_password'];

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $email_account;
    $mail->Password = $password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587; 

    // Sender information
    if (isset($_POST['email']) && isset($_POST['name'])) {
        $mail->setFrom($_POST['email'], $_POST['name']);
    } else {
        throw new Exception('Sender email or name is not set.');
    }

    // Recipient information
    $mail->addAddress('sean.kennelly@hotmail.co.uk', 'Outlook - (Website Form)');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'WEBSITE EMAIL';
    if (isset($_POST['message'])) {
        $mail->Body = 'WEBSITE FORM SUBMISSION: ' . '<br>------------------------' . '<br>Sender: ' . $_POST['name'] . '<br>Email: ' . $_POST['email'] . '<br>Subject: ' . $_POST['subject'] . '<br>Message: ' . $_POST['message'];
    } else {
        throw new Exception('Message content is not set.');
    }

    // Send the email
    if (!$mail->send()) {
        throw new Exception('Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
    } else {
        echo 'Message has been sent!';
    }
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}