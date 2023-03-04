const hello = "Hello";

const title = document.querySelector('.title');

title.textContent = "text";

const newElement = document.createElement('div');
newElement.setAttribute('class', 'new-element')
newElement.innerHTML = 'WT project';
console.log(newElement);

title.innerHTML = newElement.outerHTML;

console.log(title)

