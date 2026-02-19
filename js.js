// botón modo oscuro
const btn = document.createElement("button");
btn.textContent = "Cambiar modo";
document.body.prepend(btn);

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
});

// interacción
const info = document.createElement("p");
info.textContent = "Haz clic para saber un dato curioso";
document.body.appendChild(info);

info.addEventListener("click", ()=>{
    info.textContent = "Los lobos pueden recorrer más de 50 km al día.";
})