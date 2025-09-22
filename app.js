// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Referencias a los elementos
const inputAmigo   = document.getElementById("amigo");
const listaAmigos  = document.getElementById("listaAmigos");
const resultado    = document.getElementById("resultado");

// Arreglo para guardar los nombres
let amigos = [];

// Agregar nombre a la lista
function agregarAmigo() {
  const nombre = inputAmigo.value.trim();

  if (nombre === "") {
    alert("Por favor ingrese un nombre válido.");
    return;
  }

  // Agregar al arreglo
  amigos.push(nombre);

  // Crear y mostrar elemento en la lista
  const li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  // Limpiar el input y dar foco
  inputAmigo.value = "";
  inputAmigo.focus();
}

// Sortear amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debe agregar al menos un nombre para sortear.");
    return;
  }

  // Limpiar resultado anterior
  resultado.innerHTML = "";

  // Seleccionar un nombre aleatorio
  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  // Mostrar la lista de resultado
  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
  resultado.appendChild(li);
}

// Permitir agregar con la tecla Enter
inputAmigo.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();   
    agregarAmigo();           
  }
});

