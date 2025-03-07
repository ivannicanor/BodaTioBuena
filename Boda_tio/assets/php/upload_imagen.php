<?php
header('Content-Type: application/json');
include 'conexion.php';

// Configuración
$uploadDir = "../imagenes/uploads/"; // Asegúrate de que la ruta sea correcta y tenga permisos de escritura
$allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {
        $file = $_FILES['imagen'];
        // Validar tipo de archivo
        if (!in_array($file['type'], $allowedTypes)) {
            echo json_encode(["status" => "error", "message" => "Tipo de archivo no permitido."]);
            exit;
        }
        // Opcional: Validar tamaño máximo, por ejemplo 5MB
        $maxSize = 5 * 1024 * 1024;
        if ($file['size'] > $maxSize) {
            echo json_encode(["status" => "error", "message" => "El archivo es demasiado grande."]);
            exit;
        }
        // Generar un nombre único para la imagen
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $newFileName = uniqid("img_", true) . "." . $ext;
        $uploadFile = $uploadDir . $newFileName;

        // Mover el archivo a la carpeta deseada
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            // Guarda la información en la base de datos
            $rutaRelativa = "../imagenes/uploads/" . $newFileName; // La ruta relativa para mostrar en el front
            $descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : "";
            $stmt = $conn->prepare("INSERT INTO imagenes (nombre_archivo, ruta, descripcion) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $newFileName, $rutaRelativa, $descripcion);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Imagen subida correctamente."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al guardar en la base de datos."]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Error al mover el archivo."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No se ha enviado ningún archivo o ha ocurrido un error."]);
    }
    $conn->close();
} else {
    echo json_encode(["status" => "error", "message" => "Método HTTP no permitido."]);
}
?>
