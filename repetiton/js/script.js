let btn = document.querySelector('button');
let input = document.querySelector('input');
let header = document.querySelector('h1');

// Click on btn
btn.addEventListener('click', (e) => {
    let text = input.value;
    header.innerText = text;
    input.value = '';
})

// Keyup in input field
input.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        let text = input.value;
        header.innerText = text;
        input.value = ''; 
    }
})


