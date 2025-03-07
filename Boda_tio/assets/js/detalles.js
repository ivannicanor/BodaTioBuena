document.addEventListener("DOMContentLoaded", () => {
    // Animación inicial de las feature-cards
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 200); // Animación escalonada
    });
  
    // ===== LÓGICA DEL POP-UP DE ALERGIAS =====
  
    // Elementos del DOM
    const openAlergiasBtn = document.getElementById("openAlergiasBtn");
    const closeAlergiasBtn = document.getElementById("closeAlergiasBtn");
    const alergiasOverlay = document.getElementById("alergiasOverlay");
    const alergiasForm = document.getElementById("alergiasForm");
    const alergiasResponse = document.getElementById("alergiasResponse");
  
    // Abrir el modal
    openAlergiasBtn.addEventListener("click", () => {
      alergiasOverlay.classList.add("show");
    });
  
    // Cerrar el modal al hacer clic en la “X”
    closeAlergiasBtn.addEventListener("click", () => {
      alergiasOverlay.classList.remove("show");
      alergiasResponse.textContent = ""; // Limpia mensaje previo
    });
  
    // Cerrar si se hace clic fuera del contenido modal (opcional)
    alergiasOverlay.addEventListener("click", (e) => {
      if (e.target === alergiasOverlay) {
        alergiasOverlay.classList.remove("show");
        alergiasResponse.textContent = "";
      }
    });
  
    // Manejar el submit del formulario de alergias
    alergiasForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Obtener datos del formulario
      const nombreAlergeno = document.getElementById("nombre_alergeno").value;
      const alergias = document.getElementById("alergias").value;
  
      // Preparar los datos para enviar por POST
      // Ejemplo usando fetch y URLSearchParams
      const formData = new URLSearchParams();
      formData.append("nombre", nombreAlergeno);
      formData.append("alergias", alergias);
  
      fetch("../assets/php/insert_alergenos.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.text())
        .then((data) => {
          // data puede ser un mensaje del servidor, un JSON, etc.
          alergiasResponse.textContent = "¡Alergias registradas correctamente!";
          // Limpiar campos del formulario
          alergiasForm.reset();
        })
        .catch((error) => {
          console.error(error);
          alergiasResponse.textContent = "Error al registrar alergias. Intenta más tarde.";
        });
    });
  });