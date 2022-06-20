import { footer } from "./main.js";
export { appendElementFooter, elementFooter }
class Section {
    constructor(name, logo1, logo2, logo3){
        this.name = document.createElement("h5");
        this.name.innerText = name;
        this.name.classList.add("text-light", "pb-3");
        this.logo1 = document.createElement("img");
        this.logo2 = document.createElement("img");
        this.logo3 = document.createElement("img");
        this.logo1.src = logo1;
        this.logo2.src = logo2;
        this.logo3.src = logo3;
    }
}

let packs = new Section ("Packs", "public/img/icon-eclosion.png", "public/img/icon-evolution.png", "public/img/icon-envole.png");
let outils = new Section ("Outils", "public/img/identite-graphique.png", "public/img/reseaux-sociaux.png", "public/img/print.png");
let media = new Section ("Social media", "public/img/social-f.png", "public/img/google-plus.png", null);

let elementFooter = [packs, outils, media]

let divFooter = document.createElement("div");
divFooter.classList.add("d-flex", "justify-content-around", "fin");

function appendElementFooter(x) {
    let divPack = document.createElement("div");
    let divImg = document.createElement("div");
    divImg.classList.add("d-flex" ,"gap-3", "img");
    divImg.append(x.logo1, x.logo2, x.logo3);
    divPack.append(x.name, divImg)
    divFooter.append(divPack);
    footer.appendChild(divFooter)
}