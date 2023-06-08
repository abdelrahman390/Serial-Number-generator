let nameInput = document.querySelector("#name"),
    ageInput = document.querySelector("#age"),
    card = document.querySelector("form"),
    submitButton = document.querySelector("form .button");

let userName = document.querySelector(".name_output"),
    age = document.querySelector(".age_outPut"),
    serialoutput = document.querySelector(".serial_outPut span"),
    data = document.querySelector(".data");


submitButton.onclick = function (){

let curecters = "123456789qwertyuioplkjhgfdsazxcvbnm!@#$%^&*"
let count = 10
let randomNum = ""

var NamePattern = /[A-Za-z]+/ig;
var agePattern = /[0-9]/;


if (nameInput.value === "") {
    alert("name field is empty");
  } else if (NamePattern.test(nameInput.value) === false){
    alert("name field format is wrong")
  } else if (ageInput.value === ""){
    alert("age field is empty");
  } else if (agePattern.test(ageInput.value) === false || !(ageInput.value.length === 2)){
    alert("age field format is wrong");
  } else {
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

document.querySelector('form').onsubmit = e => {
    e.preventDefault();
}



