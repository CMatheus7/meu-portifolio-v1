// Modo escuro e modo claro
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    // Armazena referências para os elementos relevantes
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Função para exibir a seção correspondente quando a página é carregada
    showActiveSection();
  
    // Função para exibir a seção correspondente quando um link de navegação é clicado
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const sectionId = link.getAttribute("href").substring(1);
        updateHash(sectionId);
        showActiveSection(sectionId);
      });
    });
  
    // Função para exibir a seção correspondente com base no hash
    window.addEventListener("hashchange", function () {
      const sectionId = window.location.hash.substring(1);
      showActiveSection(sectionId);
    });
  
    function showActiveSection(sectionId) {
      // Se nenhum ID de seção for fornecido, use o hash atual
      if (!sectionId) {
        sectionId = window.location.hash.substring(1);
      }
  
      // Oculta todas as seções
      sections.forEach((section) => {
        section.classList.remove("active");
      });
  
      // Remove a classe 'active' de todos os links de navegação
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
  
      // Exibe a seção correspondente
      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        activeSection.classList.add("active");
      }
  
      // Adiciona a classe 'active' ao link de navegação correspondente
      navLinks.forEach((navLink) => {
        if (navLink.getAttribute("href").substring(1) === sectionId) {
          navLink.classList.add("active");
        }
      });
    }
  
    function updateHash(hash) {
      history.pushState(null, null, "#" + hash);
    }
  });
  