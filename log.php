<?php
$showAlert = false;
$showError = false;
if($_SERVER["REQUEST_METHOD"] == "POST"){
    include 'dbcon.php';
    $username = $_POST["uname"];
    $password = $_POST["pass"];
    $cpassword = $password;
    // $exists=false;

    // Check whether this username exists
    $existSql = "SELECT * FROM `user` WHERE username = '$username'";
    $result = mysqli_query($conn, $existSql);
    $numExistRows = mysqli_num_rows($result);
    if($numExistRows > 0){
        // $exists = true;
        $showError = "Username Already Exists";
        echo $showError;
    }
    else{
        // $exists = false;
        if(($password == $cpassword)){
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql ="INSERT INTO `user` ( `username`, `password`, `dt`) VALUES ('$username', '$hash', current_timestamp())";
            $result = mysqli_query($conn, $sql);
            echo "working";
            if ($result){
                //$showAlert = true;
                $showAlert = "ready to login,go on login page to login";
                echo $showAlert;
            }
        }
        else{
            $showError = "Passwords do not match emmhmmm";
            echo $showError;
        }
    }
}
    
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>insta_web_sign_up </title>
	<link rel="stylesheet" href="log.css">
</head>
<body>
	<div class="bbox">
		
		<form action="log.php" class="box" method="POST">
			<input type="phone-number" id="number" class="num" name="number" placeholder="  enter your number" >
			<input type="username" id="uname" class="uname" name="uname" placeholder="  enter unique username" >
			<input type="name" id="name" class="name" name="name" placeholder="  enter your name" >
			<input type="password" id="pass" class="pass" name="pass" placeholder="  enter password" >
			<div class="do">
				<a href="login.php"> allready sign up ,click to login</a>
				<button class="bt">submit</button>
			</div>
		</form>
		
	</div>

</body>
</html>