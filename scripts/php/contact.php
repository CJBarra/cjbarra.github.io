<?php
if($_POST["submit"]){
    $recipient="cbarratt.dev@gmail.com";
    $subject=$_POST["subject"];
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name:
     $sender\nEmail:
     $senderEmail\n\n$message";

     mail($recipient,$subject,$mailBody, 
     "From:$sender<$senderEmail>");

}

?>