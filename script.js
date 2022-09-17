const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid)
const rangeSlider = document.getElementById('rangeSlider')
const rangeValue = document.getElementById('rangeValue')
rangeValue.innerHTML = rangeSlider.value;

grid.textContent="let's draw"

const apply=document.getElementById("apply")
let number=5;
apply.onclick= squareNumber


function squareNumber(){
    grid.innerHTML=''
    number=rangeValue.innerHTML;
    numberOfSquares(number)
    gridStyle(number)
}

rangeSlider.oninput = function () {
    rangeValue.innerHTML = this.value;
}

function gridStyle (number){
grid.setAttribute(`style`, `background:blue; width:600px; height:600px; display:grid; grid-template-columns:repeat(${number}, 1fr);`)}

function numberOfSquares(number) {
    for (i = 1; i <= number * number; i++) {
        const board = document.createElement('div')   
        board.classList.add("content")
        grid.appendChild(board)
        const buttons = document.querySelectorAll('.content');
        buttons.forEach(button => {
            button.addEventListener("mousemove", handle)
        })
    }
}

function handle(e) {
    e.target.style.backgroundColor = "red";
}
