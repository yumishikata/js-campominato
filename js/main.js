// ------------FUNZIONI----------------

function randomNum(min , max) {
    var y = Math.floor(Math.random() * (max - min + 1)) + min;
    return y;
}

function duplicato(array) {
    var k = array.length - 1;
    var duplicato = false;
    for (j=0 ; j < k ; j++){
        if (array[k] == array[j]) {
            duplicato = true;
            return duplicato;
        }
    }
    return duplicato;
}

function inArray(array, numero){
    var presente = false;
    for (j=0 ; j<array.length ; j++) {
        if (array[j] == numero){
            presente = true;
            return presente;
        }
    }
    return presente;
}

// ------------FINE FUNZIONI----------------

document.getElementById("invio").addEventListener('click' , 
function() {
    const bombe = 16;
    var max;
    var diff = document.getElementById("difficolta").value;
    console.log(diff);
    if (diff == 0){
        max = 100;
    }
    else if (diff == 1) {
        max = 80;
    }
    else {
        max = 50;
    }

    var arrayBombe = [];
    var i = 0;

    while(i<bombe) {
        arrayBombe[i] = (randomNum(1 , max));
        if (duplicato(arrayBombe) == false) {
            i++;
        } 
    }

    i = 0;
    var arrayUtente= [];
    var risultato;

    while (i < (max - bombe)) {
        arrayUtente[i] = prompt('Inserisci un numero da 1 a ' + max + '(mai inserito prima). Posizione ' + i + ': ');
        if (!isNaN(arrayUtente[i])) {
            if (duplicato(arrayUtente) == false && arrayUtente[i] < max && inArray(arrayBombe , arrayUtente[i]) == false ){
                i++;
            }
            else if (inArray(arrayBombe , arrayUtente[i]) == true) {
                break;
            }
        }
        else {
            alert("Inserire un numero!");
        }
    }
    risultato = i;

    document.getElementById("arr-bombe").innerHTML = "BOMBE: " + arrayBombe;
    document.getElementById("arr-utente").innerHTML = "PLAYER: " + arrayUtente;
    document.getElementById("risultato").innerHTML = "RISULTATO: " + risultato;
}

);

document.getElementById("annulla").addEventListener('click' , 
function() {
    location.reload();
}
);



