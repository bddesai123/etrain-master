<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "your_email@example.com"; // Replace with your email address
  $subject = "New Email Subscription";
  $email = $_POST["email"];
  $message = "New email subscription: $email";
  $headers = "From:dbhadresh870@gmail.com" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();

  mail($to, $subject, $message, $headers);
}
?>
