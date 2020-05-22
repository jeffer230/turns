<!DOCTYPE html>
<html>
	<!-- head -->
	<?php require_once('partials/head.php'); ?>
	<!-- body -->
	<body>
		<!-- header -->
		<?php require_once('partials/header.php'); ?>
		<!-- section -->
		<section class="section">
			<h1>Iniciar Sesion</h1>
			<center>
				<div class="div_login">
					<div class="imgcontainer">
					    <img src="img/avatar.png" alt="Avatar" class="avatar">
					</div>
				  	<div class="container">
					    <label for="email">
					    	<b>Email</b>
					    </label>
					    <input type="email" 
				    		id="email" 
				    		placeholder="Email" 
				    		name="email" 
				    		required 
				    		class="input_login">

					    <label for="password">
					    	<b class="text_left">Contraseña</b>
					    </label>
					    <input type="password" 
				    		id="password" 
				    		placeholder="Contraseña" 
				    		name="password" 
				    		required 
				    		class="input_login">
				    	<button class="button" id="signin">Ingresar</button> 
				  	</div>
				</div>
			</center>
		</section>
	</body>
</html>