// --------------------------------------- Variables -----------------------------//
const navUl = document.getElementById("navUl");
const navLogo = document.getElementById("navLogo");
let navOpened = false;
const page1Logo = document.getElementById("page1Logo");
const page2Logo = document.getElementById("page2Logo");
const page3Logo = document.getElementById("page3Logo");
const page4Logo = document.getElementById("page4Logo");
let page = 1;
const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");
const li3 = document.getElementById("li3");
const li4 = document.getElementById("li4");
// ----------------------------------------- Functions----------------------------//
const scroll = (a) => {
  window.scrollTo({
    top: a,
    behavior: "smooth",
  });
};

//------------------------------------------- Code ---------------------------------//
navLogo.addEventListener("click", () => {
  if (navOpened == false) {
    navLogo.style.transform = "translate(-5px, -5px) rotate(0deg)";

    navUl.style.transform = "translate(0, 0)";
    navOpened = true;
  } else {
    navLogo.style.transform = "rotate(90deg)";
    navUl.style.transform = "translateX(200px)";
    navOpened = false;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY < 790) {
    page1Logo.classList.add("selectionned");
    page2Logo.classList.remove("selectionned");
  }
  if (window.scrollY > 790) {
    page1Logo.classList.remove("selectionned");
    page2Logo.classList.add("selectionned");
  }

  if (window.scrollY < 1200) {
    page3Logo.classList.remove("selectionned");
  }
  if (window.scrollY > 1200) {
    page2Logo.classList.remove("selectionned");
    page3Logo.classList.add("selectionned");
  }
});
window.addEventListener("click", () => {
  li1.addEventListener("click", () => {
    scroll(0);
  });
  li2.addEventListener("click", () => {
    scroll(1000);
  });
  li3.addEventListener("click", () => {
    scroll(1200);
  });
  li4.addEventListener("click", () => {
    scroll(2000);
  });
  page1Logo.addEventListener("click", () => {
    scroll(0);
  });
  page2Logo.addEventListener("click", () => {
    scroll(1000);
  });
  page3Logo.addEventListener("click", () => {
    scroll(1200);
  });
  page4Logo.addEventListener("click", () => {
    scroll(2000);
  });
});
