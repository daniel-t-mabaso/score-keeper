<?php session_start();
function open_html($name){
    echo '   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>'.$name.'</title>';
    include('assets/php/dependencies.php');
    echo '</head>
<body class="primary-bg white-txt">';
}
function close_html(){    
echo '</body>
</html>';
}

?>
