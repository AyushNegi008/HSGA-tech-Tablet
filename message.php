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
		<title>instaweb</title>
		<link rel="stylesheet"href="message.css">
	</head>
	<body>
		<div class="navm">
			<div class="box">
				<div class="navbar">
					<div class="logo">
						<img src="img/2220.png" width="35px">
					</div>
					<div class="un">
						//<?php echo $_SESSION['username']?>//
					</div>
					<nav>
						<ul>
							<li><a href="home.php"><img src="img/home.png"></a></li>


							<li><a href="acc.php"><img src="img/acc.png"></a></li>
						</ul>
						
					</nav>
				</div>
			</div>
		</div>

		
		<div class="cm">
			<div class="content">
				<div class="bleft">
					<div class="serc">
						<input id="searchbar" class="ser" onkeyup="search_animal()" type="text" name="search" placeholder=" Search">
					</div>
					
					<div class="allh">
						<div class="ub">
							<hr>
							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">saj</div>
									<br><div class="pt2">hello</div>
								</div>
							</div><hr>
							

							<div class="u">
								<div class="pu"><img src="img/16.jpeg"></div>
								<div class="pt">
									<div class="pt1">hvhjbk</div>
									<br><div class="pt2">how are you</div>
								</div>
							</div><hr>

							<div class="u">
								<div class="pu"><img src="img/camera.png"></div>
								<div class="pt">
									<div class="pt1">ghjbcslk</div>
									<br><div class="pt2">hhi</div>
								</div>
							</div><hr>

							<div class="u">
								<div class="pu"><img src="img/gear.png"></div>
								<div class="pt">
									<div class="pt1">grcvec</div>
									<br><div class="pt2">well done</div>
								</div>
							</div><hr>

							<div class="u">
								<div class="pu"><img src="img/3.jpeg"></div>
								<div class="pt">
									<div class="pt1">uqufduw</div>
									<br><div class="pt2">but how</div>
								</div>
							</div><hr>

							<div class="u">
								<div class="pu"><img src="img/mess.jpg"></div>
								<div class="pt">
									<div class="pt1">ayush</div>
									<br><div class="pt2">hi</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/noti.png"></div>
								<div class="pt">
									<div class="pt1">sdiofui</div>
									<br><div class="pt2">.*</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/2220.png"></div>
								<div class="pt">
									<div class="pt1">sdgf</div>
									<br><div class="pt2">.meme</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/home.png"></div>
								<div class="pt">
									<div class="pt1">ubcu</div>
									<br><div class="pt2">well done</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">surc</div>
									<br><div class="pt2">good</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">difu</div>
									<br><div class="pt2">do it</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">yrg </div>
									<br><div class="pt2">great</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">vyfyfu</div>
									<br><div class="pt2">nice</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">siuekd</div>
									<br><div class="pt2">how are you</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">bl j</div>
									<br><div class="pt2">hey</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">i yfsaj</div>
									<br><div class="pt2">hi</div>
								</div>
							</div><hr>


							<div class="u">
								<div class="pu"><img src="img/1.jpeg"></div>
								<div class="pt">
									<div class="pt1">hus</div>
									<br><div class="pt2">hello friend</div>
								</div>
							</div><hr>
							<br><br><br><br><br><br><br><br><br>
						</div>
					</div>



					

				</div>
				<div class="bright">
					
						<div class="up">
							<div class="p1"><img src="img/1.jpeg"></div>
							<div class="pn">saj</div>

						</div>
						<div class="mid">
							<div class="midin">
								<div class="extra"></div>

									
										
							</div>
						</div>
						<div class="down">
							<div class="emo"></div>
							<div class="sh"></div>
							<input id="message" class="putm" onkeyup="search_animal()" type="text" name="message" placeholder="  type your message">
							<div class="mic"></div>
						</div>
					
				</div>
			</div>
		</div>
		<script src="java.js"></script>
	</body>
</html>