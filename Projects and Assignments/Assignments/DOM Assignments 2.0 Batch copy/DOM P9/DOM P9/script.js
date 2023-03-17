const title = document.getElementsByTagName('h1')[0]
console.log(title)
title.style.color = 'red';

// button color to red

const button = document.getElementsByTagName('button')[0]
console.log(button)
// button.style.backgroundColor = "red";

button.onclick= (()=>{
    button.style.backgroundColor = "red";
})