<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>User Dashboard</title>
    <style>
body {
  background-image: url('dash.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
</head>
<body>
    <div class="container1" >
        <div style= "background-color: yellow"; > <h1>Welcome to Dashboard of our Department </h1>
        
        <pre> <h2><b>About us</b></h2>
      <b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
       aliquam temporibus maxime laboriosam. Reprehenderit labore quidem ad,
      laborum perferendis repudiandae.</b>
      
      </div>
        </pre>
<div>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
  <div class="carousel-item">
      <img src="r1.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="ravi.webp" class="d-block w-100" alt="...">
    </div>
    
    <div class="carousel-item">
      <img src="r2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</body>
</html>