document.querySelectorAll(".link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "translateY(-3px)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});

const text = "CSE Student • Competitive Programmer";
const typingTarget = document.querySelector(".profile-right p");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 35);
  }
}

typingTarget.textContent = "";
typeEffect();
