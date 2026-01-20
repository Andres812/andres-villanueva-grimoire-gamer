function selectGrimoire(type) {
  localStorage.setItem("grimoire", type);

  const modal = document.getElementById("selectionModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const data = {
    pica: {
      title: "♠ Grimorio de la Pica",
      text: "Has elegido el sigilo, la oscuridad y la energía fría."
    },
    corazon: {
      title: "♥ Grimorio del Corazón",
      text: "Has elegido la pasión ardiente y el poder de la realeza."
    },
    trebol: {
      title: "♣ Grimorio del Trébol",
      text: "Has elegido la fuerza de la naturaleza y la vitalidad eterna."
    },
    diamante: {
      title: "♦ Grimorio del Diamante",
      text: "Has elegido la elegancia, el hielo y la precisión."
    }
  };

  title.innerText = data[type].title;
  text.innerText = data[type].text;

  modal.classList.remove("d-none");
}

function closeModal() {
  document.getElementById("selectionModal").classList.add("d-none");
}
