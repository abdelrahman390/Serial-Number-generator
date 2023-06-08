let nameInput = document.querySelector("#name"),
    ageInput = document.querySelector("#age"),
    card = document.querySelector("form"),
    submitButton = document.querySelector("form .button");

let userName = document.querySelector(".name_output span"),
    age = document.querySelector(".age_outPut span"),
    serialoutput = document.querySelector(".serial_outPut span"),
    data = document.querySelector(".data"),
    copyButton = document.querySelector(".card .data .button"),
    getserial = ""


submitButton.onclick = function (){

let curecters = "123456789qwertyuioplkjhgfdsazxcvbnm@#$%&"
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
        getserial = randomNum
    }

    // getserial(randomNum);

        card.style.display = "none"
        data.style.display = "flex"
    
        userName.innerHTML = nameInput.value
        age.innerHTML = ageInput.value
  }

}




copyButton.onclick = function getserial() {

    var serial = document.querySelector(".serial_outPut span").innerHTML

    console.log(serial)

    document.designMode = "on";

    serial.select();
    serial.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(serial);
  
    // Alert the copied text
    alert("Copied the text: " + serial);

  }

document.querySelector('form').onsubmit = e => {
    e.preventDefault();
}








