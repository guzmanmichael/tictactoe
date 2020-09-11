//Crear el estado y el contador
let State;
let Count = 0;

//Función que inicia la APP
let initApp = function () {
  initState = [true, false];
  State = initState[1];
};

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
  } else if (Count == 8) {
    document.getElementById("winner_report").innerHTML = "Empate";
    document.getElementById("winner_report").style.background =
      "rgb(255, 120, 46, 0.2)";
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
});

function reload_app() {
  window.location.reload();
}
