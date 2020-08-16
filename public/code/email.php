<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $POST['message'];

    $email_from = "yl2vv@virginia.edu";
    $email_subject = "Contacted from Personal Website";
    $email_body = $name." said: \n".$message."\n Contact $name through $visitor_email.";
    
    $to = "yl2vv@virginia.edu";

    $headers = "From: ".$email_from;

    mail($to,$email_subject,$email_body,$headers);

    header("Location: ../index.html");
?>