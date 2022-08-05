<?php
session_start();

if(!isset($_SESSION['loggedin'])||$_SESSION['loggedin']!=true){
	header("location:login.php");
	exit;
}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>instaweb setting page</title>
		<link rel="stylesheet"href="setting.css">
	</head>
	<body>
		<nav>
			<form class="back"><input type="button" value="<-back" class="di" onclick="history.go(-1)"></form>
		</nav>


		<div class="box">
			<div class="set">setting</div><hr>
			<div class="se account">Account</div>
			<div class="se notification">Notification</div>
			<div class="se privacy">Privacy</div>
			<div class="se ads">Ads</div>
			<div class="se theme">Theme</div>
			<div class="se about">About</div>
			<div class="se help">Help</div>
			<div class="se switch"><a href="login.php">Switch account</a></div>
			<div class="se logout"><a href="logout.php">Logout</a></div>
			<div class="se delete">Delete account</div>

		</div>

	</body>
</html>