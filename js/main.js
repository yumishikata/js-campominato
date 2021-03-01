function randomNum(min , max) {
    var y = Math.floor(Math.random() * max) + min;
    return y;
}

function insertNum(array , num) {
    array.push(num);
}

function duplicato(array) {
    var k = array.length - 1;
    var duplicato = false;
    for (j=0 ; j < k ; j++){
        if (array[k] == array[j]) {
            duplicato = true;
        }
    }
    return duplicato;
}

function inArray(array, numero){
    var presente = false;
    for (j=0 ; j<array.length ; j++) {
        if (array[j] == numero){
            presente = true;
        }
    }
    return presente;
}

const bombe = 16;
const max = 100;

var arrayBombe = [];
var i = 0;
while(i<bombe) {
    arrayBombe[i] = (randomNum(1 , max));
    if (duplicato(arrayBombe) == false) {
        i++;
    } 
    }


console.log(arrayBombe);
i = 0;
var arrayUtente= [];
var risultato;
while (i < (max - bombe)) {
    arrayUtente[i] = prompt('Inserisci un numero da 1 a 100 (mai inserito prima). Posizione ' + i + ': ');
    if (duplicato(arrayUtente) == false && inArray(arrayBombe , arrayUtente[i]) == false ){
        i++;
    }
    else if (inArray(arrayBombe , arrayUtente[i]) == true) {
        break;
    }
}
console.log(arrayUtente);
risultato = i;
console.log('IL TUO RISULTATO E ' + risultato);


