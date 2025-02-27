<?php
include 'conexion.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $alergias = $_POST["alergias"];

    // Preparar la consulta
    $sql = "INSERT INTO Alergenos (nombre, alergias) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $nombre, $alergias);

    if ($stmt->execute()) {
        echo "<script>
                alert('Tu mensaje ha quedado registrado.');
                window.location.href = '../../index.html';
              </script>";
    } else {
        echo "<script>
                alert('Error al guardar. Inténtalo de nuevo.');
                window.history.back();
              </script>";
    }

    $stmt->close();
    $conn->close();
}
?>
