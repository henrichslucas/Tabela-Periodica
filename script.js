let allElements = [
    ...document.querySelectorAll(".elementContainer")
]

let neonBtn = document.querySelector("#neonButton")
let title = document.querySelector("#pageTitle")

function turnLightsOn(everyElement){
    everyElement.setAttribute("status", "active")
}

function turnLightsOff(everyElement){
    everyElement.setAttribute("status", "off")
}

function enterWhileOff(event){
    if (neonBtn.checked == false){
        let element = event.target
        turnLightsOn(element)
    }
}

function leaveWhileOff(event){
    if (neonBtn.checked == false){
        let element = event.target  
        turnLightsOff(element)
    }
}

function inputCheck(){
    allElements.map(every => {
        if (neonBtn.checked == true){
            turnLightsOn(every)
        } else {
            turnLightsOff(every)
            every.addEventListener("mouseenter", enterWhileOff)
            every.addEventListener("mouseleave", leaveWhileOff)
        }
    })
}

neonBtn.addEventListener("change", inputCheck)