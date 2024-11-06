<?php
// Disable display errors for production and enable logging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
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
  $mail->SMTPDebug = 0; // Set to 0 for production to hide SMTP output
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = $email_account;
  $mail->Password = $password;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  // Sanitize and validate inputs
  if (isset($_POST['email']) && isset($_POST['name'])) {
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      throw new Exception('Invalid email format.');
    }

    // Check for newline characters to guard against header injection
    if (preg_match('/[\r\n]/', $name)) {
      throw new Exception('Invalid name input detected.');
    }

    $mail->setFrom($email, $name);
  } else {
    throw new Exception('Sender email or name is not set.');
  }

  // Recipient information
  $mail->addAddress('sean.kennelly@hotmail.co.uk', 'Outlook - (Website Form)');

  // Email content
  $mail->isHTML(true);
  $mail->Subject = 'WEBSITE EMAIL';

  if (isset($_POST['message'])) {
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8') : 'No subject';
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    $mail->Body = 'WEBSITE FORM SUBMISSION: ' . '<br>------------------------' . '<br>Sender: ' . $name . '<br>Email: ' . $email . '<br>Subject: ' . $subject . '<br>Message: ' . $message;
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
