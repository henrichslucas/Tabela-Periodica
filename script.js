// setting variables / selecting elements

let alkalineEarths = document.getElementsByName("alkalineEarth")
let alkalineMetals = document.getElementsByName("alkalineMetal")
let transitionMetals = document.getElementsByName("transitionMetal")
let basicMetals = document.getElementsByName("basicMetal")
let semiMetals = document.getElementsByName("semiMetal")
let nonMetals = document.getElementsByName("nonMetal")
let halogens = document.getElementsByName("halogen")
let nobleGases = document.getElementsByName("nobleGas")
let lanthanides = document.getElementsByName("lanthinide")
let actinides = document.getElementsByName("actinides")


// setting functions

function changeBackground(selectedElement){

    if(selectedElement == alkalineEarths){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "red"
        });
    }

    if(selectedElement == alkalineMetals){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "orange"
        });
    }

    if(selectedElement == transitionMetals){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "yellow"
        });
    }

    if(selectedElement == basicMetals){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "blue"
        });
    }

    if(selectedElement == semiMetals){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "yellowgreen"
        });
    }

    if(selectedElement == nonMetals){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "green"
        });
    }

    if(selectedElement == halogens){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "cyan"
        });
    }

    if(selectedElement == nobleGases){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "white"
        });
    }

    if(selectedElement == lanthanides){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "pink"
        });
    }

    if(selectedElement == actinides){
        selectedElement.forEach(element => {
            element.style.backgroundColor = "salmon"
        });
    }

}


// setting events / calling functions 

changeBackground(alkalineEarths)
changeBackground(alkalineMetals)
changeBackground(transitionMetals)
changeBackground(basicMetals)
changeBackground(semiMetals)
changeBackground(nonMetals)
changeBackground(halogens)
changeBackground(nobleGases)