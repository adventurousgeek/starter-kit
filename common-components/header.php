<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">
    <title>Website Title</title>
    <style>
        <?php
            $css = file_get_contents('style.css');
            echo $css;
        ?>
    </style>
</head>
<body>
<?php require_once "svg-icons.php"; ?>

<header class="site-header">

</header>
