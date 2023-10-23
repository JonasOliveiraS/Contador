contador = 0;

const currentNumber = document.getElementById('currentNumer');

function decrement(){
    contador--;
    currentNumber.innerHTML = contador;
}

function increment(){
    contador++;
    currentNumber.innerHTML = contador;
}