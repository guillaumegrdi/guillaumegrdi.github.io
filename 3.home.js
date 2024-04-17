const title1 = document.getElementById("title-1");
const li1 = document.getElementById("li-1");
const li2 = document.getElementById("li-2");
const li3 = document.getElementById("li-3");
const li4 = document.getElementById("li-4");
const li5 = document.getElementById("li-5");
const text1 = document.getElementById("text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const text4 = document.querySelector(".text-4");
const text5 = document.querySelector(".text-5");
const text6 = document.querySelector(".text-6");
const text7 = document.querySelector(".text-7");
const text8 = document.querySelector(".text-8");
const tool1 = document.querySelector(".tool-1");
const tool2 = document.querySelector(".tool-2");
const tool3 = document.querySelector(".tool-3");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");
const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const miniimg9 = document.getElementById("miniimg9");
const miniimg10 = document.getElementById("miniimg10");
const miniimg11 = document.getElementById("miniimg11");
const miniimg12 = document.getElementById("miniimg12");
const miniimg13 = document.getElementById("miniimg13");
const sliderUp = document.getElementById("sliderUp");
const sliderDown = document.getElementById("sliderDown");
const slidertextarea = document.getElementById("slidertextarea");
let sliderValue = 0;
const tooltext1 = document.getElementById("tool-text-1");
const tooltext2 = document.getElementById("tool-text-2");
const tooltext3 = document.getElementById("tool-text-3");
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
console.log(text2);

li1.addEventListener("click", (e) => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});
li2.addEventListener("click", (e) => {
  window.scrollTo({
    top: 2500,
    behavior: "smooth",
  });
});
li3.addEventListener("click", (e) => {
  window.scrollTo({
    top: 5550,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY < 350) {
    li1.style.backgroundColor = "";
  }
  if (window.scrollY >= 350) {
    li1.style.backgroundColor = "rgb(43, 110, 49)";
  }
  if (window.scrollY < 400) {
    text1.style.animationName = "slidetextright";
    text1.style.animationDuration = "1000ms";
    text1.style.marginLeft = "200px";
  }

  if (window.scrollY >= 400) {
    text1.style.animationName = "slidetextleft";
    text1.style.animationDuration = "1000ms";
    text1.style.marginLeft = "50px";
  }

  if (window.scrollY < 1000) {
    text2.style.animationName = "disappearance1";
    text2.style.animationDuration = "400ms";
    text2.style.opacity = "0%";
    text3.style.animationName = "disappearance1";
    text3.style.animationDuration = "400ms";
    text3.style.opacity = "0%";
    text4.style.animationName = "disappearance1";
    text4.style.animationDuration = "400ms";
    text4.style.opacity = "0%";
    text5.style.animationName = "disappearance1";
    text5.style.animationDuration = "400ms";
    text5.style.opacity = "0%";
  }
  if (window.scrollY >= 1000) {
    text2.style.animationName = "appearance1";
    text2.style.animationDuration = "400ms";
    text2.style.opacity = "100%";
    text3.style.animationName = "appearance1";
    text3.style.animationDuration = "400ms";
    text3.style.opacity = "100%";
    text4.style.animationName = "appearance1";
    text4.style.animationDuration = "400ms";
    text4.style.opacity = "100%";
    text5.style.animationName = "appearance1";
    text5.style.animationDuration = "400ms";
    text5.style.opacity = "100%";
  }
  if (window.scrollY < 2300) {
    li2.style.backgroundColor = "";
  }
  if (window.scrollY >= 2300) {
    li1.style.backgroundColor = "";
  }

  if (window.scrollY < 2600) {
    tooltext1.style.animationName = "distoolslide";
    tooltext1.style.animationDuration = "2000ms";
    tooltext1.style.visibility = "hidden";
    tool1.style.animationName = "disrotateP";
    tool1.style.animationDuration = "2000ms";
  }
  if (window.scrollY < 2760) {
    tooltext2.style.animationName = "distoolslide";
    tooltext2.style.animationDuration = "2000ms";
    tooltext2.style.visibility = "hidden";
    tool2.style.animationName = "disrotate";
    tool2.style.animationDuration = "2000ms";
  }
  if (window.scrollY < 2960) {
    tooltext3.style.animationName = "distoolslide";
    tooltext3.style.animationDuration = "2000ms";
    tooltext3.style.visibility = "hidden";
    tool3.style.animationName = "disrotate";
    tool3.style.animationDuration = "2000ms";
  }
  if (window.scrollY >= 2600) {
    tooltext1.style.animationName = "toolslide";
    tooltext1.style.animationDuration = "2000ms";
    tooltext1.style.visibility = "visible";
    tool1.style.animationName = "rotateP";
    tool1.style.animationDuration = "2000ms";
    tool1.style.transform = "rotate(90)";
  }
  if (window.scrollY >= 2760) {
    tooltext2.style.animationName = "toolslide";
    tooltext2.style.animationDuration = "2000ms";
    tooltext2.style.visibility = "visible";
    tool2.style.animationName = "rotate";
    tool2.style.animationDuration = "2000ms";
    tool2.style.transform = "rotate(0)";
  }
  if (window.scrollY >= 2960) {
    tooltext3.style.animationName = "toolslide";
    tooltext3.style.animationDuration = "2000ms";
    tooltext3.style.visibility = "visible";
    tool3.style.animationName = "rotate";
    tool3.style.animationDuration = "2000ms";
    tool3.style.transform = "rotate(0)";
  }
  if (window.scrollY >= 2300) {
    li1.style.backgroundColor = "";
    li2.style.backgroundColor = "rgb(43, 110, 49)";
  }
  if (window.scrollY < 4280) {
    img6.style.animationName = "dismarche";
    img6.style.animationDuration = "1.5s";
    img6.style.marginRight = "300px";
  }
  if (window.scrollY >= 4280) {
    img6.style.animationName = "marche";
    img6.style.animationDuration = "1.5s";
    img6.style.marginRight = "0";
    text6.style.animationName = "marchetext";
    text6.style.animationDuration = "1.5s";
    text6.style.marginLeft = "0";
  }
  if (window.scrollY < 4480) {
    img7.style.animationName = "dismarche";
    img7.style.animationDuration = "1.5s";
    img7.style.marginRight = "300px";
  }
  if (window.scrollY >= 4480) {
    img7.style.animationName = "marche";
    img7.style.animationDuration = "1.5s";
    img7.style.marginRight = "0";
  }
  if (window.scrollY < 4600) {
    img8.style.animationName = "dismarche";
    img8.style.animationDuration = "1.5s";
    img8.style.marginRight = "300px";
  }
  if (window.scrollY >= 4600) {
    img8.style.animationName = "marche";
    img8.style.animationDuration = "1.5s";
    img8.style.marginRight = "0";
  }
  if (window.scrollY <= 5250) {
    li3.style.backgroundColor = "";
  }

  if (window.scrollY >= 5250) {
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
  lecteurcontainer.innerHTML = `<video src="craft.mov" id="imagetozoom3" autoplay muted></video> `;
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
  lecteurcontainer.innerHTML = `<video src="craft.mov" id="imagetozoom3" autoplay muted></video>`;
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
  lecteurcontainer.innerHTML = `<video src="craft.mov" id="imagetozoom3" autoplay muted ></video> `;
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

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
});
sliderDown.addEventListener("click", () => {
  console.log(sliderValue);
  if (sliderValue == 4) {
    img9.style.transform = "translate(-3000px)";
    img10.style.transform = "translate(-3000px)";
    img11.style.transform = "translate(-3000px)";
    img12.style.transform = "translate(-3000px)";
    img13.style.transform = "translate(-3000px)";
    sliderUp.style.visibility = "visible";
    miniimg12.classList.add("selectionned");
    miniimg12.classList.remove("unselectionned");
    miniimg13.classList.add("unselectionned");
    miniimg13.classList.remove("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  }
  if (sliderValue == 3) {
    img9.style.transform = "translate(-2000px)";
    img10.style.transform = "translate(-2000px)";
    img11.style.transform = "translate(-2000px)";
    img12.style.transform = "translate(-2000px)";
    img13.style.transform = "translate(-2000px)";
    miniimg11.classList.add("selectionned");
    miniimg11.classList.remove("unselectionned");
    miniimg12.classList.add("unselectionned");
    miniimg12.classList.remove("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  }
  if (sliderValue == 2) {
    img9.style.transform = "translate(-1000px)";
    img10.style.transform = "translate(-1000px)";
    img11.style.transform = "translate(-1000px)";
    img12.style.transform = "translate(-1000px)";
    img13.style.transform = "translate(-1000px)";
    miniimg10.classList.add("selectionned");
    miniimg10.classList.remove("unselectionned");
    miniimg11.classList.add("unselectionned");
    miniimg11.classList.remove("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  }
  if (sliderValue == 1) {
    img9.style.transform = "translate(0)";
    img10.style.transform = "translate(0)";
    img11.style.transform = "translate(0)";
    img12.style.transform = "translate(0)";
    img13.style.transform = "translate(0)";
    miniimg9.classList.add("selectionned");
    miniimg9.classList.remove("unselectionned");
    miniimg10.classList.add("unselectionned");
    miniimg10.classList.remove("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
    sliderDown.style.visibility = "hidden";
  }
  sliderValue -= 1;
});

sliderUp.addEventListener("click", () => {
  if (sliderValue == 0) {
    img9.style.transform = "translate(-1000px)";
    img10.style.transform = "translate(-1000px)";
    img11.style.transform = "translate(-1000px)";
    img12.style.transform = "translate(-1000px)";
    img13.style.transform = "translate(-1000px)";
    sliderDown.style.visibility = "visible";
    miniimg9.classList.remove("selectionned");
    miniimg9.classList.add("unselectionned");
    miniimg10.classList.remove("unselectionned");
    miniimg10.classList.add("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un caca <h4/>`;
  }
  if (sliderValue == 1) {
    img9.style.transform = "translate(-2000px)";
    img10.style.transform = "translate(-2000px)";
    img11.style.transform = "translate(-2000px)";
    img12.style.transform = "translate(-2000px)";
    img13.style.transform = "translate(-2000px)";
    sliderDown.style.visibility = "visible";
    miniimg10.classList.remove("selectionned");
    miniimg10.classList.add("unselectionned");
    miniimg11.classList.remove("unselectionned");
    miniimg11.classList.add("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un caca <h4/>`;
  }
  if (sliderValue == 2) {
    img9.style.transform = "translate(-3000px)";
    img10.style.transform = "translate(-3000px)";
    img11.style.transform = "translate(-3000px)";
    img12.style.transform = "translate(-3000px)";
    img13.style.transform = "translate(-3000px)";
    sliderDown.style.visibility = "visible";
    miniimg11.classList.remove("selectionned");
    miniimg11.classList.add("unselectionned");
    miniimg12.classList.remove("unselectionned");
    miniimg12.classList.add("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un caca <h4/>`;
  }
  if (sliderValue == 3) {
    img9.style.transform = "translate(-4000px)";
    img10.style.transform = "translate(-4000px)";
    img11.style.transform = "translate(-4000px)";
    img12.style.transform = "translate(-4020px)";
    img13.style.transform = "translate(-4000px)";
    sliderDown.style.visibility = "visible";
    miniimg12.classList.remove("selectionned");
    miniimg12.classList.add("unselectionned");
    miniimg13.classList.remove("unselectionned");
    miniimg13.classList.add("selectionned");
    slidertextarea.innerHTML = `<h4>je pense etre un caca <h4/>`;
    sliderUp.style.visibility = "hidden";
  }

  sliderValue += 1;
});

miniimg9.addEventListener("click", () => {
  sliderValue = 0;
  img9.style.transform = "translate(0)";
  img10.style.transform = "translate(0)";
  img11.style.transform = "translate(0)";
  img12.style.transform = "translate(0)";
  img13.style.transform = "translate(0)";
  miniimg10.classList.remove("selectionned");
  miniimg10.classList.add("unselectionned");
  miniimg11.classList.remove("selectionned");
  miniimg11.classList.add("unselectionned");
  miniimg12.classList.remove("selectionned");
  miniimg12.classList.add("unselectionned");
  miniimg13.classList.remove("selectionned");
  miniimg13.classList.add("unselectionned");

  miniimg9.classList.remove("unselectionned");
  miniimg9.classList.add("selectionned");
  slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  sliderDown.style.visibility = "hidden";
  sliderUp.style.visibility = "visible";
});
miniimg10.addEventListener("click", () => {
  sliderValue = 1;
  img9.style.transform = "translate(-1000px)";
  img10.style.transform = "translate(-1000px)";
  img11.style.transform = "translate(-1000px)";
  img12.style.transform = "translate(-1000px)";
  img13.style.transform = "translate(-1000px)";
  miniimg9.classList.remove("selectionned");
  miniimg9.classList.add("unselectionned");
  miniimg11.classList.remove("selectionned");
  miniimg11.classList.add("unselectionned");
  miniimg12.classList.remove("selectionned");
  miniimg12.classList.add("unselectionned");
  miniimg13.classList.remove("selectionned");
  miniimg13.classList.add("unselectionned");

  miniimg10.classList.remove("unselectionned");
  miniimg10.classList.add("selectionned");
  slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  sliderDown.style.visibility = "visible";
  sliderUp.style.visibility = "visible";
});
miniimg11.addEventListener("click", () => {
  sliderValue = 2;
  img9.style.transform = "translate(-2000px)";
  img10.style.transform = "translate(-2000px)";
  img11.style.transform = "translate(-2000px)";
  img12.style.transform = "translate(-2000px)";
  img13.style.transform = "translate(-2000px)";
  miniimg9.classList.remove("selectionned");
  miniimg9.classList.add("unselectionned");
  miniimg10.classList.remove("selectionned");
  miniimg10.classList.add("unselectionned");
  miniimg12.classList.remove("selectionned");
  miniimg12.classList.add("unselectionned");
  miniimg13.classList.remove("selectionned");
  miniimg13.classList.add("unselectionned");

  miniimg11.classList.remove("unselectionned");
  miniimg11.classList.add("selectionned");
  slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  sliderDown.style.visibility = "visible";
  sliderUp.style.visibility = "visible";
});
miniimg12.addEventListener("click", () => {
  sliderValue = 3;
  img9.style.transform = "translate(-3000px)";
  img10.style.transform = "translate(-3000px)";
  img11.style.transform = "translate(-3000px)";
  img12.style.transform = "translate(-3000px)";
  img13.style.transform = "translate(-3000px)";
  sliderUp.style.visibility = "visible";
  miniimg9.classList.remove("selectionned");
  miniimg9.classList.add("unselectionned");
  miniimg10.classList.remove("selectionned");
  miniimg10.classList.add("unselectionned");
  miniimg11.classList.remove("selectionned");
  miniimg11.classList.add("unselectionned");
  miniimg13.classList.remove("selectionned");
  miniimg13.classList.add("unselectionned");

  miniimg12.classList.remove("unselectionned");
  miniimg12.classList.add("selectionned");
  slidertextarea.innerHTML = `<h4>je pense etre un pipi <h4/>`;
  sliderDown.style.visibility = "visible";
  sliderUp.style.visibility = "visible";
});
miniimg13.addEventListener("click", () => {
  sliderValue = 4;
  img9.style.transform = "translate(-4000px)";
  img10.style.transform = "translate(-4000px)";
  img11.style.transform = "translate(-4000px)";
  img12.style.transform = "translate(-4020px)";
  img13.style.transform = "translate(-4000px)";
  sliderDown.style.visibility = "visible";
  miniimg9.classList.remove("selectionned");
  miniimg9.classList.add("unselectionned");
  miniimg10.classList.remove("selectionned");
  miniimg10.classList.add("unselectionned");
  miniimg11.classList.remove("selectionned");
  miniimg11.classList.add("unselectionned");
  miniimg12.classList.remove("selectionned");
  miniimg12.classList.add("unselectionned");

  miniimg13.classList.remove("unselectionned");
  miniimg13.classList.add("selectionned");
  slidertextarea.innerHTML = `<h4>je pense etre un caca <h4/>`;
  sliderDown.style.visibility = "visible";
  sliderUp.style.visibility = "hidden";
});
