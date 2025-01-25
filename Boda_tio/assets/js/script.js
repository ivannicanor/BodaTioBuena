
// Seleccionamos el header
const header = document.querySelector('header');

// Añadimos un evento de scroll para el header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
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

