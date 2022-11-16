const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('nav a')
sections.forEach(elt => {
  elt.addEventListener("mouseover", () => {
    document.querySelector(`[href="#${elt.id}"]`).style.color = "var(--yellow)";
  });
  elt.addEventListener("mouseleave", () => {
    document.querySelector(`[href="#${elt.id}"]`).style.color = "white";
  });
});

navLinks.forEach(elt => {
  elt.addEventListener('mouseover', (e) => {
    e.target.style.color = "var(--yellow)";

  });
  elt.addEventListener('mouseleave', (e) => {
    e.target.style.color = "white";
  });
})

