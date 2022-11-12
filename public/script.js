const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('nav a')
sections.forEach(elt => {
  elt.addEventListener('mouseover', (e) => {
    console.log(e.target.id)
    document.querySelector(`[href="#${elt.id}"]`).style.color = "var(--yellow)";


  })
  elt.addEventListener('mouseleave', (e) => {
    console.log(e.target.id)
    document.querySelector(`[href="#${elt.id}"]`).style.color = "white";
    document.querySelector(`[href="#${elt.id}"]`).style.textShadow = "none";
  })
});

navLinks.forEach(elt => {
  elt.addEventListener('mouseover', (e) => {
    e.target.style.color = "var(--yellow)";

  });
  elt.addEventListener('mouseleave', (e) => {
    e.target.style.color = "white";
  });
})

