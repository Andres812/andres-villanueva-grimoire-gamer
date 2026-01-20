// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".grimoire-card");
  const output = document.getElementById("selectedGrimoire");
  const storageOutput = document.getElementById("storageOutput");

  // Cargar último grimorio guardado
  const lastGrimoire = localStorage.getItem("grimorioSeleccionado");
  if (lastGrimoire) {
    output.textContent = lastGrimoire;
  }

  // Mostrar todo el localStorage
  function mostrarStorage() {
    let contenido = "";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      contenido += `${key}: ${localStorage.getItem(key)}\n`;
    }
    storageOutput.textContent = contenido || "LocalStorage vacío";
  }

  mostrarStorage();

  // Asignar evento a cada carta
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const nombre = card.querySelector(".card-title").textContent;

      // Guardar en localStorage
      localStorage.setItem("grimorioSeleccionado", nombre);

      // Actualizar DOM
      output.textContent = nombre;
      mostrarStorage();
    });
  });
});
