const container = document.querySelector('.container');

// containing sub grid it will contain small divs
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid)

// creating range slider to decide how many boxes in the grid 
const rangeSlider = document.getElementById('rangeSlider')
const rangeValue = document.getElementById('rangeValue')
rangeValue.innerHTML = rangeSlider.value;

grid.textContent = "let's draw"


// making apply button
const apply = document.getElementById("apply")
apply.onclick = squareNumber


// deciding the number of squares in the grid 

function squareNumber() {
    grid.innerHTML = ''
    number = rangeValue.innerHTML;
    numberOfSquares(number)
    gridStyle(number)
}


// taking the range slider's input 
rangeSlider.oninput = function () {
    rangeValue.innerHTML = this.value;
}

function gridStyle(number) {
    grid.setAttribute(`style`, `background:blue; width:600px; height:600px; display:grid; grid-template-columns:repeat(${number}, 1fr);`)
}



// creating small divs.
function numberOfSquares(number) {
    for (i = 1; i <= number * number; i++) {
        const board = document.createElement('div')
        board.classList.add("content")
        grid.appendChild(board)
        const buttons = document.querySelectorAll('.content');
        buttons.forEach(button => {
            button.addEventListener("mousemove", handle)
        })
        const reset = document.getElementById('reset')

        reset.addEventListener('click', () => board.style.background= '#FFC0CB')

    }
}


// this handles every click and change div's color 
function handle(e) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let random = randomColor1.onclick = color_picker_random
    let eraser = '#FFC0CB';
    const color = document.getElementById('color');
    // e.target.style.backgroundColor = `${color_picker_random()}`;
    e.target.style.backgroundColor = `${color.value}`;
}



// todo: somehow make three buttons which will decide the colours 
const randomColor1 = document.getElementById('randomColor');
const eraser = document.getElementById('eraser');


// randomColor.onclick = color_picker_random
// eraser.onclick = color_picker_eraser

function color_picker_random() {
    console.log('you clicked random ')
    color = Math.floor(Math.random() * 16777215).toString(16);
    console.log(`some${color}`)
    return `#${color}`
}

function color_picker_eraser() {
    console.log("you clicked the earaser ")
    return '#FFC0CB'
}


