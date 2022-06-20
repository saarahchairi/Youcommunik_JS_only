export { packs, appendElement }
import { main } from "./main.js";

class Pack {
    constructor(titre, logo, pPresentation, pPresentation2, logOpt1, pOpt1, logOpt2, pOpt2, logOpt3, pOpt3, logOpt4, pOpt4, logOpt5, pOpt5){
        this.titre = document.createElement("h2");
        this.titre.innerText = titre;
        this.titre.classList.add("titre", "text-light");
        this.logo = document.createElement("img");
        this.logo.src = logo;
        this.pPresentation = document.createElement("p");
        this.pPresentation.innerText = pPresentation;
        this.pPresentation2 = document.createElement("p");
        this.pPresentation2.innerText = pPresentation2;
        this.logOpt1 = document.createElement("img");
        this.logOpt1.src = logOpt1;
        this.pOpt1 = document.createElement("p");
        this.pOpt1.innerText = pOpt1;
        this.logOpt2 = document.createElement("img");
        this.logOpt2.src = logOpt2;
        this.pOpt2 = document.createElement("p");
        this.pOpt2.innerText = pOpt2;
        this.logOpt3 = document.createElement("img");
        this.logOpt3.src = logOpt3;
        this.pOpt3 = document.createElement("p");
        this.pOpt3.innerText = pOpt3;
        this.logOpt4 = document.createElement("img");
        this.logOpt4.src = logOpt4;
        this.pOpt4 = document.createElement("p");
        this.pOpt4.innerText = pOpt4;
        this.logOpt5 = document.createElement("img");
        this.logOpt5.src = logOpt5;
        this.pOpt5 = document.createElement("p");
        this.pOpt5.innerText = pOpt5;
    }
}

let eclosion = new Pack ("Eclosion", "public/img/icon-eclosion.png", "Le pack éclosion est parfait pour le début d'une activité.", "Il comprend la création de votre identité graphique, incluant votre logo et un support de prospection pour aller à la rencontre de vos futurs clients, ainsi qu'un site internet sigle page pour avoir une présence en ligne.", "public/img/Logo-logo.png", "Logo", "public/img/identite-graphique.png", "Charte graphique", "public/img/site-single-page.png", "Site single page", "public/img/carte-visite.png", "Carte visite",null,null);
let evolusion = new Pack ("Evolution", "public/img/icon-evolution.png", "Le pack évolution vous propose une identité visuelle complète, comprenant la création de votre logo, de la charte graphique et de vos cartes de visite.", "Il intègre également le développement d'un site vitrine afin d'informer 24/7, d'être contacté, d'analyser le flux de vos visites, ... et de faire un lien vers vos réseaux sociaux.", "public/img/Logo-logo.png", "Logo", "public/img/identite-graphique.png", "Charte graphique", "public/img/site-vitrine.png", "Site vitrine", "public/img/reseaux-sociaux.png", "Réseaux sociaux", "public/img/carte-visite.png", "Carte visite");
let envol = new Pack ("Envol", "public/img/icon-envole.png", "Le pack éclosion est destiné à acroître votre visibilité, clientèle et notoriété, tout en diminuant vos coût et en garantissant le meilleur retour sur investissement.", "Il comprend un service d'analyse de votre cible et des flux de votre trafic internet, afin d'utiliser les paramètre les plus adéquats pour la diffusion de vos campagne.", "public/img/icon-analyse-flux-web.png", "Analyse du flux web", "public/img/icon-campagne-facebook.png", "Campagne Facebook", "public/img/icon-campagne-facebook.png", "Campagne Adwords", "public/img/icon-campagne-e-mailing.png", "Campagne e-mailing",null,null);

let packs = [eclosion, evolusion, envol];

function appendElement(x) {
    let divText = document.createElement("div");
    divText.classList.add("divText")
    divText.append(x.pPresentation, x.pPresentation2);
    let divImg = document.createElement("div");
    divImg.classList.add("divImg")
    divImg.appendChild(x.logo);
    let divPresentation = document.createElement("div");
    divPresentation.classList.add("d-flex", "py-3", "presentation");
    divPresentation.append(divImg, divText);

    let divpackService1 = document.createElement("div");
    divpackService1.classList.add("divpackService", "text-center");
    divpackService1.append(x.logOpt1, x.pOpt1);
    let divpackService2 = document.createElement("div");
    divpackService2.classList.add("divpackService", "text-center");
    divpackService2.append(x.logOpt2, x.pOpt2);
    let divpackService3 = document.createElement("div");
    divpackService3.classList.add("divpackService", "text-center");
    divpackService3.append(x.logOpt3, x.pOpt3);
    let divpackService4 = document.createElement("div");
    divpackService4.classList.add("divpackService", "text-center");
    divpackService4.append(x.logOpt4, x.pOpt4);
    let divpackService5 = document.createElement("div");
    divpackService5.classList.add("divpackService", "text-center");
    divpackService5.append(x.logOpt5, x.pOpt5);

    let divService = document.createElement("div");
    divService.classList.add("d-flex", "divService", "justify-content-evenly", "gap-4", "gap-md-0");
    divService.append(divpackService1, divpackService2, divpackService3, divpackService4, divpackService5);

    let divPackParent = document.createElement("div");
    divPackParent.classList.add("pack");
    divPackParent.append(x.titre, divPresentation, divService)

    main.appendChild(divPackParent);

}
