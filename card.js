// tableau de classe,specialisations, Role 
const tab = [{
    nom : "war",
    talent : "protection",
    role : "tank"
},{
    nom : "guerrier",
    talent : "arme",
    role : "dps"
},{
    nom : "guerrier",
    talent : "fury", 
    role : "dps"
},{
    nom : "paladin",
    talent : "protection",
    role : "tank"
},{
    nom : "paladin",
    talent : "sacre",
    role : "heal"
},{
    nom : "paladin",
    talent : "vindicte",
    role : "dps"
},{
    nom : "mage",
    talent : "frost",
    role : "dps"
},{
    nom : "mage",
    talent : "fire",
    role : "dps"
},{
    nom : "mage",
    talent : "arcane",
    role : "dps"
},{
    nom : "moine",
    talent : "maitreBrasseur",
    role : "tank"
},{
    nom : "moine",
    talent : "tisseBrume",
    role : "heal"
},{
    nom : "moine",
    talent : "marcheVent",
    role : "dps"
},{
    nom : "voleur",
    talent : "assassinat",
    role : "dps"
},{
    nom : "rogue",
    talent : "HorsLaLoi",
    role : "dps"
},{
    nom : "rogue",
    talent : "finesse",
    role : "dps"
},{
    nom : "priest",
    talent : "discipline",
    role : "heal"
},{
    nom : "priest",
    talent : "ombre",
    role : "dps"
},{
    nom : "priest",
    talent : "sacre",
    role : "heal"
},{
    nom : "warlock",
    talent : "destruction",
    role : "dps"
},{
    nom : "warlock",
    talent : "affliction",
    role : "dps"
},{
    nom : "warlock",
    talent : "demonologie",
    role : "dps"
},{
    nom : "dk",
    talent : "blood",
    role : "tank"
},{
    nom : "dk",
    talent : "frost",
    role : "dps"
},{
    nom : "dk",
    talent : "impie",
    role : "dps"
},{
    nom : "hunt",
    talent : "precision",
    role : "dps"
},{
    nom : "hunt",
    talent : "bete",
    role : "dps"
},{
    nom : "hunt",
    talent : "survie",
    role : "dps"
},{
    nom : "shaman",
    talent : "restauration",
    role : "heal"
},{
    nom : "shaman",
    talent : "elementaire",
    role : "dps"
},{
    nom : "shaman",
    talent : "amelioration",
    role : "dps"
},{
    nom : "drood",
    talent : "restauration",
    role : "heal"
},{
    nom : "drood",
    talent : "feral",
    role : "dps"
},{
    nom : "drood",
    talent : "gardien",
    role : "tank"
},{
    nom : "drood",
    talent : "equilibre",
    role : "dps"
},{
    nom : "dh",
    talent : "devastation",
    role : "dps"
},{
    nom : "dh",
    talent : "vengeance",
    role : "tank"
},{
    nom : "evoker",
    talent : "devastation",
    role : "dps"
},{
    nom : "evoker",
    talent : "preservation",
    role : "heal"
}

]





for(let value of tab){

    let dataTab = function () {return tab[0].nom}
    console.log(dataTab ())
    console.log (value)
    

    //card War
    if(value.talent === "protection" && value.nom === dataTab()){
        document.querySelector('.warProtec').innerHTML = `${value.nom} ${value.talent}`;
        document.querySelector(".warProtec").style.backgroundImage = "url('img_prot_1.jpg')";
    }
    if(value.talent === 'arme' && value.nom === dataTab()){
        document.querySelector('.warArme').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'fury' && value.nom === dataTab()){
        document.querySelector('.warFury').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card Paladin
    if(value.talent === 'protection' && value.nom === 'paladin'){
        document.querySelector(".palProtec").innerHTML = `${value.nom} ${value.talent}`;
        
    }
    if(value.talent === 'sacre' && value.nom === 'paladin'){
        document.querySelector('.palSacre').innerHTML = `${value.nom} ${value.talent}`;
        
    }
    if(value.talent === 'vindicte' && value.nom === 'paladin'){
        document.querySelector('.palVindicte').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card mage
    if(value.talent === 'frost' && value.nom === 'mage'){
        document.querySelector('.mageFrost').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'fire' && value.nom === 'mage'){
        document.querySelector('.mageFire').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'arcane' && value.nom === 'mage'){
        document.querySelector('.mageArcane').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card monk
    if(value.talent === 'maitreBrasseur' && value.nom === 'moine'){
        document.querySelector('.monkMaitreBrasseur').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'tisseBrume' && value.nom === 'moine'){
        document.querySelector('.monkTisseBrume').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'marcheVent' && value.nom === 'moine'){
        document.querySelector('.monkMarcheVent').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card rogue
    if(value.talent === 'assassinat' && value.nom === 'rogue'){
        document.querySelector('.rogueAssassinat').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'HorsLaLoi' && value.nom === 'rogue'){
        document.querySelector('.rogueHorsLaLoi').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'finesse' && value.nom === 'rogue'){
        document.querySelector('.rogueFinesse').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card priest
    if(value.talent === 'discipline' && value.nom === 'priest'){
        document.querySelector('.priestDiscipline').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'sacre' && value.nom === 'priest'){
        document.querySelector('.priestsacre').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'ombre' && value.nom === 'priest'){
        document.querySelector('.priestOmbre').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card warlock
    if(value.talent === 'affliction' && value.nom === 'warlock'){
        document.querySelector('.warlockAffliction').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'destruction' && value.nom === 'warlock'){
        document.querySelector('.warlockDestruction').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'demonologie' && value.nom === 'warlock'){
        document.querySelector('.warlockDemonologie').innerHTML = `${value.nom} ${value.talent}`;
    }

     // card DK
     if(value.talent === 'blood' && value.nom === 'dk'){
        document.querySelector('.dkBlood').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'impie' && value.nom === 'dk'){
        document.querySelector('.dkImpie').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'frost' && value.nom === 'dk'){
        document.querySelector('.dkFrost').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card DK
     if(value.talent === 'blood' && value.nom === 'dk'){
        document.querySelector('.dkBlood').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'impie' && value.nom === 'dk'){
        document.querySelector('.dkImpie').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'frost' && value.nom === 'dk'){
        document.querySelector('.dkFrost').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card hunt
    if(value.talent === 'precision' && value.nom === 'hunt'){
        document.querySelector('.huntPrecision').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'bete' && value.nom === 'hunt'){
        document.querySelector('.huntBete').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'survie' && value.nom === 'hunt'){
        document.querySelector('.huntSurvie').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card shaman
    if(value.talent === 'restauration' && value.nom === 'shaman'){
        document.querySelector('.shamanRetauration').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'elementaire' && value.nom === 'shaman'){
        document.querySelector('.shamanElementaire').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'amelioration' && value.nom === 'shaman'){
        document.querySelector('.shamanAmelioration').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card drood
    if(value.talent === 'restauration' && value.nom === 'drood'){
        document.querySelector('.droodRestauration').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'feral' && value.nom === 'drood'){
        document.querySelector('.droodFeral').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'gardien' && value.nom === 'drood'){
        document.querySelector('.droodGardien').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'equilibre' && value.nom === 'drood'){
        document.querySelector('.droodEquilibre').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card dh
    if(value.talent === 'devastation' && value.nom === 'dh'){
        document.querySelector('.dhDevastation').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'vengeance' && value.nom === 'dh'){
        document.querySelector('.dhVengeance').innerHTML = `${value.nom} ${value.talent}`;
    }

    // card evoker
    if(value.talent === 'devastation' && value.nom === 'evoker'){
        document.querySelector('.evokerDevastation').innerHTML = `${value.nom} ${value.talent}`;
    }
    if(value.talent === 'preservation' && value.nom === 'evoker'){
        document.querySelector('.evokerPreservation').innerHTML = `${value.nom} ${value.talent}`;
    }

    //  buttons
    if(value.nom === 'guerrier'){
        document.querySelector('.buttonWar').innerHTML = `${value.nom}`;
        document.querySelector('.buttonWar').style.backgroundColor = "#C79C6E"
    }   
    if(value.nom === 'paladin'){
        document.querySelector('.buttonPaladin').innerHTML = `${value.nom}`;
        document.querySelector('.buttonPaladin').style.backgroundColor = "#F58CBA"
    }
    if(value.nom === 'mage'){
        document.querySelector('.buttonMage').innerHTML = `${value.nom}`;
        document.querySelector('.buttonMage').style.backgroundColor = "#40C7EB"
    }
    if(value.nom === 'moine'){
        document.querySelector('.buttonMonk').innerHTML = `${value.nom}`;
        document.querySelector('.buttonMonk').style.backgroundColor = "#00FF96"
    }
    if(value.nom === 'rogue'){
        document.querySelector('.buttonRogue').innerHTML = `${value.nom}`;
        document.querySelector('.buttonRogue').style.backgroundColor = "#FFF569	"
    }    
    if(value.nom === 'priest'){
        document.querySelector('.buttonPriest').innerHTML = `${value.nom}`;
        document.querySelector('.buttonPriest').style.backgroundColor = "#FFFFFF"
    }  
    if(value.nom === 'dk'){
        document.querySelector('.buttonDk').innerHTML = `${value.nom}`;
        document.querySelector('.buttonDk').style.backgroundColor = "#C41F3B"
    }
    if(value.nom === 'hunt'){
        document.querySelector('.buttonHunt').innerHTML = `${value.nom}`;
        document.querySelector('.buttonHunt').style.backgroundColor = "#A9D271"
    }    
    if(value.nom === 'shaman'){
        document.querySelector('.buttonShaman').innerHTML = `${value.nom}`;
        document.querySelector('.buttonShaman').style.backgroundColor = "#0070DE"
    }    
    if(value.nom === 'warlock'){
        document.querySelector('.buttonWarlock').innerHTML = `${value.nom}`;
        document.querySelector('.buttonWarlock').style.backgroundColor = "#8787ED"
    }    
    if(value.nom === 'drood'){
        document.querySelector('.buttonDrood').innerHTML = `${value.nom}`;
        document.querySelector('.buttonDrood').style.backgroundColor = "#FF7D0A"
    }    
    if(value.nom === 'dh'){
        document.querySelector('.buttonDh').innerHTML = `${value.nom}`;
        document.querySelector('.buttonDh').style.backgroundColor = "#A330C9"
    }    
    if(value.nom === 'evoker'){
        document.querySelector('.buttonEvoker').innerHTML = `${value.nom}`;
        document.querySelector('.buttonEvoker').style.backgroundColor = "#33937F"
    }              
    if(value.role === 'tank'){
        document.querySelector('.buttonTank').innerHTML = `${value.role}`;
    }              
    if(value.role === 'heal'){
        document.querySelector('.buttonHeal').innerHTML = `${value.role}`;
    }              
    if(value.role === 'dps'){
        document.querySelector('.buttonDps').innerHTML = `${value.role}`;
    }        
    
    
}   

// variable button
const buttonWar = document.querySelector('.buttonWar')
const buttonPaladin = document.querySelector('.buttonPaladin')
const buttonMage = document.querySelector('.buttonMage')
const buttonMonk = document.querySelector('.buttonMonk')
const buttonRogue = document.querySelector('.buttonRogue')
const buttonPriest = document.querySelector('.buttonPriest')
const buttonDk = document.querySelector('.buttonDk')
const buttonHunt = document.querySelector('.buttonHunt')
const buttonShaman = document.querySelector('.buttonShaman')
const buttonWarlock = document.querySelector('.buttonWarlock')
const buttonDrood = document.querySelector('.buttonDrood')
const buttonDh = document.querySelector('.buttonDh')
const buttonEvoker = document.querySelector('.buttonEvoker')

// variable container specialisation
// conteneur war = toutes les valeurs guerrier du tableau
let containerWar = document.querySelector('.containerWar')
let containerPaladin = document.querySelector('.containerPaladin')
let containerMage = document.querySelector('.containerMage')
let containerMonk = document.querySelector('.containerMonk')
let containerRogue = document.querySelector('.containerRogue')
let containerPriest = document.querySelector('.containerPriest')
let containerDk = document.querySelector('.containerDk')
let containerHunt = document.querySelector('.containerHunt')
let containerShaman = document.querySelector('.containerShaman')
let containerWarlock = document.querySelector('.containerWarlock')
let containerDrood = document.querySelector('.containerDrood')
let containerDh = document.querySelector('.containerDh')
let containerEvoker = document.querySelector('.containerEvoker')


buttonWar.addEventListener("click", () =>{
    if(getComputedStyle(containerWar).display != "none"){
        containerPaladin.style.display = "none";
        containerMage.style.display = "none";
        containerMonk.style.display = "none";
        containerRogue.style.display = "none";
        containerPriest.style.display = "none";
        containerDk.style.display = "none";
        containerHunt.style.display = "none";
        containerShaman.style.display = "none";
        containerWarlock.style.display = "none";
        containerDrood.style.display = "none";
        containerDh.style.display = "none";
        containerEvoker.style.display = "none";
    }else {
        containerWar.style.display = "block";
    }
})



   



    




    






   






