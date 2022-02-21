// setting variables / selecting elements

let allElements = [
    ...document.getElementsByName("alkalineEarth"),
    ...document.getElementsByName("alkalineMetal"),
    ...document.getElementsByName("transitionMetal"),
    ...document.getElementsByName("basicMetal"),
    ...document.getElementsByName("semiMetal"),
    ...document.getElementsByName("nonMetal"),
    ...document.getElementsByName("halogen"),
    ...document.getElementsByName("nobleGas"),
    ...document.getElementsByName("lanthanides"),
    ...document.getElementsByName("actinides")
]

let neonBtn = document.querySelector("#neonButton")
let originalBorder, originalColor

// setting functions

function getColors(elem){
    //console.log(elem.style.border)
    //console.log(elem.style.color)
}

function turnLightsOn(everyElement){
    everyElement.style.boxShadow = "0px 0px 30px"
    everyElement.style.textShadow = "2px 2px 10px"
    
    if(everyElement.getAttribute("name") === "alkalineEarth"){
        everyElement.style.border = "4px solid #FB9A40"
        everyElement.style.color = "#FB9A40" 
    }

    if(everyElement.getAttribute("name") === "alkalineMetal"){
        everyElement.style.border = "4px solid #FF0000"
        everyElement.style.color = "#FF0000" 
    }

    if(everyElement.getAttribute("name") === "transitionMetal"){
        everyElement.style.border = "4px solid #ffd617"
        everyElement.style.color = "#ffd617"
    }

    if(everyElement.getAttribute("name") === "basicMetal"){
        everyElement.style.border = "4px solid #00cb1d"
        everyElement.style.color = "#00cb1d"
    }

    if(everyElement.getAttribute("name") === "semiMetal"){
        everyElement.style.border = "4px solid #00ede2"
        everyElement.style.color = "#00ede2"
    }

    if(everyElement.getAttribute("name") === "nonMetal"){
        everyElement.style.border = "4px solid #EFF8FF"
        everyElement.style.color = "#EFF8FF"
    }

    if(everyElement.getAttribute("name") === "halogen"){
        everyElement.style.border = "4px solid #9e00ff"
        everyElement.style.color = "#9e00ff"
    }

    if(everyElement.getAttribute("name") === "nobleGas"){
        everyElement.style.border = "4px solid #d22cff"
        everyElement.style.color = "#d22cff"
    }

    if(everyElement.getAttribute("name") === "lanthanides"){
        everyElement.style.border = "4px solid #ff0063"
        everyElement.style.color = "#ff0063"
    }

    if(everyElement.getAttribute("name") === "actinides"){
        everyElement.style.border = "4px solid #ff0041"
        everyElement.style.color = "#ff0041"
    }
}

function turnLightsOff(everyElement){
    if (everyElement.style.boxShadow !== "0px 0px 0px" && everyElement.style.textShadow !== "0px 0px 0px") {
        everyElement.style.border = "4px solid #202020"
        everyElement.style.color = "#202020"
        everyElement.style.boxShadow = "0px 0px 0px"
        everyElement.style.textShadow = "0px 0px 0px"
    }
}

function enterWhileOff(event){
    if (neonBtn.checked == false) {
        let element = event.target
        element.style.border = "4px solid #EFF8FF"
        element.style.color = "#EFF8FF"
        element.style.boxShadow =  "0px 0px 30px"
        element.style.textShadow = "2px 2px 10px"
    }
    
}

function leaveWhileOff(event){
    if (neonBtn.checked == false) {
        let element = event.target
        element.style.border = "4px solid #202020"
        element.style.color = "#202020"
        element.style.boxShadow = "0px 0px 0px"
        element.style.textShadow = "0px 0px 0px" 
    }
}

// setting events / calling functions 

function inputCheck() {
    console.log(neonBtn.checked)
    allElements.map(every => {
        if (neonBtn.checked == true) {
            
            turnLightsOn(every)
            //getColors(every)
        } else {
            
            turnLightsOff(every)
            every.addEventListener("mouseenter", enterWhileOff)
            every.addEventListener("mouseleave", leaveWhileOff)
        }
    })
}

neonBtn.addEventListener("change", inputCheck)


