//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.

//creazione delle variabili
var verificato, yourmail, mail;
//
verificato = false;
//input dell'utente
yourmail = prompt("Inserite il vostro indirizzo email");
//creazione array contenente la nostra lista delle email
mail = ["john.doe@mymail.ch", "ad.ma@live.it", "alias.alias@proton.fr", "adriana@gmail.com"];
//verifica se l'email è contenuta o meno nella lista
for (var i = 0; i < mail.length; i++) {
  if (mail[i] == yourmail) {
    verificato = true;
  }
}

if (verificato == true) {
  document.getElementById('esito').innerHTML = "Sei autorizzato ad accedere";
} else {
  document.getElementById('esito').innerHTML = "Ci dispiace, ma non sei autorizzato ad accedere!";
}
