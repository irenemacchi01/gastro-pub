document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i link nel menu di navigazione
    const links = document.querySelectorAll('nav a');

    // Aggiungi un gestore di eventi a ciascun link nel menu di navigazione
    links.forEach(link => {
        link.addEventListener('click', smoothScroll); // Quando viene cliccato un link, esegui la funzione smoothScroll
    });

    function smoothScroll(event) {
        // Impedisci il comportamento predefinito del link (navigazione diretta alla sezione)
        event.preventDefault();
        // Ottieni l'ID della sezione di destinazione dal link
        const targetId = this.getAttribute('href');
        // Seleziona l'elemento della sezione di destinazione
        const targetSection = document.querySelector(targetId);
        // Ottieni la posizione verticale dell'inizio della sezione di destinazione
        const offsetTop = targetSection.offsetTop;

        // Esegui lo scorrimento della finestra alla posizione della sezione di destinazione con animazione
        setTimeout(function() {
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' 
            });
        }, 300); // Aggiungi un ritardo di 300 millisecondi (0.3 secondi) prima dell'animazione
    }
});


// Seleziona l'icona per tornare in cima
var goTop = document.getElementById("go-top");

// Mostra l'icona quando si scorre verso il basso
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};

// Aggiungi un gestore di eventi per lo scorrimento verso l'alto quando si clicca sull'icona
goTop.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previeni il comportamento predefinito del form

    // Ottieni i valori dei campi del form
    var nome = document.getElementById("name").value;
    var data = document.getElementById("date").value;
    var orario = document.getElementById("time").value;
    var persone = document.getElementById("partySize").value;
    var telefono = document.getElementById("phone").value;

    // Mostra un popup di conferma
    alert("La prenotazione è avvenuta con successo!");

    // Dopo aver eseguito le azioni desiderate, puoi eventualmente resettare il form
    document.getElementById("bookingForm").reset();
});