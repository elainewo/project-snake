let section = document.createElement("section");
section.setAttribute("id", "snakeField");

for (let i = 0; i < 260; i++) {
  let div = document.createElement("div");
  div.className = "item";
  section.appendChild(div);
}
document.body.appendChild(section);

for (let i of document.getElementsByTagName("div")) {
  // console.log(i);
  i.addEventListener("mouseover", () => {
    i.style.background = "orange";
    setTimeout(() => {
      i.style.background = "lightblue";
      // i.style.background = "" // alternative Schreibweise
    }, 500);
  });
}
