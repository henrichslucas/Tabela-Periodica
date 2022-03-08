let allElements = [
    ...document.querySelectorAll(".elementContainer")
]
let allIndexes = [
    ...document.querySelectorAll(".colorSquare"),
    ...document.querySelectorAll(".indexTitle")
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

            allIndexes.map(index => {
                turnLightsOn(index)
                console.log(index)
            })

        } else {
            turnLightsOff(every)
            every.addEventListener("mouseenter", enterWhileOff)
            every.addEventListener("mouseleave", leaveWhileOff)
            allIndexes.map(index => turnLightsOff(index))
        }
    })
}

neonBtn.addEventListener("change", inputCheck)