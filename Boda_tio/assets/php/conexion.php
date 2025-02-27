<?php
$servername = "srv1789.hstgr.io";         // Por ejemplo: "localhost" o "mysql.hostinger.com"
$username   = "u582734326_sergio";  // Usuario que creaste en el panel
$password   = "LuisYMamen$2002"; // Contraseña que asignaste
$dbname     = "u582734326_bodaLuisYMamen";   // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
echo "Conexión exitosa";
?>
