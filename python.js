const terminalArea = document.getElementById("terminalArea");
const lineContainer = document.querySelector(".lineContainer");

terminalArea.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (e.target.value == 'print("hello world")') {
      e.target.value = `print("hello world")
hello world`;
      lineContainer.innerHTML += `
      <div class="line">
          <span>>>></span>
      </div> `;
    }

    if (e.target.value == 'download("triangle.py")') {
      window.open("./python/Triangle.py");
    }

    if (e.target.value == 'launch("triangle.py")') {
      function triangle() {
        let l1 = parseInt(
          prompt("veuillez entrer la longueur du premier coté :  ")
        );
        let l2 = parseInt(
          prompt("veuillez entrer la longueur du second coté  :  ")
        );
        let l3 = parseInt(
          prompt("veuillez entrer la longueur du dernier coté :  ")
        );

        function checkValue() {
          if (l1 == 0) {
            alert("veuillez entrer des valeurs correctes");
            triangle();
          }
          if (l2 == 0) {
            alert("veuillez entrer des valeurs correctes");
            triangle();
          }
          if (l3 == 0) {
            alert("veuillez entrer des valeurs correctes");
            triangle();
          }
        }
        checkValue();

        function checkTriangle() {
          if (l1 ** 2 + l2 ** 2 == l3 ** 2) {
            e.target.value = `launch("triangle.py")
le triangle est rectangle`;
          } else if (l2 ** 2 + l3 ** 2 == l1 ** 2) {
            e.target.value = `launch("triangle.py")
le triangle est rectangle`;
          } else if (l1 ** 2 + l3 ** 2 == l2 ** 2) {
            e.target.value = `launch("triangle.py")
le triangle est rectangle`;
          } else if (l1 + l2 == l3) {
            e.target.value = `launch("triangle.py")
le triangle est impossible`;
          } else if (l1 + l3 == l2) {
            e.target.value = `launch("triangle.py")
le triangle est impossible`;
          } else if (l3 + l2 == l1) {
            e.target.value = `launch("triangle.py")
le triangle est impossible`;
          } else {
            e.target.value = `launch("triangle.py")
le triangle n"est pas rectangle`;
          }
        }
        checkTriangle();
      }

      triangle();
      lineContainer.innerHTML += `
      <div class="line">
          <span>>>></span>
      </div> `;
    }

    // ---------------
    lineContainer.innerHTML += `
      <div class="line">
          <span>>>></span>
      </div> `;
  }
  if (e.key == "Backspace") {
    lineContainer.innerHTML = lineContainer.innerHTML;
  }
});
