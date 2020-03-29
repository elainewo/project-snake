// CodeFlow Übung lev3_4: Snake--------------------
// Aufgabenstellung
// Erstelle 100 Divs mit Hilfe von Javascript (Loop). 
// Die Farbe jedes Elements sollte in eine andere geändert werden und so für eine halbe Sekunde bleiben, wenn das Element mit dem Mauszeiger getroffen wird.

// Für diese Aufgabe benötigst Du möglicherweise die folgenden Methoden:
// getElementById
// addEventListener("mouseover")
// setTimeout
// event.target.style
// for loop um divs zu erstellen


let section = document.createElement("section");
section.setAttribute("id", "snakeField");


for (let i = 0; i < 100; i++) {
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
            i.style.background = "lightblue"
            // i.style.background = "" // alternative Schreibweise
        }, 500)
    })
}

