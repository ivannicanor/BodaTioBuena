<?php
header('Content-Type: application/json');
include 'conexion.php'; // Conectar a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["nombre"]) && isset($_POST["participantes"])) {
        $nombre = $_POST["nombre"];
        $participantes = $_POST["participantes"];

        // Preparar la consulta
        $sql = "INSERT INTO Participantes (nombre, participantes) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            echo json_encode([
                "status" => "error",
                "message" => "Error en la preparación de la consulta."
            ]);
            exit;
        }
        $stmt->bind_param("si", $nombre, $participantes);

        if ($stmt->execute()) {
            echo json_encode([
                "status" => "success",
                "message" => "Participante registrado correctamente."
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Error al registrar participante."
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
