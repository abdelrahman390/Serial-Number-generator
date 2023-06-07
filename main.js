let nameInput = document.querySelector("#name")
let ageInput = document.querySelector("#age")
let submitButton = document.querySelector(".card form h1")
let card = document.querySelector(".FirstForm")

// let submitButton = document.querySelector("#button")

let userName = document.querySelector(".name_output")
let age = document.querySelector(".age_outPut")
let serialoutput = document.querySelector(".serial_outPut span")
let data = document.querySelector(".data")


submitButton.onclick = function (){

let curecters = "123456789qwertyuioplkjhgfdsazxcvbnm!@#$%^&*"
let count = 10
let randomNum = ""

    if(!(nameInput = "")){
console.log(nameInput)
        for(let i = 0; i < count; i++ ){

            randomNum += curecters[Math.floor(Math.random() * curecters.length)]
            // console.log(randomNum)
            serialoutput.innerHTML = `${randomNum}`
        
        }
            card.style.display = "none"
            data.style.display = "block"
        
            userName.innerHTML = nameInput.value
            age.innerHTML = ageInput.value

    }

}
// hh();
    // let submitButton = document.querySelector(".card form .submit")
    // userName.innerHTML = nameInput.value
    // age.innerHTML = nameInput.value
 










