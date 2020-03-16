let inputLower = document.querySelector("#mensieCislo");
let inputHigher = document.querySelector("#vacsieCislo");
let mensieCislo;
let vacsieCislo;
let vygenerujButton = document.querySelector("#vygeneruj");
let nahodnePole = [];
let zoradenePole = [];
let zoradButton = document.querySelector("#zorad")

inputLower.addEventListener("change", function() {
    mensieCislo = inputLower.value;
    return mensieCislo;
})

inputHigher.addEventListener("change", function() {
    vacsieCislo = inputHigher.value;
    return vacsieCislo;
})

vygenerujButton.addEventListener("click", function() {
    vytvorPole();
})

zoradButton.addEventListener("click", function() {
    zoradPole();
})

function vytvorPole() {
    nahodnePole = [];
    document.querySelector("#zoradenePole").textContent = "";
    zoradenePole = [];
    if (vacsieCislo === undefined || mensieCislo === undefined || vacsieCislo === "" || mensieCislo ==="") {
        document.querySelector("#chybaCislo").textContent = "Vyplň všetky hodnoty!";
        document.querySelector("#nahodnePole").textContent = "";
        document.querySelector("#zoradenePole").textContent = "";
    }
    else {
        document.querySelector("#chybaCislo").textContent = "";
        for(let i = 0; i < 20; i++) {
            nahodnePole.unshift(Math.floor(Math.random() * (Number(vacsieCislo) - Number(mensieCislo) + 1) + Number(mensieCislo)))
        }
    document.querySelector("#nahodnePole").textContent = "Náhodné pole je:  " + nahodnePole;
    return(nahodnePole);
}}

function zoradPole() {
    if (!(vacsieCislo === undefined || mensieCislo === undefined || vacsieCislo === "" || mensieCislo ==="") && !(nahodnePole === [])) {
       zoradenePole = nahodnePole.sort(sortNumber);
        document.querySelector("#zoradenePole").textContent = "Zoradené pole je:  " + zoradenePole;
    }
}

function sortNumber(a, b) {
    return a - b;
  }
