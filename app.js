
function appendNumber (value) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + value
}

function delNumber () {
    document.getElementById('display').innerHTML = ' '
    
}

function calcular () {
    var resultado = document.getElementById('display').innerHTML;

    if(resultado){
        var resultado = document.getElementById('display').innerHTML = eval(resultado);
    }
}