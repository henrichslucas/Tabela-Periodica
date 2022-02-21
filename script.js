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
let allElements = document.querySelectorAll(".elementContainer")
let allGroups = [alkalineEarths, alkalineMetals,transitionMetals, basicMetals, semiMetals, nonMetals, halogens, nobleGases, lanthanides, actinides]
let lightsOn = false

// setting functions


function turnLightsOn (selectedElement){
    if(selectedElement == alkalineEarths){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #FB9A40"
            element.style.color = "#FB9A40" 
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == alkalineMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #FF0000"
            element.style.color = "#FF0000" 
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == transitionMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ffd617"
            element.style.color = "#ffd617"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == basicMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #00cb1d"
            element.style.color = "#00cb1d"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == semiMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #00ede2"
            element.style.color = "#00ede2"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == nonMetals){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #EFF8FF"
            element.style.color = "#EFF8FF"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == halogens){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #9e00ff"
            element.style.color = "#9e00ff"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == nobleGases){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #d22cff"
            element.style.color = "#d22cff"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == lanthanides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ff0063"
            element.style.color = "#ff0063"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }

    if(selectedElement == actinides){
        selectedElement.forEach(element => {
            element.style.border = "4px solid #ff0041"
            element.style.color = "#ff0041"
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
        });
    }
}

function turnLightsOff(selectedElement){
    selectedElement.forEach(element =>{
        let originalBorder = element.style.border
        let originalColor = element.style.color
        element.style.border = "4px solid #202020"
        element.style.color = "#202020"
        element.style.boxShadow = "0px 0px 0px"
        element.style.textShadow = "0px 0px 0px"
        //funçao para acender e apagar os leds nas cores correspondentes de cada grupo
        
        element.addEventListener("mouseenter", e =>{
            element.style.boxShadow = "0px 0px 30px"
            element.style.textShadow = "2px 2px 10px"
            element.style.border = originalBorder
            element.style.color = originalColor
        })

        element.addEventListener("mouseleave", e =>{
            element.style.border = "4px solid #202020"
            element.style.color = "#202020"
            element.style.boxShadow = "0px 0px 0px"
            element.style.textShadow = "0px 0px 0px"
        })
    })
}
// setting events / calling functions 

function inputCheck(){
    if(neonBtn.checked == true){
        allGroups.map(group => turnLightsOn (group)) 
        lightsOn = true   
    } else {
        turnLightsOff(allElements)
        lightsOn = false
    }
}

neonBtn.addEventListener("click", inputCheck)