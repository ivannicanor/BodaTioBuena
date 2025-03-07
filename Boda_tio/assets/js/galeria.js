document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    const uploadResponse = document.getElementById("uploadResponse");
  
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(uploadForm);
  
      fetch(uploadForm.action, {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        uploadResponse.textContent = data.message;
        if (data.status === "success") {
          uploadForm.reset();
          location.reload(); // Recarga toda la página
          // Opcional: recargar la galería sin recargar toda la página
          // Podrías llamar a una función que haga fetch de las imágenes y actualice .gallery-container
        }
      })
      .catch(error => {
        console.error(error);
        uploadResponse.textContent = "Error en la subida de la imagen.";
      });
    });
  });
  