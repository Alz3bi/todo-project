'use strict';

const myTimeout = setTimeout(2000);

var userName= prompt("please Enter your Name")

var userGender= prompt("please Enter your Gender, Male/Female").toLowerCase()

var userAge= prompt("please Enter your Age")

if (userAge <= 0) {
    alert("age should not be less or equal to zero")
}

var userprefix=""

if (userGender == "male") {
    userprefix = "Mr"
}
else if(userGender == "female"){
    userprefix = "Ms"
}

var confirmResult= confirm("Do you want to skip the welcoming message")

if (confirmResult == false) {
    alert("Welcome "+userprefix+" "+userName)
}

const answersArray = []

function askFunction(question){
    let answer = prompt(question)
    if(answer == ""){
        answersArray.push("invalid")
    }else {
        answersArray.push(answer)
    }
}

askFunction("Is this your first time visiting this site?(yes/no)")
askFunction("Do you like the new design of this site?(yes/no)")
askFunction("Do you think i should add new styles to the About page?(yes/no)")

answersArray.forEach((answer) => console.log(answer));