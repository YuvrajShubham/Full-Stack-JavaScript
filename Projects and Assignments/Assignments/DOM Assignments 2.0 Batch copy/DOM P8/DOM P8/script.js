const aside = document.getElementsByTagName("aside")[0]
console.log(aside)
aside.style.border = "5px solid red";
console.log(aside.children)
for(let i = 0; i < aside.children.length; i++){
    console.log(aside.children[i])
    const asideChildren = aside.children[i]
    asideChildren.style.padding = "10px"
    // asideChildren.style.width = "10rem";
    // asideChildren.style.height = "10rem";
}
// asideChildren.style.padding = "10px"
// aside.style.padding = "5px solid red"; 