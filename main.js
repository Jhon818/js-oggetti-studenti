// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 var studente = {
    nome: "Giovanni",
    cognome: "Pinto",
    eta: "20"
};
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(var key in studente ){
    console.log(studente[key]);
}
// Creare un array di oggetti di studenti.
var oggetti_studenti = [
    {
        nome: "Filippo",
        cognome: "Bommarito"
    }
    ,
    {
        nome: "Alessio",
        cognome: "Vietri"
    }
]
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
console.log(oggetti_studenti[0] , oggetti_studenti[1]);
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


   credenziali1 = prompt("inserisci nome");
   credenziali2 = prompt("inserisci cognome");
   credenziali3 = prompt("inserisci età");


oggetti_studenti.push(credenziali1,credenziali2,credenziali3)
console.log(oggetti_studenti);