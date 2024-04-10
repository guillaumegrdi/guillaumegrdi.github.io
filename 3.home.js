const li1 = document.getElementById("li-1");
const li2 = document.getElementById("li-2");
const li3 = document.getElementById("li-3");
const li4 = document.getElementById("li-4");
const li5 = document.getElementById("li-5");
const bluespan1 = document.querySelector(".bluespan1");
const bluespan2 = document.querySelector(".bluespan2");
const bluespan3 = document.querySelector(".bluespan3");
const bluespan4 = document.querySelector(".bluespan4");
const bluespan5 = document.querySelector(".bluespan5");
const zoombtn1 = document.getElementById("zoom-btn1");
const zoombtn2 = document.getElementById("zoom-btn2");
const zoombtn3 = document.getElementById("zoom-btn3");
const zoombtn4 = document.getElementById("zoom-btn4");
const zoombtn5 = document.getElementById("zoom-btn5");
const imagetozoom1 = document.getElementById("imagetozoom1");
const imagetozoom2 = document.getElementById("imagetozoom2");
const imagetozoom3 = document.getElementById("imagetozoom3");
const imagetozoom4 = document.getElementById("imagetozoom4");
const imagetozoom5 = document.getElementById("imagetozoom5");
const lecteur = document.querySelector(".lecteur");
const lecteurcontainer = document.querySelector(".lecteur-container");
const closebtn = document.getElementById("close-btn");
imagetozoom2.style.marginTop = "-50px";
const blancsouris = document.getElementById("blancsouris");
const body = document.querySelector("body");
const replaybtn = document.getElementById("replay-btn");

li1.addEventListener("click", (e) => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});
li2.addEventListener("click", (e) => {
  window.scrollTo({
    top: 2300,
    behavior: "smooth",
  });
});
li3.addEventListener("click", (e) => {
  window.scrollTo({
    top: 5250,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY <= 400) {
    li1.style.backgroundColor = "";
  }
  if (window.scrollY >= 400) {
    li1.style.backgroundColor = "rgb(43, 110, 49)";
  }
  if (window.scrollY < 2300) {
    li2.style.backgroundColor = "";
  }
  if (window.scrollY >= 2300) {
    li1.style.backgroundColor = "";
    li2.style.backgroundColor = "rgb(43, 110, 49)";
  }
  if (window.scrollY <= 5250) {
    li1.style.backgroundColor = "";
    li2.style.backgroundColor = "rgb(43, 110, 49)";
    li3.style.backgroundColor = "";
  }

  if (window.scrollY >= 5250) {
    li1.style.backgroundColor = "";
    li2.style.backgroundColor = "";
    li3.style.backgroundColor = "rgb(43, 110, 49)";
  }
});

zoombtn1.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="Alpha_v1.1.1.webp" alt="" id="imagetozoom1" />`;
  const imagetozoom1 = document.getElementById("imagetozoom1");
  imagetozoom1.style.width = "1000px";
  imagetozoom1.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

zoombtn2.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="nager.webp" alt="" id="imagetozoom2" />`;
  const imagetozoom2 = document.getElementById("imagetozoom2");
  imagetozoom2.style.width = "1000px";
  imagetozoom2.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

zoombtn3.addEventListener("click", () => {
  replaybtn.style.visibility = "hidden";
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<video src="./Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4" id="imagetozoom3" autoplay muted></video> `;
  const imagetozoom3 = document.getElementById("imagetozoom3");
  imagetozoom3.style.width = "1000px";
  imagetozoom3.style.height = "550px";
  imagetozoom3.addEventListener("timeupdate", (e) => {
    console.log(e);
  });
  imagetozoom3.addEventListener("load", (e) => {
    console.log(e);
  });
  imagetozoom3.addEventListener("pause", () => {
    replaybtn.style.visibility = "visible";
    console.log(replaybtn);
  });
});
zoombtn4.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="autumn-wooden-house-poster.avif" alt="" id="imagetozoom4" />`;
  const imagetozoom4 = document.getElementById("imagetozoom4");
  imagetozoom4.style.width = "1000px";
  imagetozoom4.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});
zoombtn5.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="arcdetriomphe.jpg" alt="" id="imagetozoom5" />`;
  const imagetozoom5 = document.getElementById("imagetozoom5");
  imagetozoom5.style.width = "1000px";
  imagetozoom5.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

replaybtn.addEventListener("click", (e) => {
  replaybtn.style.visibility = "hidden";
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<video src="./Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4" id="imagetozoom3" autoplay muted></video>`;
  const imagetozoom3 = document.getElementById("imagetozoom3");
  imagetozoom3.style.width = "1000px";
  imagetozoom3.style.height = "550px";
  imagetozoom3.addEventListener("timeupdate", (e) => {
    console.log(e);
  });
  imagetozoom3.addEventListener("pause", () => {
    replaybtn.style.visibility = "visible";
    console.log(replaybtn);
  });
});

bluespan1.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="Alpha_v1.1.1.webp" alt="" id="imagetozoom1" />`;
  const imagetozoom1 = document.getElementById("imagetozoom1");
  imagetozoom1.style.width = "1000px";
  imagetozoom1.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

bluespan2.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="nager.webp" alt="" id="imagetozoom2" />`;
  const imagetozoom2 = document.getElementById("imagetozoom2");
  imagetozoom2.style.width = "1000px";
  imagetozoom2.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

bluespan3.addEventListener("click", () => {
  replaybtn.style.visibility = "hidden";
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<video src="./video-sans-titre-realisee-avec-clipchamp_eEAm4jvf.mp4" id="imagetozoom3" autoplay muted ></video> `;
  const imagetozoom3 = document.getElementById("imagetozoom3");
  imagetozoom3.style.width = "1000px";
  imagetozoom3.style.height = "550px";
  imagetozoom3.addEventListener("pause", () => {
    replaybtn.style.visibility = "visible";
    console.log(replaybtn);
  });
});

bluespan4.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="autumn-wooden-house-poster.avif" alt="" id="imagetozoom4" />`;
  const imagetozoom4 = document.getElementById("imagetozoom4");
  imagetozoom4.style.width = "1000px";
  imagetozoom4.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});
bluespan5.addEventListener("click", () => {
  lecteur.style.display = "block";
  lecteurcontainer.innerHTML = `<img src="arcdetriomphe.jpg" alt="" id="imagetozoom5" />`;
  const imagetozoom5 = document.getElementById("imagetozoom5");
  imagetozoom5.style.width = "1000px";
  imagetozoom5.style.height = "550px";
  replaybtn.style.visibility = "hidden";
});

closebtn.addEventListener("click", () => {
  lecteur.style.display = "none";
  imagetozoom1.style.width = "500px";
  imagetozoom1.style.marginTop = "-20px";
  imagetozoom2.style.width = "500px";
  imagetozoom2.style.marginTop = "-50px";
});

lecteurcontainer.addEventListener("click", () => {
  lecteur.style.display = "none";
  imagetozoom1.style.width = "500px";
  imagetozoom1.style.marginTop = "-20px";
  imagetozoom2.style.width = "500px";
  imagetozoom2.style.marginTop = "-50px";
});

window.addEventListener("mousemove", (e) => {
  blancsouris.style.left = e.pageX + "px";
  blancsouris.style.top = e.pageY - window.scrollY + "px";
  blancsouris.style.transform = "translate(-25px, -25px)";
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    lecteur.style.display = "none";
    imagetozoom1.style.width = "500px";
    imagetozoom1.style.marginTop = "-20px";
    imagetozoom2.style.width = "500px";
    imagetozoom2.style.marginTop = "-50px";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key == "k") {
    window.addEventListener("keydown", (e) => {
      if (e.key == "o") {
        window.addEventListener("keydown", (e) => {
          if (e.key == "n") {
            window.addEventListener("keydown", (e) => {
              if (e.key == "a") {
                window.addEventListener("keydown", (e) => {
                  if (e.key == "m") {
                    window.addEventListener("keydown", (e) => {
                      if (e.key == "i") {
                        window.addEventListener("keydown", (e) => {
                          if (e.key == "c") {
                            window.addEventListener("keydown", (e) => {
                              if (e.key == "o") {
                                window.addEventListener("keydown", (e) => {
                                  if (e.key == "d") {
                                    window.addEventListener("keydown", (e) => {
                                      if (e.key == "e") {
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

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key == "ArrowRight") {
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp") {
        window.addEventListener("keydown", (e) => {
          if (e.key == "ArrowDown") {
            window.addEventListener("keydown", (e) => {
              if (e.key == "ArrowLeft") {
                window.addEventListener("keydown", (e) => {
                  if (e.key == "a") {
                    window.addEventListener("keydown", (e) => {
                      if (e.key == "ArrowRight") {
                        window.addEventListener("keydown", (e) => {
                          if (e.key == "b") {
                            window.addEventListener("keydown", (e) => {
                              if (e.key == "ArrowRight") {
                                window.addEventListener("keydown", (e) => {
                                  if (e.key == "a") {
                                    window.addEventListener("keydown", (e) => {
                                      if (e.key == "b") {
                                        window.addEventListener(
                                          "keydown",
                                          (e) => {
                                            if (e.key == "ArrowLeft") {
                                              window.addEventListener(
                                                "keydown",
                                                (e) => {
                                                  if (e.key == "Escape") {
                                                    window.open("2.loup.html");
                                                  }
                                                }
                                              );
                                            }
                                          }
                                        );
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
