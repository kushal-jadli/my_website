const text = "Hi, I'm Kushal Jadli";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

function scrollToSection() {
  document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
}

// Event Listeners
window.onload = typeEffect;

document.getElementById("scrollBtn").addEventListener("click", scrollToSection);
