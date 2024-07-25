// task 01
document.getElementById('task01').innerText = 'hi my text content has changed';

// task 02
document.getElementsByClassName('task02')[0].style.backgroundColor = 'lightblue'

// task 03
const div = document.createElement('div');
const text = document.createTextNode('Anas raza here');
div.appendChild(text);
document.body.appendChild(div);

// task 04
const ul = document.querySelector('.existing-ul');
const li = document.createElement('li')
li.innerText = 'My List';
ul.appendChild(li);

// task 05
document.querySelector('.remove-me').remove();

// task 06
document.querySelector('#parent').lastElementChild.remove();

// task 07
const button = document.createElement('button');
button.innerText = 'Change Image';
document.body.appendChild(button);

button.addEventListener('click', function () {
    const catImage = document.querySelector('#cat-img')
    if (catImage.attributes.src.nodeValue === './images/cat.jpg') {
        catImage.setAttribute('src', './images/cat-02.jpg')
        return;
    }
    catImage.setAttribute('src', './images/cat.jpg')
});

// task 08
const addRemoveClass = document.querySelector('.change-my-class');
addRemoveClass.addEventListener('click', () => {
    if (!addRemoveClass.classList.contains('add-class')) {
        addRemoveClass.classList.add('add-class');
        addRemoveClass.innerText = 'Remove class'
        return;
    }
    addRemoveClass.classList.remove('add-class');
    addRemoveClass.innerText = 'Add class'
})

// task 09
const para = document.querySelector('.text-para');
const btn = document.querySelector('.change-para');
btn.addEventListener('click', () => {
    para.innerText = 'Text content changed!';
})

// task 10
para.addEventListener('mouseover', () => {
    para.style.border = '2px solid red';
})

