// ass7.1
// Get all the <a> elements on the page
const courses = document.getElementsByTagName('a');
// console.log(courses)

// Loop through each <a> element using forEach
Array.from(courses).forEach((course) => {
    console.log(course)
    if (course.textContent.includes("2.0")){
        // Remove the element from the document
        course.remove();
    }
});

// ass 7.2

const button = document.querySelector('.main__form-btn');
console.log(button)
const input = document.querySelector('input');
button.disabled = false;
input.disabled = false;

// const addCourse = `<a target="_blank" href="https://www.ineuron.ai">JavaScript 2.0</a>`;
// Array.from(courses).forEach((course) => {
//     if(course.textContent.includes(!"2.0")){
//         button.onclick = ()=> {course.append(addCourse)};
//     }
// })

// const linksContainer = document.getElementsByTagName('a');
//   const addLinksButton = document.querySelector('.main__form-btn');
  
//   // This function adds the links containing "2.0" back to the page
//   function addLinks() {
//     // Create a new <div> element to hold the links
//     const linksDiv = document.createElement('div');

//     // Create an array of link names with "2.0" in their text content
//     const linkNames = ['JavaScript 2.0', 'React 2.0', 'Node 2.0', 'HTML & CSS 2.0', 'MERN 2.0'];

//     // Loop through the link names and create <a> elements for them
//     linkNames.forEach((linkName) => {
//       const link = document.createElement('a');
//       link.textContent = linkName;
//       link.setAttribute('href', 'https://www.ineuron.ai');
//       link.setAttribute('target', '_blank');
//       linksDiv.appendChild(link);
//     });

//     // Add the <div> element with the links to the page
//     linksContainer.appendChild(linksDiv);
//   }

//   addLinksButton.addEventListener('click', addLinks);