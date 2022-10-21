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
    letter(input);

})


letter(16);
function letter(num) {
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
                console.log(this.style.backgroundColor)
                this.style.backgroundColor = 'rgb(88, 118, 240)';
            })
            
        }
    }
}


