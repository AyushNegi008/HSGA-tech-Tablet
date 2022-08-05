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
		<title>instaweb account page</title>
		<link rel="stylesheet"href="acc.css">
	</head>
	<body>
		<div class="navm">
			<div class="box">
				<div class="navbar">
					<div class="logo">
						<img src="img/2220.png" width="35px">
					</div>
					<nav>
						<ul>
							<li><a href="home.php"><img src="img/home.png"></a></li>

							<li><a href=""><img src="img/search.png">
							</a></li>


							<li><a href=""><img src="img/or.png"></a></li>
							<li><a href=""><img src="img/noti.png"></a></li>
							<li><a href="acc.php"><img src="img/acc.png"></a></li>
						</ul>
						<div>
							<div class="search_ search_b search_s"></div>
							<div class="order_ order_b order_s"></div>
							<div class="notification_ notification_b notification_s"></div>

						</div>
					</nav>
				</div>
			</div>
		</div>

		
		<div class="cm">
			<div class="content">
				<div class="bleft">
					<div class="left">
						<div class="accinfo">
							<div class="accphoto">
								<img src="img/acc.png">
								<p class="font"><b><?php echo $_SESSION['username']?></b></p>
								<div class="opp op"></div>
								<div class="popup pup">
									<div class="oo">profile photo</div><hr>
									<div class="o">view profile photo</div>
									<div class="o">delete profile photo </div>
									<div class="o">change profile photo</div>
								</div>
							</div>



							<div class="info pn">
								<div class="pnu1">00</div><hr>
								<div class="pnu2">post</div>
							</div>


							<div class="info cn">
								<div class="cnu1">200</div><hr>
								<div class="cnu2">clients</div>
								<div class="clients cli"><p class="f">clients</p><hr>
									<div class="ub">
										<div class="u">saj</div>
										<div class="u">skcah j</div>
										<div class="u">sjkac</div>
										<div class="u">xzjk</div>
										<div class="u">kjabc</div>
										<div class="u">jbv </div>
										<div class="u">eiqn</div>
										<div class="u">dobj </div>
										<div class="u">hdsvk</div>
										<div class="u">ihew</div>
										<div class="u">iwe_c</div>
										<div class="u">hgvjh</div>
										<div class="u">tez</div>
										<div class="u">utcv</div>
									</div>
								</div>
								<div class="cb1 cb2"></div>
							</div>



							<div class="info spf">
								<div class="spfu">100</div><hr>
								<div class="spfu2">following</div>
								<div class="followers foll"><p class="f">following</p><hr>
									<div class="ub">
										<div class="u">yrxcg</div>
										<div class="u">tucgvj</div>
										<div class="u">vguy</div>
										<div class="u">hgvjh</div>
										<div class="u">tez</div>
										<div class="u">utcv</div>
										<div class="u">iytug</div>
										<div class="u">cgv42</div>
										<div class="u">ytdc</div>
										<div class="u">yxcgh </div>
										<div class="u">mfcvc</div>
										<div class="u">hgvjh</div>
										<div class="u">tez</div>
										<div class="u">utcv</div>
									</div>
								</div>
								<div class="fb1 fb2"></div>
							</div>
						</div>





						<div class="about">
							<div class="name">
								<b>name</b>
							</div>
							<div class="about_">
								need nothing more than every thing.<br>
								not dedicated just desparate to get sronger.
							</div>
							<a class="link" href="http://instagram.com/ayush_negi_008">http:// instagram.com/ ayush_negi_008</a>
						</div>





						<div class="exp">

							<div class="we">1 years<hr>
								Work Experence</div>

							<div class="pd">3<hr>
								Project Done</div>
						</div>
						<hr class="hr">



						<div class="brating">
							<div class="rating">
								<div class="rat"><b>Rating:</b></div>
								<div class="ra">4.8*</div>
								<div class="nr">2 people rated</div>
							</div>


							<div class="R b5">
								<div class="r 5"> 5 </div>
								<div class="n">---------------1</div>
							</div>
							<div class="R b4">
								<div class="r 4"> 4 </div>
								<div class="n">---------------1</div>
							</div>
							<div class="R b3">
								<div class="r 3"> 3 </div>
								<div class="n">---------------0</div>
							</div>
							<div class="R b2">
								<div class="r 2"> 2 </div>
								<div class="n">---------------0</div>
							</div>
							<div class="R b1">
								<div class="r 1"> 1 </div>
								<div class="n">---------------0</div>
							</div>
						</div>
						<hr class="hr">
					</div>

						<br>


					<div class="bhl">
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
							<div class="hl"></div>
					</div>
					<br>

					<div class="all">
						<div class="bar">
							<div class="l p"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm9SX-OZ-g27ao7umNeuLHNYFHZWO-PSjZsDHnqyCZx9otGqv9uou_3ZbIiOA6rMNhHA&usqp=CAU"></div>
							<div class="l v"><img src="https://cdn.freebiesupply.com/logos/large/2x/tencent-video-logo-png-transparent.png"></div>
							<div class="l t"><img src="data:image/png;base64,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"></div>
						</div>
						<div class=collections>
							<div class="line">
								<div class="img"><a href="post.php#9"><img src="img/mess.jpg"></a></div>
								<div class="img"><a href="post.php#8"><img src="img/camera.png"></a></div>
								<div class="img"><a href="post.php#7"><img src="img/gear.png"></a></div>
							</div>	
						</div>
						<div class=collections>
							<div class="line">
								<div class="img"><a href="post.php#6"><img src="img/3.jpeg"></a></div>
								<div class="img"><a href="post.php#5"><img src="img/16.jpeg"></a></div>
								<div class="img"><a href="post.php#4"><img src="img/1.jpeg"></a></div>
							</div>	
						</div>
						<div class=collections>
							<div class="line">
								<div class="img"><a href="post.php#3"><img src="img/mess.jpg"></a></div>
								<div class="img"><a href="post.php#2"><img src="img/camera.png"></a></div>
								<div class="img"><a href="post.php#1"><img src="img/gear.png"></a></div>
							</div>	
						</div>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						
					</div>	

					




				</div>
				<div class="bright">
					<div class="right">
						<div class="db">
							<div class="dbu mess"><a href="mess.php"><img src="img/mess.jpg"></a></div>
							<div class="dbu post"><img src="img/post.png"></div>
							<div class="dbu camera"><img src="img/camera.png"></div>
							<div class="dbu setting"><a href="setting.php"><img src="img/gear.png"></a></div>
						</div>
						
						<div class="se search">
							<input type="text" search="search" id="serach" placeholder="search">
							<div class="line"></div>
						</div>
						<div class="or order">
							<p>Orders</p>
							<div class="line"></div>
						</div>
						<div class="no notification">
							<p>Notifications</p>
							<div class="line"></div>

						</div>
						
					</div>
				</div>
			</div>
		</div>
		<script src="java.js"></script>
	</body>
</html>