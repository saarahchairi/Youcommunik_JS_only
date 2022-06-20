export { nav }

class Nav {
    constructor(logo, name){
        this.logo = document.createElement("img");
        this.logo.src = logo;
        this.name = document.createElement("p");
        this.name.innerHTML = name;
        this.name.classList.add("text-light", "m-0")
    }
}

let logo1 = new Nav("public/img/home-icon.png", "HOME");
let logo2 = new Nav("public/img/packages-icon.png", "PACKAGES");
let logo3 = new Nav("public/img/outils-icon.png", "OUTILS");
let logo4 = new Nav("public/img/projets-icon.png", "PROJETS");
let logo5 = new Nav("public/img/temoignages-icon.png", "TEMOIGNAGES");
let logo6 = new Nav("public/img/contact-icon.png", "CONTACT");

let menuNav = [logo1, logo2, logo3, logo4, logo5, logo6]

let nav = document.createElement("nav");
nav.classList.add("bg-dark", "d-flex", "justify-content-between", "align-items-center")
let divNavLogo = document.createElement("div");
let divNavMenu = document.createElement("div");
divNavMenu.classList.add("d-flex", "align-items-center", "gap-md-3", "gap-1");

let logoSite = document.createElement("img");
logoSite.src = "public/img/logo-horizontal-fond-noir-couleur.png";
divNavLogo.appendChild(logoSite);

function appendElement(x) {
    let divParent = document.createElement("div");
    divParent.classList.add("d-flex", "divParent", "align-items-center");
    divParent.append(x.logo, x.name);
    divNavMenu.append(divParent);
}

for (let i = 0; i < menuNav.length; i++) {
    appendElement(menuNav[i])
}

nav.append(divNavLogo, divNavMenu);

