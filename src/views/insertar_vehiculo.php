<?php
$id = intval($_POST['id']);
$placa = ($_POST['placa']);
$tipoDeVehiculo = $_POST['tipo'];
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$vesionDeModelo = intval($_POST['version']);
$numeroDeSerie = intval($_POST['nserie']);
$pws = $_POST['pws'];
$pwsCifrado = password_hash($pws, PASSWORD_DEFAULT);
$con = mysqli_connect('localhost', 'Lozi', '1234');
if (!$con)
    die('No se pudo conectar: ' . mysqli_error($con));
mysqli_select_db($con, 'car_data');
$sql = "INSERT INTO carlist(id, placa, tipoDeVehiculo, marca, modelo, versionDeModelo, numeroDeSerie, pws)";
$sql = $sql . " VALUES(" . $id . ", '" . $placa . "','" . $tipoDeVehiculo . "' ,'" . $marca . "' ,'" . $modelo . "' ," . $vesionDeModelo . ", " . $numeroDeSerie . ", '" . $pwsCifrado . "')";
$result = mysqli_query($con, $sql);
mysqli_close($con);
?>