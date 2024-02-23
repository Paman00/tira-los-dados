import { createDado } from "./dado.js";

const canvas = document.querySelector(".canvas");

renderDados(1, getCaraRandom());
function renderDados(number, initialFace = 1) {
    canvas.innerHTML = "";
    for (let i = 1; i <= number; i++) {
        canvas.innerHTML += createDado(initialFace);
    }
}

const modal = document.getElementById("modal");
const form = document.getElementById("modal-form");

const spanTiradasMaximas = document.getElementById("n-tiros-max");
const spanTiradasRealizadas = document.getElementById("n-tiros-real");
const spanTiradasRestantes = document.getElementById("n-tiros-rest");

let tiradasMaximas = 0;
let tiradas = 0;

function setTiradas(newTiradas) {
    tiradas = newTiradas;
    spanTiradasRealizadas.textContent = tiradas;
    spanTiradasRestantes.textContent = tiradasMaximas - tiradas;
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    const nDados = formData.get("n-dados");
    renderDados(nDados);
    const nTiradas = formData.get("n-tiros");

    tiradasMaximas = nTiradas;
    spanTiradasMaximas.textContent = tiradasMaximas;

    setTiradas(0);
    start();
});

function start() {
    modal.classList.add("hidden");
    const dados = document.querySelectorAll(".dado");

    const button = document.getElementById("btn-lanzar");

    button.addEventListener("click", () => {
        button.disabled = true;
        if (tiradas < tiradasMaximas) {
            lanzarDados();
            if (tiradas == tiradasMaximas) {
                button.textContent = "Se acabaron los tiros";
                return;
            }
            setTimeout(() => {
                button.disabled = false;
            }, 900);
        }
    });

    function lanzarDados() {
        setTiradas(tiradas + 1);
        if (tiradas <= tiradasMaximas) {
            dados.forEach(dado => {
                let cara = getCaraRandom();
                dado.className = `dado dado--cara-${cara}`;
            });
        }
    }
}

function getCaraRandom() {
    return Math.floor(Math.random() * 6) + 1;
}
