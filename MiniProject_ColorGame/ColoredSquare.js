// Generate cells in the right pane
for (i = 0; i < 2542; i++) {
    let sq = document.createElement('div');
    sq.classList.add('square');
    document.getElementById('right').appendChild(sq);
};

// Generate color pallet elements
colors = [
    'blue',
    'red',
    'yellow',
    'green',
    'pink',
    'black',
    'orange',
    'cyan',
    'magenta',
    'crimson',
    'coral',
    'brown',
    'grey',
    'lightgreen',
    'olive',
    'indigo',
    'peru',
    'chartreuse',
    'indianred',
    'teal',
    'purple',
];

for (i = 0; i < 21; i++) {
    let samp = document.createElement('div');
    samp.classList.add('hue');
    samp.style.backgroundColor = colors[i];
    document.getElementById('pallet').appendChild(samp);
};

// Record clicked color
let elementsArray = document.querySelectorAll(".hue");
let currentColor = "black";
let penDown = false;

elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        currentColor = elem.style.backgroundColor;
    });
});

// Detect clicked squares and paint them with selected color
let squareArray = document.querySelectorAll(".square");
squareArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        penDown = !penDown;
        if (penDown) {
            elem.style.backgroundColor = currentColor;
        }
    });
});

// Detect squares flied over by mouse and paint them if pen is down
squareArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        if (penDown) {
            elem.style.backgroundColor = currentColor;
        }
    });
});

// Detect clik on clear
let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function() {
    squareArray.forEach(function(elem) {
        elem.style.backgroundColor = "white";
        penDown = false;
    })
})