let initStateP = [0, 1, 3];
var randomItem = initStateP[Math.floor(Math.random() * initStateP.length)];
//Crear el estado y el contador
let State = false;
let Count = 0;

//Función que inicia la APP

//Función que cambia de jugador
let handlePicker = function (e) {
  if (e == true) {
    return "X";
  } else {
    return "O";
  }
};
//Iniciando los estados de las formas de ganar:
let diag_1133 = 0;
let diag_1331 = 0;

let col1 = 0;
let col2 = 0;
let col3 = 0;
let row1 = 0;
let row2 = 0;
let row3 = 0;

//Función que determinar si ya hay un ganador:
let verifyWinner = function () {
  if (
    diag_1133 == 3 ||
    diag_1331 == 3 ||
    col1 == 3 ||
    col2 == 3 ||
    col3 == 3 ||
    row1 == 3 ||
    row2 == 3 ||
    row3 == 3
  ) {
    console.log("Ganó O");
    document.getElementById("winner_report").innerHTML = "Ganó O";
    document.getElementById("winner_report").style.background =
      "rgb(255, 120, 46, 0.2)";
    winnerStop();
  } else if (
    diag_1133 == -3 ||
    diag_1331 == -3 ||
    col1 == -3 ||
    col2 == -3 ||
    col3 == -3 ||
    row1 == -3 ||
    row2 == -3 ||
    row3 == -3
  ) {
    console.log("Ganó X");
    document.getElementById("winner_report").innerHTML = "Ganó X";
    document.getElementById("winner_report").style.background =
      "rgb(255, 120, 46, 0.2)";
    winnerStop();
  } else if (Count == 8) {
    document.getElementById("winner_report").innerHTML = "Empate";
    document.getElementById("winner_report").style.background =
      "rgb(255, 120, 46, 0.2)";
    winnerStop();
  }
};

//Obteniendo todos los botones:
let b_choose = {
  b_11: document.getElementById("b_11"),
  b_12: document.getElementById("b_12"),
  b_13: document.getElementById("b_13"),
  b_21: document.getElementById("b_21"),
  b_22: document.getElementById("b_22"),
  b_23: document.getElementById("b_23"),
  b_31: document.getElementById("b_31"),
  b_32: document.getElementById("b_32"),
  b_33: document.getElementById("b_33"),
};

b_choose["b_11"].addEventListener("click", () => {
  b_choose["b_11"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_11"].innerHTML = handlePicker(State);
    diag_1133++;
    col1++;
    row1++;
    verifyWinner();
  } else {
    b_choose["b_11"].innerHTML = handlePicker(!State);
    diag_1133--;
    col1--;
    row1--;
    verifyWinner();
  }
  Count++;
  play();
  let b_11 = possibleP.indexOf("b_11");
  possibleP.splice(b_11, 1);
});

b_choose["b_12"].addEventListener("click", () => {
  b_choose["b_12"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_12"].innerHTML = handlePicker(State);
    col2++;
    row1++;
    verifyWinner();
  } else {
    b_choose["b_12"].innerHTML = handlePicker(!State);
    col2--;
    row1--;
    verifyWinner();
  }
  Count++;
  play();
  let b_12 = possibleP.indexOf("b_12");
  possibleP.splice(b_12, 1);
});

b_choose["b_13"].addEventListener("click", () => {
  b_choose["b_13"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_13"].innerHTML = handlePicker(State);
    diag_1331++;
    col3++;
    row1++;
    verifyWinner();
  } else {
    b_choose["b_13"].innerHTML = handlePicker(!State);
    diag_1331--;
    col3--;
    row1--;
    verifyWinner();
  }
  Count++;
  play();
  let b_13 = possibleP.indexOf("b_13");
  possibleP.splice(b_13, 1);
});

b_choose["b_21"].addEventListener("click", () => {
  b_choose["b_21"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_21"].innerHTML = handlePicker(State);
    col1++;
    row2++;
    verifyWinner();
  } else {
    b_choose["b_21"].innerHTML = handlePicker(!State);
    col1--;
    row2--;
    verifyWinner();
  }
  Count++;
  play();
  let b_21 = possibleP.indexOf("b_21");
  possibleP.splice(b_21, 1);
});

b_choose["b_22"].addEventListener("click", () => {
  b_choose["b_22"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_22"].innerHTML = handlePicker(State);
    diag_1133++;
    diag_1331++;
    col2++;
    row2++;
    verifyWinner();
  } else {
    b_choose["b_22"].innerHTML = handlePicker(!State);
    diag_1133--;
    diag_1331--;
    col2--;
    row2--;
    verifyWinner();
  }
  Count++;
  play();
  let b_22 = possibleP.indexOf("b_22");
  possibleP.splice(b_22, 1);
});

b_choose["b_23"].addEventListener("click", () => {
  b_choose["b_23"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_23"].innerHTML = handlePicker(State);
    col3++;
    row2++;
    verifyWinner();
  } else {
    b_choose["b_23"].innerHTML = handlePicker(!State);
    col3--;
    row2--;
    verifyWinner();
  }
  Count++;
  play();
  let b_23 = possibleP.indexOf("b_23");
  possibleP.splice(b_23, 1);
});

b_choose["b_31"].addEventListener("click", () => {
  b_choose["b_31"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_31"].innerHTML = handlePicker(State);
    diag_1331++;
    col1++;
    row3++;
    verifyWinner();
  } else {
    b_choose["b_31"].innerHTML = handlePicker(!State);
    diag_1331--;
    col1--;
    row3--;
    verifyWinner();
  }
  Count++;
  play();
  let b_31 = possibleP.indexOf("b_31");
  possibleP.splice(b_31, 1);
});

b_choose["b_32"].addEventListener("click", () => {
  b_choose["b_32"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_32"].innerHTML = handlePicker(State);
    col2++;
    row3++;
    verifyWinner();
  } else {
    b_choose["b_32"].innerHTML = handlePicker(!State);
    col2--;
    row3--;
    verifyWinner();
  }
  Count++;
  play();
  let b_32 = possibleP.indexOf("b_32");
  possibleP.splice(b_32, 1);
});

b_choose["b_33"].addEventListener("click", () => {
  b_choose["b_33"].disabled = true;
  if (Count % 2 == 0) {
    b_choose["b_33"].innerHTML = handlePicker(State);
    diag_1133++;
    col3++;
    row3++;
    verifyWinner();
  } else {
    b_choose["b_33"].innerHTML = handlePicker(!State);
    diag_1133--;
    col3--;
    row3--;
    verifyWinner();
  }
  Count++;
  play();
  let b_33 = possibleP.indexOf("b_33");
  possibleP.splice(b_33, 1);
});

document.getElementById("reload").addEventListener("click", reload_app);

function reload_app() {
  window.location.reload();
  console.log("Funciona");
}

const winnerStop = function () {
  document.getElementById("b_11").disabled = true;
  document.getElementById("b_12").disabled = true;
  document.getElementById("b_13").disabled = true;
  document.getElementById("b_21").disabled = true;
  document.getElementById("b_22").disabled = true;
  document.getElementById("b_23").disabled = true;
  document.getElementById("b_31").disabled = true;
  document.getElementById("b_32").disabled = true;
  document.getElementById("b_33").disabled = true;
};

possibleP = [
  "b_11",
  "b_12",
  "b_13",
  "b_21",
  "b_22",
  "b_23",
  "b_31",
  "b_32",
  "b_33",
];

let play = function () {
  console.log(Count);
  if (Count % 2 == 0) {
    console.log("Par");
  } else {
    let initEvent = setTimeout(play_imp, 700);
  }
};

let play_imp = () => {
  console.log("Impar");
  var iP = possibleP[Math.floor(Math.random() * possibleP.length)];
  b_choose[iP].click();
};
