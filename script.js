document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 6;
    const rotateY = (x / rect.width - 0.5) * -6;

    link.style.transform = `
      translateY(-4px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "translateY(0)";
  });
});
