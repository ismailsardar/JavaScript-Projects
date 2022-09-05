let count = 0;
let counterBtn = document.getElementById('counter');
let savePra = document.getElementById('save_pra');

function increment() {
    count += 1;
    counterBtn.textContent = count;
}

function save() {
    let previousEnt = count + ' - ';
    savePra.textContent += previousEnt;
    counterBtn.textContent = 0;
    count = 0;
}

