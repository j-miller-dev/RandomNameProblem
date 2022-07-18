   const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
const section = document.getElementsByTagName('section');
function chooseName(name) {
  let namesList = names.length;
  let randomNumber = Math.floor(Math.random() * namesList + 1);

  let randomName = names[randomNumber];
  console.log(randomName);

  return document.body.innerHTML = randomName;
  
}
chooseName();
// Don't edit the code below here!

section.innerHTML = ' ';

// section.appendChild(para);