//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

var genera = document.getElementById('lancia');

//Lanciamo il dado per l'utente e il computer
genera.addEventListener('click',
  function(){
    //Lancio del dado per l'utente
    var dadoUtente = Math.floor( Math.random() * 6) + 1;
    console.log("l'utente dal lancio del dado ha ottenuto il numero: ", dadoUtente);
    //Lancio del dado per il computer
    var dadoComputer = Math.floor( Math.random() * 6) + 1;
    console.log("il computer dal lancio del dado ha ottenuto il numero: ", dadoComputer);
    //Chi ha vinto??? Scopriamolo
    if (dadoUtente > dadoComputer) {
      var vincitore = "Complimenti hai sconfitto il computer!";
      console.log(vincitore);
    } else if (dadoUtente < dadoComputer) {
      var vincitore = "Il gioco è stato vinto dal computer";
      console.log(vincitore);
    } else {
      var vincitore = "Siete stati troppo bravi, avete pareggiato!";
      console.log(vincitore);
    }
    //Stampiamo a schermo l'esito del lancio dei dati
    document.getElementById('vinto').innerHTML = vincitore;
  }
)
