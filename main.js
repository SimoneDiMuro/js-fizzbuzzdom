 // Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell'indice
// per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

const container = document.querySelector(".container")

for (let i= 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        container.innerHTML += "<div class ='block fizzbuzz'> FizzBuzz </div>"
    }

    else if (i % 3 == 0 ){
        container.innerHTML += "<div class ='block fizz'> Fizz </div>"
    }

    else if (i % 5 == 0){
        container.innerHTML += "<div class ='block buzz'> Buzz </div>"
    }

    else {
        container.innerHTML += "<div class ='block'>" + i + "</div>"
    }
}