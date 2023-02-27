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