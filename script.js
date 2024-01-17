const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPdfWindow() {
  // The path to your PDF file
  var pdfPath = "assets/cv.pdf";

  // Open a new window with the specified PDF file
  window.open(pdfPath, '_blank');
}

var openPdfButton = document.getElementById("openPdfButton");
openPdfButton.addEventListener("click", openPdfWindow);

function openLinkedin() {
    // The path to your PDF file
    var pdfPath = "https://www.linkedin.com/in/mkwenya-chibawe-a9b0741a8/";
  
    // Open a new window with the specified PDF file
    window.open(pdfPath, '_blank');
  }
  
  var openLinkdinButton = document.getElementById("openLinkdinButton");
  openLinkdinButton.addEventListener('click', openLinkedin);

  function openGithub() {
    // The path to your PDF file
    var pdfPath = "https://github.com/ChibaweM";
  
    // Open a new window with the specified PDF file
    window.open(pdfPath, '_blank');
  }
  
  var openGithubButton = document.getElementById("openGithubButton");
  openGithubButton.addEventListener('click', openGithub);
  