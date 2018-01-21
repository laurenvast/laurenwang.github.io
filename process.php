<?php

    $to = "wzrtoby@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "message from portfolio site";

    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    // $fields{"phone"} = "phone";
    $fields{"message"} = "message";

    

    $body = "Here is what was sent:\r\n"; 

    foreach($fields as $a => $b){$body .= $b." : ".$_REQUEST[$a]."\r\n"; }


    $send = mail($to, $subject, $body, $headers);

?>