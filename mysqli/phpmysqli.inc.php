<?php
$user = "root";
$password = "1qaz@wsx";
$host = "localhost";
$db = "class";
$port = "3306";

$conn = mysqli_connect($host, $user, $password, $db, $port) or die('資料庫連接錯誤'); //錯誤時通知

if ($conn) {
    @mysqli_select_db($conn, $db); //選擇資料庫
    @mysqli_query($conn, "set names utf8"); //資料庫編碼
    @mysqli_set_charset($conn, "utf8"); //資料庫編碼
    @mysqli_query($conn, "set character_set_client=utf8"); //資料庫編碼
} else {
    echo "資料庫操作失敗";
}