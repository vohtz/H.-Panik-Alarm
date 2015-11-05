<?php 
	header('Access-Control-Allow-Origin: *'); 
?>
<!DOCTYPE html>
<html>
<head>
	<title>Hesehus Alarm</title>
	<link rel="stylesheet" type="text/css" href="stylesheets/style.css">
	<meta charset="utf-8">
	<!--[if lt IE 9]>
	   <script>
	      document.createElement('header');
	      document.createElement('nav');
	      document.createElement('section');
	      document.createElement('article');
	      document.createElement('aside');
	      document.createElement('footer');
	   </script>
	<![endif]-->

</head>
<body>
	<header>
		<img src="images/LogoHesehusWhite.png">
	</header>
	<main role="main">
		<div class="indicator circle"></div>
		<div id="list" class="list">
			<!-- JSON content get here -->
		</div>
	</main>
	<footer>
	</footer>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script type="text/javascript" src="js/js.js"></script>
</body>
</html>