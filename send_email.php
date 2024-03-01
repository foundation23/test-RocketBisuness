<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "rbru-metrika@yandex.ru";
    $subject = "Новое сообщение с сайта";
    $message_body = "Имя: $name\nEmail: $email\n\n$message";

    if(mail($to, $subject, $message_body)){
        echo "Сообщение отправлено успешно";
        echo 'Вернуться <a href=http://u161748.test-handyhost.ru/>ссылке</a>.';
        	exit();
    } else {
        echo "Ошибка при отправке сообщения";
    }
}
?>