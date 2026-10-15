let aritmatika1, operatorAritmatika, aritmatika2, aritmatikaHasil

document.getElementById('aritmatikaBtn').onclick = function() {
    aritmatika1 = document.getElementById('aritmatika1').value
    aritmatika2 = document.getElementById('aritmatika2').valueAsNumber
    operatorAritmatika = document.getElementById('operatorAritmatika').value
    
    let aritmatikaHasil = eval(aritmatika1 + operatorAritmatika + aritmatika2)

    document.getElementById('aritmatikaHasil').textContent = aritmatikaHasil
}

let boolean1, operatorLogika, boolean2, logikaHasil

document.getElementById('logikaBtn').onclick = function() {
    boolean1 = document.getElementById('boolean1').value
    boolean2 = document.getElementById('boolean2').valueAsNumber
    operatorLogika = document.getElementById('operatorLogika').value
    
    let logikaHasil = eval(boolean1 + operatorLogika + boolean2)

    document.getElementById('logikaHasil').textContent = logikaHasil
}