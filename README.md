# code_lesen_und_erklaeren


// 1. Finde heraus, was dieser Code macht und wie er das anstellt, indem du ihn analysierst.
// 2. Benenne alle Variablen sinnvoll um.
// 3. Exportiere die umbenannte Funktion f und verwende sie in einem HTML-Formular.
​
​
```const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
​
function f(b) {
    return {
        g(c) {
            const d = c.toLowerCase().split("");
​
            const e = d.map(e => {
                const i = a.indexOf(e);
                if (i < 0) return "-";
                return a[(i + b) % a.length];
            });
​
            const j = e.join("");
            return j;
        },
​
        h(c) {
            return c.toLowerCase().split("").map(e => {
                const i = a.indexOf(e);
                if (i < 0) return "-";
                return a[(i + a.length - (b % a.length)) % a.length];
            }).join("");
        },
    };
}
​
const xf = f(42);
​
const k = xf.g("Was macht dieser Code?");
const l = xf.h(k);
​
console.log({ k, l });
