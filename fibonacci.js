let zadajCislo = document.querySelector("#zadajCislo");
let button = document.querySelector("#postupnost");
let fibPole = [0, 1,];

button.addEventListener("click", function() {
    document.querySelector("#minusovaHodnota").textContent = "";
    fibonacci(Number(zadajCislo.value));
    fibPole = [0, 1,];
})

function fibonacci(n) {
    if (!(zadajCislo.getAttribute("type")=="number")) {
        document.querySelector("#minusovaHodnota").textContent = "Je nutné zadať číselnú hodnotu!";
        document.querySelector("#vysledok").textContent = "";
    } else
    if (n < 0) {
        document.querySelector("#minusovaHodnota").textContent = "Zadaj kladnú hodnotu!";
        document.querySelector("#vysledok").textContent = "";
    } else
    if (n == 0) {
        document.querySelector("#vysledok").textContent = "Tvoja postupnosť je: 0";
    } else 
    if (n == 1) {
        document.querySelector("#vysledok").textContent = "Tvoja postupnosť je: " + fibPole + ".";
    } else {
        for(let i = 2; i < n; i++) {
            fibPole.push(fibPole[i-1]+fibPole[i-2]);
            if(fibPole[i] > n) {
                fibPole.pop();
                break;
            }
            document.querySelector("#vysledok").textContent = "Tvoja postupnosť je: " + fibPole + ".";
        }
    }
    return(fibPole);
}