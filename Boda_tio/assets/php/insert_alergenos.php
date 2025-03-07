<?php
header('Content-Type: application/json');
include 'conexion.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nombre"]) && isset($_POST["alergias"])) {
        $nombre = $_POST["nombre"];
        $alergias = $_POST["alergias"];

        // Preparar la consulta
        $sql = "INSERT INTO Alergenos (nombre, alergias) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            echo json_encode([
                "status" => "error",
                "message" => "Error en la preparación de la consulta."
            ]);
            exit;
        }
        $stmt->bind_param("ss", $nombre, $alergias);

        if ($stmt->execute()) {
            echo json_encode([
                "status" => "success",
                "message" => "Alergeno registrado correctamente."
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Error al registrar alergeno."
            ]);
        }
        $stmt->close();
        $conn->close();
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Parámetros faltantes."
        ]);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Método HTTP no permitido."
    ]);
}
?>
