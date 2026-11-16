// Exercice 1 : Variables, conversions et boîtes de dialogue
function demarrer(){
    let nom = prompt("enter votre  nom: ");

    if( nom === null){
        return;
    }

    let age = prompt("enter votre  age: ");

        if( age === null || age.trim() === "" || isNaN(Number(age))){
            alert("age invalide");
            return;
        }
    
    age = Number(age);

    console.log("Bonjour " + nom + ", votre âge est " + age);
    console.log(typeof nom);
    console.log(typeof age);

    alert("Bonjour " + nom + ", votre âge est " + (age + 1) + " ans l’année prochaine");

    let reponse = confirm("Voulez-vous continuer ?");
    console.log(reponse);
}

//Exercice 2 : Conditions, boucles et fonctions

function somme(){
    let n = Number(document.getElementById("n").value);
    let s=0 ;
    for(i=1 ; i<=n ; i++){
        s+=i;
    }
    document.getElementById("result1").textContent = s;
}

function pairs(){
    let n = Number(document.getElementById("n").value);
    let s="" ;
    if(n % 1 === 0){
        alert("Erreur: le nombre est un ne pas entier compris")
    }
    for(i=1 ; i<=n ; i++){
        if(i % 2 == 0){
            s += i + " ";
        }
        
    document.getElementById("result2").textContent = s;

    }
}

//Exercice 3 : Sélection et manipulation des éléments

const t = document.getElementById("titreCours");
const p = document.getElementById("cours").getElementsByTagName("p");
const c = document.getElementsByClassName("chapitre");
const ci = document.querySelector(".chapitre.important");
const tc = document.querySelectorAll("p.chapitre");
console.log(tc.length);

function modifier(){
    t.textContent = "JavaScript : une page interactive ";
    
    for(let i=0 ; i<c.length ; i++){
        c[i].style.color = "blue";
    }

    ci.style.fontWeight = "bold";

    document.getElementById("modifier").textContent = "Présentation modifiée";
}

//Exercice 4 : Événements, propriétés, méthodes et this 

function mettreEnEvidence(champ){
    champ.style.backgroundColor = "lightyellow";
}

function retablirStyle(champ){
    champ.style.backgroundColor = "";
}

function afficherSaisie(champ){
    document.getElementById("apercu").textContent = champ.value;
}

function fs(){
    document.getElementById("selectionner").addEventListener("click" ,
        function(){
            document.getElementById("prenom").focus();
        }
    );
}

