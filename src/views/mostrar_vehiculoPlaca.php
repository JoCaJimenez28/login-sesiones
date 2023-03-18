<head>
<style>
table {
border-collapse: collapse;
}
table, td, th {
border: 1px solid black;
padding: 5px;
}
th {
text-align: left;
}
</style>
</head>
<body>
<?php
$con = mysqli_connect('localhost','Lozi','1234'); 
if (!$con) {
die('No se pudo conectar: ' . mysqli_error($con)); 
}
mysqli_select_db($con,'car_data');
$sql = "SELECT * FROM carlist WHERE placa =  ";
$result = mysqli_query($con,$sql); 
echo "<table>
<tr>
<th>Placa</th>
<th>Tipo de vehículo</th>
<th>Marca</th>   
<th>Modelo</th>
<th>Versión del modelo</th>
<th>Número de Serie</th>
<th>Accion</th>
</tr>";
while($ren = mysqli_fetch_array($result)) { 
echo "<tr>";
echo '<td placa="placaren">' . $ren['placa'] . '</td>';
echo "<td>" . $ren['tipoDeVehiculo'] . "</td>";
echo "<td>" . $ren['marca'] . "</td>";
echo "<td>" . $ren['modelo'] . "</td>";
echo "<td>" . $ren['versionDeModelo'] . "</td>";
echo '<td>' . $ren['numeroDeSerie'] . "</td>";
echo "<td>";
echo " <form method='Post'>";
 echo " <input type='image' src='img/borrar.jpg' value='Borra Todo' 
 onclick='borrarVehiculo3(".$ren['placa'].")'>";
echo " </form>";
echo "</td>";
echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>