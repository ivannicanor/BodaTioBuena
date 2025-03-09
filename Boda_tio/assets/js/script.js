document.addEventListener("DOMContentLoaded", () => {
    // Elementos del pop-up
    const openAsistenciaBtn = document.getElementById("openAsistenciaBtn");
    const closeAsistenciaBtn = document.getElementById("closeAsistenciaBtn");
    const asistenciaOverlay = document.getElementById("asistenciaOverlay");
    const asistenciaForm = document.getElementById("asistenciaForm");
    const asistenciaResponse = document.getElementById("asistenciaResponse");

    // Abrir el modal al pulsar el botón
    openAsistenciaBtn.addEventListener("click", () => {
      asistenciaOverlay.classList.add("show");
    });

    // Cerrar el modal al pulsar la "X"
    closeAsistenciaBtn.addEventListener("click", () => {
      asistenciaOverlay.classList.remove("show");
      asistenciaResponse.textContent = "";
    });

    // Cerrar si se hace clic fuera del contenido modal
    asistenciaOverlay.addEventListener("click", (e) => {
      if (e.target === asistenciaOverlay) {
        asistenciaOverlay.classList.remove("show");
        asistenciaResponse.textContent = "";
      }
    });

    // Enviar el formulario mediante fetch a insert_participante.php
    asistenciaForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombreParticipante = document.getElementById("nombre_participante").value;
      const cantidad = document.getElementById("cantidad").value;

      const formData = new URLSearchParams();
      formData.append("nombre", nombreParticipante);
      formData.append("participantes", cantidad);

      fetch("./assets/php/insert_participante.php", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          asistenciaResponse.textContent = "¡Participante registrado correctamente!";
          asistenciaForm.reset();
        })
        .catch(error => {
          console.error(error);
          asistenciaResponse.textContent = "Error al registrar participante. Intenta más tarde.";
        });
    });
    //detalles
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
  
      fetch("assets/php/insert_alergenos.php", {
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
// Seleccionamos todos los contenedores que queremos animar
const animatedContainers = document.querySelectorAll('.animate-on-scroll');

// Función para comprobar si el elemento está en el viewport (parcialmente visible)
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
};

// Función que aplica la animación
const handleScrollAnimation = () => {
    animatedContainers.forEach((container) => {
        if (isElementInViewport(container)) {
            container.classList.add('visible');
        }
    });
};

// Escuchamos el evento de scroll para animaciones
window.addEventListener('scroll', handleScrollAnimation);

// Ejecutamos la función al cargar la página
handleScrollAnimation();

// Seleccionamos todos los elementos con la clase gridCarts
const gridCarts = document.querySelectorAll('.grid-carts');

// Añadimos un evento de hover a cada gridCarts
gridCarts.forEach((cart) => {
    cart.addEventListener('mouseenter', () => {
        const overlay = cart.querySelector('a .overlay');
        if (overlay) {
            overlay.classList.add('hiddenOverlay');
        }
    });

    cart.addEventListener('mouseleave', () => {
        const overlay = cart.querySelector('a .overlay');
        if (overlay) {
            overlay.classList.remove('hiddenOverlay');
        }
    });
});

 
