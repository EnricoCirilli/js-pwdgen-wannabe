// check if js is working with alert
// alert("hello world")

const userName=prompt("Hello User! what's your name?");
console.log(userName, 'type userName');

const userSurname=prompt("Hello User! what's your Surname?");
console.log(userSurname, 'type userSurname');

const userFavoriteColor=prompt("Hello User! what's your favorite color?");
console.log(userFavoriteColor, 'type userFavoriteColor');

const resultMessage=`you password is:${userName}${userSurname}${userFavoriteColor}21`;
console.log(resultMessage);

document.getElementById("result").innerHTML = resultMessage;
