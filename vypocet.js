let numberInput = document.querySelector("#zadajCislo");
let rychlyVypocetBTN = document.getElementById("rychlyVypocet");
let pomalyVypocetBTN = document.getElementById("pomalyVypocet");

numberInput.addEventListener("change", function() {
    if (Number(numberInput.value) < 0) {
        menejNezNula();
    } else {
        document.querySelector("#volba").textContent = "Zvolil si: " + numberInput.value;
    }  
})

rychlyVypocetBTN.addEventListener("click", function() {
    if (Number(numberInput.value) < 0) {
        menejNezNula();
    } else {
        rychlyVypocet(Number(numberInput.value));
    } 
})

pomalyVypocetBTN.addEventListener("click", function() {
    if (Number(numberInput.value) < 0) {
        menejNezNula();
    } else {
        let start = new Date().getTime();
        for (i = 0; i < 50000; ++i) {
        pomalyVypocet(Number(numberInput.value)); 
        }
        let end = new Date().getTime();
        let time = end - start;
        document.querySelector("#rychlostVypoctu").textContent = "Výpočet trval: " + time + " ms."; 
    } 
})

function pomalyVypocet(n) {
    let sucet = 0;
    for(let i = n; i >= 0; i-- ) {
        sucet += i;
    }
    document.querySelector("#vypocet").textContent = "Výsledok je: " + sucet + ".";
} 

function rychlyVypocet(n) {
    let sucet;
    if (n%2 == 0) {
        let start = new Date().getTime();
        for (i = 0; i < 50000; ++i) {
        sucet = (n+1)*(n/2);
        }
        let end = new Date().getTime();
        let time = end - start;
        document.querySelector("#rychlostVypoctu").textContent = "Výpočet trval: " + time + " ms."; 
        
    } else {
        let start = new Date().getTime();
        for (i = 0; i < 50000; ++i) {
        sucet = n*((n-1)/2)+n; 
        }
        let end = new Date().getTime();
        let time = end - start;
        document.querySelector("#rychlostVypoctu").textContent = "Výpočet trval: " + time + " ms."; 
    }
    document.querySelector("#vypocet").textContent = "Výsledok je: " + sucet + ".";
}

function menejNezNula() {
    document.querySelector("#vypocet").textContent = "";
    document.querySelector("#chybaCislo").textContent = "Je možné zadať iba kladné číslo!";
    document.querySelector("#volba").textContent = "";
}