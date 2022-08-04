

const square = document.querySelector('.square') 

square.addEventListener('click', () => {

    if(square.style.backgroundColor == '') {
        square.style = `
    background: yellow; 
    transition: 0.5s;
    border-radius: 50%;
    `
    }else if(square.style.backgroundColor == 'yellow') {
        square.style += `
    background: blue; 
    transition: 0.5s;
    border-radius: none;
    `
    }
    console.log(square);
})



