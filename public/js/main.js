import { nav } from "./nav.js";
import { divHero } from "./hero.js";
import { packs, appendElement } from "./packs.js";
import { appendElementFooter, elementFooter } from "./footer.js";

export { main, footer }

let body = document.querySelector("body");
let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
footer.classList.add("py-5")

let p = document.createElement("p");
p.innerText = "C.G.V";
p.classList.add("text-light", "m-0", "text-end", "pe-3");

header.append(nav, divHero)
body.append(header, main, footer)

for (let i = 0; i < packs.length; i++) {
    appendElement(packs[i]);
}

for (let i = 0; i < elementFooter.length; i++) {
    appendElementFooter(elementFooter[i]);
}

footer.appendChild(p)
