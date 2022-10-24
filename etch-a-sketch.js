let container = document.querySelector('#container');
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    const input = parseInt(prompt("How many square do you want for the grid?"));
    container.remove();
    const newContainer = document.createElement('div');
    newContainer.setAttribute('id', 'container');
    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(newContainer);
    container = document.querySelector('#container');
    createGrid(input);

})


createGrid(16);
function createGrid(num) {
    for(let i = 0 ; i < num ; i++) {
        const divs = document.createElement('div');
        container.appendChild(divs);
        for(let j = 0 ; j < num ; j++) {
            const div = document.createElement('div');
            div.textContent = "";
            divs.appendChild(div);
            div.classList.add('square');
            div.style.width = `${(960 / num)}px`;
            div.style.height = `${(960 / num)}px`;
            div.style.backgroundColor = "white";
            div.addEventListener('mouseenter', function(e) {
                if(this.style.backgroundColor === "white") {
                    return this.style.backgroundColor = randomRgb();
                } else {
                    return this.style.backgroundColor = increaseBlack(this.style.backgroundColor);
                }
                
            })
            
        }
    }
}

function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

function increaseBlack(rgb) {
    let numWithComma = rgb.substring(4, rgb.length -1);
    let arr = numWithComma.split(',');
    let r = arr[0] - 26;
    let g = arr[1] - 26;
    let b = arr[2] - 26;
    return `rgb(${r},${g},${b})`;
}



