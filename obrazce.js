let stvorecRadio = document.getElementById('stv');
let obdlznikRadio = document.getElementById('obd');
let kosostvorecRadio = document.getElementById('kos');
let trojuholnikRadio = document.getElementById('pra');
let stranaA = document.getElementById("stranaA")
let stranaB = document.getElementById("stranaB")
let vykresli = document.getElementById("vykresli");

//číslo musí byť väčšie ako nula

stranaA.addEventListener("change", function() {
  if (Number(stranaA.value) <= 0) {
    document.querySelector("#maleCislo").textContent = "Zvolené číslo musí byť väčšie ako nula!";
  }
  else {
    document.querySelector("#maleCislo").textContent = "";
  }
})

stranaB.addEventListener("change", function() {
  if (Number(stranaB.value) <= 0) {
    document.querySelector("#maleCislo").textContent = "Zvolené číslo musí byť väčšie ako nula!";
  }
  else {
    document.querySelector("#maleCislo").textContent = "";
  }
})

//listener pre radio buttony
stvorecRadio.addEventListener("click", function() {
    jednaStrana();
    vyprazdnit();
})

obdlznikRadio.addEventListener("click", function() {
    dveStrany();
    vyprazdnit();
})

kosostvorecRadio.addEventListener("click", function() {
    jednaStrana();
    vyprazdnit();
})

trojuholnikRadio.addEventListener("click", function() {
    dveStrany();
    vyprazdnit();
})

//listener pre vykresli button
vykresli.addEventListener("click", function() {
    vyprazdnit();
    vykreslitObrazec();
})

function jednaStrana() {
    document.getElementById("stranaB").disabled = true;
    document.getElementById("zlaStrana").innerText = "Je možné zadať len jednu stranu."
    stranaB.value = "";
}

function dveStrany() {
  document.getElementById("stranaB").disabled = false;
  document.getElementById("zlaStrana").innerText = ""
}

function vyprazdnit() {
  document.querySelector("#platno").textContent = "";
}

function vykreslitObrazec() {
  if(document.getElementById('stv').checked) {
    //stvorec radio button is checked
    let A = Number(stranaA.value);
      document.getElementById("platno").innerHTML = ("*".repeat(A) + "<br/>").repeat(A);
  }else if(document.getElementById('obd').checked) {
    //obdlznik radio button is checked
    let A = Number(stranaA.value);
    let B = Number(stranaB.value);
      document.getElementById("platno").innerHTML = ("*".repeat(A) + "<br/>").repeat(B);
  }else if(document.getElementById('kos').checked) {
    //kosostvorec radio button is checked
    let A = Number(stranaA.value);
    for(let i = 0; i < A; i++) {
      document.getElementById("platno").innerHTML += ("&nbsp;".repeat(i) + "*".repeat(A) + "<br/>");
      console.log("/".repeat(i) + "*".repeat(A));
    }
  }else if(document.getElementById('pra').checked) {
    //pravouhly trojuholnik radio button is checked
    document.getElementById("platno").style.textAlign = "right";
    let A = Number(stranaA.value);
    let B = Number(stranaB.value);
    if (A > B) {
      for(let i = 1; i <=A; i++) {
      document.getElementById("platno").innerHTML += ("*".repeat(B) + "<br/>");
      if (B>1) {
        B--;
      } else {B == 1};
    }
  } else {
    for(let i = 1; i <=B; i++) {
      document.getElementById("platno").innerHTML += ("*".repeat(A) + "<br/>");
      if (A>1) {
        A--;
      } else {A == 1};
    }
    }
  }
}






