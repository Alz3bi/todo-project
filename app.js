var UserName= prompt("please Enter your Name")

var UserGender= prompt("please Enter your Gender, Male/Female")

var UserAge= prompt("please Enter your Age")

if (UserAge <= 0) {
    alert("age should not be less or equal to zero")
}

var Userprefix=""

if (UserGender == "Male") {
    Userprefix = "Mr"
}
else if(UserGender == "Female"){
    Userprefix = "Ms"
}

var confirmResult= confirm("Do you want to skip the welcoming message")

if (confirmResult == false) {
    alert("Welcome "+Userprefix+" "+UserName)
}