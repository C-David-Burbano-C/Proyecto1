// botón modo oscuro bonito
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// interacción - párrafo con dato curioso
const info = document.createElement("p");
info.textContent = "Haz clic para saber un dato curioso";

info.style.cssText = `
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1em;
    margin: 30px auto;
    padding: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    max-width: 500px;
    font-weight: 500;
    backdrop-filter: blur(10px);
`;

document.body.appendChild(info);

let mostrandoDato = false;

info.addEventListener("click", () => {
    if (!mostrandoDato) {
        info.textContent = "Los lobos pueden recorrer más de 50 km al día.";
        info.style.background = "rgba(255, 152, 0, 0.2)";
        info.style.borderColor = "rgba(255, 152, 0, 0.5)";
        mostrandoDato = true;
    } else {
        info.textContent = "Haz clic para saber un dato curioso";
        info.style.background = "rgba(255, 255, 255, 0.1)";
        info.style.borderColor = "rgba(255, 255, 255, 0.2)";
        mostrandoDato = false;
    }
});

info.addEventListener("mouseenter", () => {
    info.style.transform = "scale(1.02)";
    info.style.boxShadow = "0 8px 20px rgba(255, 152, 0, 0.3)";
});

info.addEventListener("mouseleave", () => {
    info.style.transform = "scale(1)";
    info.style.boxShadow = "none";
});
