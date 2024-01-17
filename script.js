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
    var pdfPath = "https://www.linkedin.comhttps://www.linkedin.com/in/mkwenya-chibawe-a9b0741a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTZxu5JN2Qk2ltEXOC3bfwQ%3D%3D";
  
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
  