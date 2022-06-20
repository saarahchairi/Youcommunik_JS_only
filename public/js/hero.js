export { divHero }

let divHero = document.createElement("div");
divHero.classList.add("d-flex", "justify-content-center", "align-items-center", "divHero");

let divImgHero = document.createElement("div");
divImgHero.classList.add("divImgHero")
let imgHero = document.createElement("img");
imgHero.src = "public/img/packages.png";
divImgHero.appendChild(imgHero);

let divTextHero = document.createElement("div");
divTextHero.classList.add("text-light");
let titreHero = document.createElement("h1");
titreHero.innerText = "A chaque étape son pack";
let sousTitreHero = document.createElement("h3");
sousTitreHero.innerText = "naître, grandir et prospérer.";
divTextHero.append(titreHero, sousTitreHero);

divHero.append(divImgHero, divTextHero)