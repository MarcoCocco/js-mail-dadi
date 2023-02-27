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

//1- Definisco l'array di email.
//2- Chiedo all'utente la sua Email tramite form e la memorizzo in una variabile.
//3- Aggiungo un evento al pulsante per verificare l'email inserita dall'utente.
//4- Creo un ciclo che possa controllare ogni indice del mio Array.
//? SE l'email inserita corrisponde al valore di un indice, stampa 
//"Accesso Consentito".
//: ALTRIMENTI stampa "Email non presente nel database".

//1- Definisco l'array di email.
let eMails = ['fraser@outlook.com', 'esokullu@hotmail.com', 'isorashi@yahoo.com', 'khris@optonline.net', 'kaiser@gmail.com', 'mahbub@live.com', 'crobles@gmail.com'];

//2- Chiedo all'utente la sua Email tramite form e la memorizzo in una variabile.
let userEmailEl = document.getElementById('user-email');

// 3- Aggiungo un evento al pulsante per verificare l'email inserita dall'utente.
let sendButtonEl = document.getElementById('send-button');

sendButtonEl.addEventListener('click', function () {

    //4- Creo un ciclo che possa controllare ogni indice del mio Array.
    for (i = 0; i < eMails.length; i++) {

        //? SE l'email inserita corrisponde al valore di un indice, stampa 
        //"Accesso Consentito".
        if (userEmailEl.value === eMails[i]) {
            console.log('Accesso Consentito');
        } else {
            //: ALTRIMENTI stampa "Email non presente nel database".
            console.log('Email non presente nel database');
        };

    }
    
});