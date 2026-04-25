const text = "Hi, I'm Your Name";
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
