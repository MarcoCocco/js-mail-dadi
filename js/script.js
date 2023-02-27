/* 
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per 
il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa 
vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
programma così come lo faremmo "a mano" 
*/


//----------------------------MAIL---------------------

//1- Definisco l'array di email.
let eMails = ['fraser@outlook.com', 'esokullu@hotmail.com', 'isorashi@yahoo.com', 'khris@optonline.net', 'kaiser@gmail.com', 'mahbub@live.com', 'crobles@gmail.com'];

//2- Chiedo all'utente la sua email tramite form e la memorizzo in una variabile.
let userEmailEl = document.getElementById('user-email');

//3- Creo un container che racchiuda gli alert appropriati.
let alertContainerEl = document.getElementById('alert-container');
let newPEl = document.createElement('p');
alertContainerEl.append(newPEl);

// 4- Aggiungo un evento al pulsante per verificare l'email inserita dall'utente.
let sendButtonEl = document.getElementById('send-button');

sendButtonEl.addEventListener('click', function () {

    //5- Aggiungo alla variabile NewPEl una stringa vuota in modo che l'alert si resetti all'inizio di ogni ciclo,
    //e una variabile booleana per verificare se l'email dell'utente corrisponde ad una delle email dell'array.
    newPEl.textContent = '';
    let emailFound = false;

    //6- Creo un ciclo che possa controllare ogni indice del mio array.
    for (i = 0; i < eMails.length; i++) {

        //? SE l'email inserita corrisponde al valore di un indice, stampa 
        //"Accesso Consentito".
        if (userEmailEl.value === eMails[i]) {

            newPEl.textContent = 'Accesso Consentito.';
            newPEl.style.color = 'green';
            emailFound = true;

            //Appena viene trovata un'email corrispondente, la variabile booleana diventa vera
            //e si interrompe il ciclo.
            break;

        };

    };

    //? SE a fine ciclo non è stata trovata alcuna corrispondenza, stampa "Email non presente nel database.".
    if (!emailFound) {

        newPEl.textContent = 'Email non presente nel database.';
        newPEl.style.color = 'red';

    };

});

//-------------------------GIOCO DADO--------------------------------

//1- Definisco l'array che conterrà le facce del dado
let diceFaces = ['<i class="fa-solid fa-dice-one"></i>', '<i class="fa-solid fa-dice-two"></i>', '<i class="fa-solid fa-dice-three"></i>', '<i class="fa-solid fa-dice-four"></i>', '<i class="fa-solid fa-dice-five"></i>', '<i class="fa-solid fa-dice-six"></i>'];

//2- Creo e collego un contenitore che conterrà i risultati del lancio
let diceResultsEl = document.getElementById('dice-results');

//3- All'interno si andranno a creare due elementi div che conterranno il risultato del giocatore e del suo avversario
let newDivEl1 = document.createElement('div');
diceResultsEl.append(newDivEl1);

let newDivEl2 = document.createElement('div');
diceResultsEl.append(newDivEl2);

//4- Aggiungo un evento al pulsante che crei il risultato randomico
let diceRollBtnEl = document.getElementById('dice-roll-btn');

diceRollBtnEl.addEventListener('click', function () {

    //5- Genero il risultato randomico del lancio dei due dadi tramite due variabili e il metodo Math.
    let diceRoll1 = diceFaces[Math.floor(Math.random() * diceFaces.length)];
    let diceRoll2 = diceFaces[Math.floor(Math.random() * diceFaces.length)];

    //6- Stilizzo i due div dei risultati del lancio
    newDivEl1.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 30px; margin-bottom: 30px; font-size: 20px; font-weight: bold; color: green;';
    newDivEl2.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 30px; margin-bottom: 30px; font-size: 20px; font-weight: bold; color: red;';
    
    //7- Visualizzo i risultati del lancio dei due dadi nei relativi div.
    newDivEl1.innerHTML = `Il tuo lancio ${diceRoll1}`;
    newDivEl2.innerHTML = `Il lancio del tuo avversario ${diceRoll2}`;

    //8- Confronto i risultati dei due lanci per determinare il vincitore o un pareggio tramite il metodo .indexOf, dato che
    //il numero nella faccia del dado corrisponde al numero dell'indice.
    let index1 = diceFaces.indexOf(diceRoll1);
    let index2 = diceFaces.indexOf(diceRoll2);

    if (index1 > index2) {
        newDivEl1.innerHTML = `Il tuo lancio ${diceRoll1} Hai vinto!`;
        newDivEl2.innerHTML = `Il lancio del tuo avversario ${diceRoll2} Hai perso!`;
    } else if (index2 > index1) {
        newDivEl2.innerHTML = `Il lancio del tuo avversario ${diceRoll2} Hai vinto!`;
        newDivEl1.innerHTML = `Il tuo lancio ${diceRoll1} Hai perso!`;
    } else {
        newDivEl1.innerHTML = `Il tuo lancio ${diceRoll1} Pareggio!`;
        newDivEl2.innerHTML = `Il lancio del tuo avversario ${diceRoll2} Pareggio!`;
    }

});