const slides = document.querySelectorAll(".carrusel-slide");
const indicadores = document.querySelectorAll(".indicador");

const botonAnterior = document.querySelector(".anterior");
const botonSiguiente = document.querySelector(".siguiente");

const contenedor = document.querySelector(".carrusel-contenedor");

let imagenActual = 0;

// Determinar cuántas imágenes se muestran
function obtenerImagenesVisibles() {

    if (window.innerWidth <= 550) {
        return 1;
    }

    if (window.innerWidth <= 850) {
        return 2;
    }

    return 3;
}

// Mostrar las imágenes
function mostrarImagen(indice) {

    let maximo = slides.length - obtenerImagenesVisibles();

    // Evitar superar los límites
    imagenActual = Math.max(0, Math.min(indice, maximo));

    // Desplazar el carrusel
    contenedor.style.transform =
        `translateX(-${imagenActual * 25}%)`;

    // Actualizar indicadores
    indicadores.forEach((indicador, i) => {

        indicador.classList.toggle(
            "activo",
            i === imagenActual
        );

        indicador.hidden = i > maximo;
    });
}

// Botón siguiente
botonSiguiente.addEventListener("click", () => {
    mostrarImagen(imagenActual + 1);
});

// Botón anterior
botonAnterior.addEventListener("click", () => {
    mostrarImagen(imagenActual - 1);
});

// Indicadores
indicadores.forEach((indicador, indice) => {

    indicador.addEventListener("click", () => {
        mostrarImagen(indice);
    });

});

// Adaptar el carrusel al cambiar el tamaño
window.addEventListener("resize", () => {
    mostrarImagen(imagenActual);
});

// Inicializar
mostrarImagen(0);
