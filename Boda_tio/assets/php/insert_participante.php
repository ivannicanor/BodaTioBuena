<?php
include 'conexion.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $participantes = $_POST["participantes"];

    // Preparar la consulta
    $sql = "INSERT INTO Participantes (nombre, participantes) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $nombre, $participantes);

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
