console.log('****** Week03 Day03 - JS DOM Animations - XP Ninja - Exercise 1 : Box Animation ******')

// Attach event listener  "click on  '+ box'
document.getElementById('plus').addEventListener("click", newBox);

// Generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create a new box and append it to container
function newBox() {
    newb = document.createElement('div');
    newb.classList.add('box');
    newb.style.backgroundColor = getRandomColor();
    document.querySelector('#container').appendChild(newb);
}