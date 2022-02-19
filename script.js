// setting variables / selecting elements

let alkalineEarths = document.getElementsByName("alkalineEarth")
let alkalineMetals = document.getElementsByName("alkalineMetal")
let transitionMetals = document.getElementsByName("transitionMetal")
let basicMetals = document.getElementsByName("basicMetal")
let semiMetals = document.getElementsByName("semiMetal")
let nonMetals = document.getElementsByName("nonMetal")
let halogens = document.getElementsByName("halogen")
let nobleGases = document.getElementsByName("nobleGas")
let lanthanides = document.getElementsByName("lanthanides")
let actinides = document.getElementsByName("actinides")
let neonBtn = document.querySelector("#neonButton")




// setting functions


function turnLightsOn (selectedElement){

    if(selectedElement == alkalineEarths){
        selectedElement.forEach(element => {
            
            element.style.border = "4px solid #FB9A40"
            element.style.color = "#FB9A40" 
        });
    }

    if(selectedElement == alkalineMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #FF0000"
            element.style.color = "#FF0000" 
        });
    }

    if(selectedElement == transitionMetals){
        
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ffd617"
            element.style.color = "#ffd617"
        });
    }

    if(selectedElement == basicMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #00cb1d"
            element.style.color = "#00cb1d"
        });
    }

    if(selectedElement == semiMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #00ede2"
            element.style.color = "#00ede2"
        });
    }

    if(selectedElement == nonMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #EFF8FF"
            element.style.color = "#EFF8FF"
        });
    }

    if(selectedElement == halogens){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #9e00ff"
            element.style.color = "#9e00ff"
        });
    }

    if(selectedElement == nobleGases){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #d22cff"
            element.style.color = "#d22cff"
        });
    }

    if(selectedElement == lanthanides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ff0063"
            element.style.color = "#ff0063"
        });
    }

    if(selectedElement == actinides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ff0041"
            element.style.color = "#ff0041"
        });
    }

}

function turnLightsOff(selectedElement){
    if(selectedElement == alkalineEarths){
        selectedElement.forEach(element => {
            
            element.style.border = "4px solid #202020"
            element.style.color = "#202020" 
        });
    }

    if(selectedElement == alkalineMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020" 
        });
    }

    if(selectedElement == transitionMetals){
        
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == basicMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == semiMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == nonMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == halogens){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == nobleGases){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == lanthanides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }

    if(selectedElement == actinides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
        });
    }
}

// setting events / calling functions 

function inputCheck(){
    if(neonBtn.checked == true){
        turnLightsOn (alkalineEarths)
        turnLightsOn (alkalineMetals)
        turnLightsOn (transitionMetals)
        turnLightsOn (basicMetals)
        turnLightsOn (semiMetals)
        turnLightsOn (nonMetals)
        turnLightsOn (halogens)
        turnLightsOn (nobleGases)
        turnLightsOn (lanthanides)
        turnLightsOn (actinides)
    } else {
        turnLightsOff(alkalineEarths)
        turnLightsOff(alkalineMetals)
        turnLightsOff(transitionMetals)
        turnLightsOff(basicMetals)
        turnLightsOff(semiMetals)
        turnLightsOff(nonMetals)
        turnLightsOff(halogens)
        turnLightsOff(nobleGases)
        turnLightsOff(lanthanides)
        turnLightsOff(actinides)
    }
}

neonBtn.addEventListener("click", inputCheck)
