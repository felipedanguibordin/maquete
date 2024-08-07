const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // allSection[j].classList.add("back-section");
        addBackSection(j);
      }
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const navTarget = navList[i]
      .querySelector("a")
      .getAttribute("href")
      .split("#")[1];
    if (target === navTarget) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
  }
  element.classList.add("active");
}

function updateNavigation() {
  const scrollPosition = window.scrollY;

  // Loop através de cada seção para verificar se está visível
  allSection.forEach(function (section, index) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      // Se a seção estiver visível, marque o item de navegação correspondente como ativo
      updateNav(navList[index].querySelector("a"));
    }
  });
}

// Adiciona o evento de rolagem para atualizar a navegação
document.addEventListener("scroll", updateNavigation);

// Chama a função inicialmente para marcar o item de navegação correto quando a página é carregada
updateNavigation();

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector("aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

const keySequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let keyPressed = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === keySequence[keyPressed]) {
    keyPressed++;

    if (keyPressed === keySequence.length) {
      const elementsToModify = document.querySelectorAll(
        ".aside, section, .container, .home, .about, .service, .portifolio"
      );

      elementsToModify.forEach((element) => {
        element.classList.add("codigo");
      });

      console.log("O código foi inserido corretamente!");
      keyPressed = 0;
    }
  } else {
    keyPressed = 0; // Resetar contador se a tecla pressionada estiver errada
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggler = document.querySelector(".nav-toggler");
  const asides = document.querySelector(".aside");
  const sections = document.querySelectorAll(".section");

  navToggler.addEventListener("click", () => {
    asides.classList.toggle("open");
    navToggler.classList.toggle("open");
    sections.forEach((section) => section.classList.toggle("open"));
  });
});
