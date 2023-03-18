<?php
$con = mysqli_connect('localhost','Lozi','1234'); 
if (!$con) 
die('No se pudo conectar: ' . mysqli_error($con)); 
$placa = $_POST['placa'];
mysqli_select_db($con,'car_data'); 
$sql="DELETE FROM carlist Where placa='".$placa."'"; 
$result = mysqli_query($con,$sql); 
mysqli_close($con);
?>