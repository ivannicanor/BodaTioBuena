// contacto.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");

    // Animación de aparición para el formulario
    const formElement = document.querySelector(".contact-form");
    formElement.style.opacity = 0;
    formElement.style.transform = "translateY(20px)";
    setTimeout(() => {
        formElement.style.transition = "all 0.6s ease";
        formElement.style.opacity = 1;
        formElement.style.transform = "translateY(0)";
    }, 200);

    // Enviar formulario
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar recarga de página

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Mostrar respuesta simulada
        formResponse.textContent = `¡Gracias, ${name}! Hemos recibido tu mensaje y te responderemos pronto.`;
        formResponse.style.color = "#0A1F44";

        // Animación de respuesta
        formResponse.style.opacity = 0;
        formResponse.style.transform = "translateY(20px)";
        setTimeout(() => {
            formResponse.style.transition = "all 0.6s ease";
            formResponse.style.opacity = 1;
            formResponse.style.transform = "translateY(0)";
        }, 200);

        // Reiniciar formulario
        form.reset();
    });
});
