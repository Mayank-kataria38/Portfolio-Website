// Simple typewriter effect for the role text on the home page

const roles = ["Full-Stack Developer", "Graphic Designer", "Creative Technologist"];
const typewriterEl = document.getElementById("typewriter");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typewriterEl.textContent = currentRole.substring(0, charIndex);

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typingSpeed = 1200; // pause at the end of the word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 300;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();
