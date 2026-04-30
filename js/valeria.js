const botonFrase = document.getElementById("btn-frase");
const frase = document.getElementById("frase");
const botonArriba = document.getElementById("btn-arriba");
const elementosReveal = document.querySelectorAll(".reveal");

botonFrase.addEventListener("click", function () {
    frase.textContent = "ESCORPIO ♏️: Apasionada, intensa y leal. Siempre dispuesta a profundizar en lo desconocido y enfrentar desafíos con valentía.";
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        botonArriba.classList.add("mostrar");
    } else {
        botonArriba.classList.remove("mostrar");
    }

    elementosReveal.forEach(function (elemento) {
        const posicion = elemento.getBoundingClientRect().top;
        const altoPantalla = window.innerHeight;

        if (posicion < altoPantalla - 100) {
            elemento.classList.add("activo");
        }
    });
});

botonArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});