// const subscription = document.getElementsByClassName("nav-center")
// console.log(subscription)
// subscription.append('<a href="index.html" class="btn"> Pro Subscripton </a>')
// subscription.innerHTML(
// '<div> <a href="index.html" class="btn"> Pro Subscripton </a></div>'
// )


// subscription.appendChild(subButton)

// var node = document.getElementsByClassName("nav-center")
// console.log(node)
// node.innerHTML('vbjnkn');



// container.innerHTML = html;

// const container = document.querySelector('.nav-center');
// let child = container.appendChild
// child.innerHTML = html;

// // Create an "li" node:
// const node = document.createElement("a");

// // Create a text node:
// const textnode = document.createTextNode("Pro Subscripton");

// // Append the text node to the "li" node:
// node.appendChild(textnode);
// console.log(node.appendChild(textnode))

// // Append the "li" node to the list:
// document.getElementsByClassName("nav-center").appendChild(node);

// const html = 
// `
// <div><a href="index.html" class="btn"> Pro Subscripton </a> </div> ` ;

// let node = document.createElement("div")
// let n1 = container.appendChild(node)
// n1.innerHTML = html

// const card = document.getElementsByClassName("recipe-gallery")
// cardHtml = `
// <div class="card">
//                     <a href="#" class="recipe-text">
//                         <img src="./img/recipe-5.jpeg" class="recipe-img " />
//                         <h5 class="recipe-name">Hakka Noodles</h5>
//                         <p class="recipe-disp">Prep : 15min | Cook : 30min</p>
//                     </a>
//                 </div>`;

// card.innerHTML = cardHtml



// const html = `
// <a href="index.html" class="btn"> Pro Subscripton </a>
// `;

// const node = document.getElementsByClassName("nav-center")
// const n1 = document.createElement("div");
// n1.innerHTML = html
// console.log(n1)

// node.innerHTML = n1
// console.log(node.innerHTML)

// const link = document.getElementsByClassName('nav-center')
// // console.log(Array.from(link))
// const div = document.createElement("div")
// // const div = document.createElement("div")
// // const subs = document.append('btn')
// // div.innerText = 'cvbnm,';
// const btn = link.append('div')
// btn.innerText = 'xcvbnm'


const button = document.querySelector(".btn")
console.log(button);
const html = '<a href="index.html" class="btn"> Pro Subscription </a>';
button.insertAdjacentHTML("afterend", html)

const card = document.querySelector(".recipe-gallery").lastElementChild

console.log(card)

const cardHtml = `<h1 class='card'>add 6th card here</h1>`

card.insertAdjacentHTML("afterend", cardHtml)

const footerName = document.querySelector(".footer-logo").nextElementSibling
console.log(footerName)
footerName.innerHTML = "Yuvraj Shubham"



 