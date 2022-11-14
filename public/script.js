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

const githubLogo = document.querySelectorAll("#githubLogo")
githubLogo.forEach(elt => {
  elt.addEventListener("mouseover", () => {
    elt.src = "./stackLogo/github.png"
  })
  elt.addEventListener("mouseleave", () => {
    elt.src = "./stackLogo/githubW.png"
  })
});
/* const gifTexts = document.querySelectorAll(".gifText");
gifTexts.forEach((elt) => {
  elt.addEventListener("mouseover", () => {
    console.log("hey");
    elt.style.display = "none";
  });
  elt.addEventListener("mouseleave", () => {
    console.log("ho");
    elt.style.display = "block";
  });
}); */

document.querySelector(".githubsvg").getSVGDocument().getElementById("svgInternalID").setAttribute("fill", "#fff")
