<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        echo "Invalid CSRF token";
        exit;
    }
    unset($_SESSION['csrf_token']);

    // Rate limiting
    if (!isset($_SESSION['last_submit_time'])) {
        $_SESSION['last_submit_time'] = time();
    } else {
        $time_since_last_submit = time() - $_SESSION['last_submit_time'];
        if ($time_since_last_submit < 60) { // Limit to 1 submission per minute
            echo "Please wait before submitting again.";
            exit;
        }
        $_SESSION['last_submit_time'] = time();
    }

    // Sanitize and validate input data
    $name = htmlspecialchars($_POST['name']);
    $topic = htmlspecialchars($_POST['topic']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    if (strlen($name) > 100 || strlen($topic) > 100 || strlen($email) > 100) {
        echo "Input data is too long.";
        exit;
    }

    if (strlen($message) > 1000) {
        echo "Message is too long.";
        exit;
    }

    $to = "your_email@example.com"; // Replace with your email address
    $subject = "New message from $name about $topic";
    $body = "Name: $name\n";
    $body .= "Topic: $topic\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
