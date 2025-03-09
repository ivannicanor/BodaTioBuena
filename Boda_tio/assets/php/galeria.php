<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galería de Fotos</title>
    <!-- Fancybox CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
  <!-- Puedes incluir estilos base o frameworks CSS si lo deseas -->
  <link rel="stylesheet" href="../css/general.css">
  <link rel="stylesheet" href="../css/galeria.css">
 
</head>
<body>
    <header>
    <nav>
      <div class="logo">
        <a href="../../index.html"> 
          <img src="../imagenes/IMG_9840.jpg" alt="Logo" />
        </a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="../../index.html">Inicio</a></li>
        <li><a href="../../pages/detallesEvento.html">Detalles del evento</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="upload-section">
      <h2>Sube tu foto</h2>
      <form id="uploadForm" action="./upload_imagen.php" method="POST" enctype="multipart/form-data">
        <div class="form-group">
          <label for="imagen">Selecciona una imagen:</label>
          <input type="file" name="imagen" id="imagen" accept="image/*" required>
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción (opcional):</label>
          <textarea name="descripcion" id="descripcion" placeholder="Describe tu foto"></textarea>
        </div>
        <button type="submit" class="submit-button">Subir Imagen</button>
      </form>
      <div id="uploadResponse"></div>
    </section>

    <section class="gallery-section">
      <h2>Galería</h2>
      <div class="gallery-container">
      <?php
          // Conectar a la base de datos e incluir las imágenes
          include 'conexion.php';
          $query = "SELECT * FROM imagenes ORDER BY fecha_subida DESC";
          $result = $conn->query($query);
          if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()){
              echo '<div class="gallery-item">';
              // Envolvemos la imagen en un enlace para Fancybox
              echo '<a href="' . $row["ruta"] . '" data-fancybox="gallery">';
              echo '<img src="' . $row["ruta"] . '" alt="Imagen subida">';
              echo '</a>';
              if (!empty($row["descripcion"])) {
                echo '<p>' . $row["descripcion"] . '</p>';
              }
              echo '</div>';
            }
          } else {
            echo "<p>No hay imágenes subidas.</p>";
          }
          $conn->close();
        ?>
      </div>
    </section>
  </main>

  <!-- Aquí puedes agregar scripts JS para mejorar la experiencia (ej. AJAX para la subida, Lightbox para ver imágenes, etc.) -->
  <script src="../js/galeria.js"></script>
  <script src="../js/header.js"></script>
   <!-- Fancybox JS -->
   <script type="module">
    // Limpia el hash de la URL si existe
    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js";
    Fancybox.bind('[data-fancybox="gallery"]', {
      hash: false,
    });
  </script>
</body>
</html>
