id = document.getElementById("identifiant");
pw = document.getElementById("password");
sub = document.getElementById("sub");

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "g") {
    window.addEventListener("keydown", (e) => {
      if (e.key == "u") {
        window.addEventListener("keydown", (e) => {
          if (e.key == "i") {
            window.addEventListener("keydown", (e) => {
              if (e.key == "g") {
                window.addEventListener("keydown", (e) => {
                  if (e.key == "u") {
                    window.addEventListener("keydown", (e) => {
                      if (e.key == "i") {
                        window.addEventListener("keydown", (e) => {
                          if (e.key == "l") {
                            window.addEventListener("keydown", (e) => {
                              if (e.key == "e") {
                                window.addEventListener("keydown", (e) => {
                                  if (e.key == "b") {
                                    window.addEventListener("keydown", (e) => {
                                      if (e.key == "g") {
                                        window.open("esteban3.html");
                                      }
                                    });
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
sub.addEventListener("click", () => {
  if (id.value == "41234015" && pw.value == "minecraft") {
    window.open("./esteban4.html");
  }
});
