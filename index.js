// 1. Finde heraus, was dieser Code macht und wie er das anstellt, indem du ihn analysierst.
// 2. Benenne alle Variablen sinnvoll um.
// 3. Exportiere die umbenannte Funktion f und verwende sie in einem HTML-Formular.​
//*erstellt Array aus alles 26 Buchstaben
const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function codieren(number) {
    return {
        codedString(eingabestring) {
            //* splittet den Satz in einzelne, kleingeschriebene Buchstaben auf
            const kleinerSplitStringD = eingabestring.toLowerCase().split("");

            // erstellt aus den buchstaben ein neues array, aber iteriert dabei durch den Index jedes Buchstaben und summiert den Index mit der eingegebenen Zahl und erstellt den Modulo aus der länge des Arrays der Buchstaben
            const neuesLetterArray = kleinerSplitStringD.map(e => {
                const i = array.indexOf(e);
                // für alles, was kein Buchstabe ist, wird ein - geschrieben
                if (i < 0) return "-";
                return array[(i + number) % array.length];
            });

            // die einzelnen neuen Buchstaben werden zu einem String zusammengefügt
            const neuerLetterString = neuesLetterArray.join("");
            return neuerLetterString;
        },

        realString(eingabestring) {
            return eingabestring.toLowerCase().split("").map(e => {
                const i = array.indexOf(e);
                if (i < 0) return "-";
                return array[(i + array.length - (number % array.length)) % array.length];
            }).join("");
        },
    };
}

document.getElementById('codierenForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Holen Sie die eingegebene Zahl aus dem Input-Feld
    const zahlInput = document.getElementById('zahlInput');
    const zahl = parseInt(zahlInput.value, 10); // Konvertieren Sie den Wert in eine Zahl

    const textInput = document.getElementById('textInput');
    const text = textInput.value;
  
    // Rufen Sie die codieren-Funktion mit der eingegebenen Zahl auf
    const xf = codieren(zahl);
    const k = xf.codedString(text);
    const l = xf.realString(k);
  
    // Zeigen Sie das Ergebnis an
    document.getElementById('ergebnis').textContent = `Codiert: ${k}, Decodiert: ${l}`;
  });