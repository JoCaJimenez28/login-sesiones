<?
$usuario = $_POST['usuario'];
$pws = $_POST['pws'];
$pwsCifrado = password_hash($pws, PASSWORD_DEFAULT);

if (!empty($usuario) && !empty($pws)) {

    $con = mysqli_connect('localhost', 'JoseCarlos', '1234');
    if (!$con)
        die('No se pudo conectar: ' . mysqli_error($con));
    mysqli_select_db($con, 'login');
    $sql = "SELECT usuario, pws FROM usuarios WHERE usuario = ' " . $usuario . " ' and pws = ' " . $pwsCifrado . " ' ";
    $result = mysqli_query($con, $sql);
    mysqli_close($con);
    echo '<p> Si existe </p>';
} else {
    echo '<p> Los campos no deben de estar vacios o algún dato es incorrecto </p>';
}

?>