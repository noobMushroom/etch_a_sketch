const container = document.querySelector('.container');
const Colorbuttons= document.querySelectorAll(".colorPick")
some=''
Colorbuttons.forEach(button=>{
    // console.log(button.name)
    button.addEventListener('click',() =>some=button.name) 
})


// creating sub grid it will contain small divs
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid)

// creating range slider to decide how many boxes in the grid 
const rangeSlider = document.getElementById('rangeSlider')
const rangeValue = document.getElementById('rangeValue')
rangeValue.innerHTML = rangeSlider.value;

grid.innerHTML = "Pick a color or rainbow <br> and the number of grids and start making <br> beautiful arts."


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
    grid.setAttribute(`style`, `background:blue; width:600px; height:600px; display:grid; grid-template-columns:repeat(${number}, 1fr); box-shadow: inset 0 -3em 3em rgba(6, 4, 4, 0.944), 0 0 0 2px rgb(40, 31, 31),
    0.3em 0.3em 1em rgba(82, 80, 80, 0.696);`)
}



// creating small divs.
function numberOfSquares(number) {

    for (i = 1; i <= number * number; i++) {
        const board = document.createElement('div')
        board.classList.add("content")
        grid.appendChild(board)
        const reset = document.getElementById('reset')
        
        reset.addEventListener('click', () => {
            board.style.backgroundColor = '#00FFEF'
        })}
        const buttons = document.querySelectorAll('.content');
        buttons.forEach(button => {
            button.addEventListener("mousemove", (e) => {
                if (some=="rainbow") {
                    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    e.target.style.backgroundColor = `#${randomColor}`
                } else if (some=="pick") {
                    const color = document.getElementById('color');
                    e.target.style.backgroundColor = color.value
                }else if(some=='white'){
                    e.target.style.backgroundColor = "white"
                }else if(some=='black'){
                    e.target.style.backgroundColor = "black"
                }else {
                    e.target.style.backgroundColor = "#00FFEF"
                }
            })
            
        })
}