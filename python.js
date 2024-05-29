const terminalArea = document.getElementById("terminalArea");
const lineContainer = document.querySelector(".lineContainer");

terminalArea.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (e.target.value == "download()" || e.target.value == "download") {
      const promptValue = prompt("Quel fichier souhaitez vous télécharger ?");
      window.open("python/" + promptValue);
    }
    lineContainer.innerHTML += `
      <div class="line">
          <span>>>></span>
      </div> `;
  }
});
