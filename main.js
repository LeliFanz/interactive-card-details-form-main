//CARD HOLDER NAME
let cardName = document.querySelector(".card_name");
let inputName = document.querySelector("#nameCustom01");
let errorName = document.querySelector(".errorCustom01");
//CARD NUMBER
let cardNumber = document.querySelector(".card_number");
let inputNumber = document.querySelector("#numberCustom02");
let errorNumber = document.querySelector(".errorCustom02");
//CARD FECHA
let cardMes = document.querySelector(".card_mm");
let inputMes = document.querySelector("#numberCustom03");
let cardYear = document.querySelector(".card_yy");
let inputYear = document.querySelector("#numberCustom04");
let errorFecha = document.querySelector(".errorCostum03");
//CARD CVC
let cardCvc = document.querySelector(".card_int_back");
let inputCvc = document.querySelector("#cvcCustom05");
let errorCvc = document.querySelector(".errorCustom05");
//BUTON FORM
let divForm = document.querySelector(".form")
let butonForm = document.querySelector("#butonForm");
let divThanks = document.querySelector(".thanks")
//VALIDAR TODO
let contador = 0;
//INGRESO DINAMICO DEL NOMBRE
inputName.addEventListener("input", () => {
  //Validando que solo se escriban letras /([0-9])/ Can't be blank
  let regExp = /[A-z]/g;
  if (regExp.test(inputName.value)) {
    showError(inputName, errorName, "", false);
  } else {
    showError(inputName, errorName, "Wrong format, letter only");
  }

  if (inputName.value == "") {
    cardName.innerText = "Jane Appleseed";
  } else {
    cardName.innerText = inputName.value;
  }
});

//INGRESO DINAMICO DEL NUMERO
inputNumber.addEventListener("input", (event) => {
  validarView(event, inputNumber, errorNumber, cardNumber);
  let inputValue = event.target.value;
  inputNumber.value = inputValue.replace(/([0-9]{4})/g, "$1 ").trim();

  //Ingresando valores a la card
   if (inputNumber.value == "") {
    cardNumber.innerText = "0000 0000 0000 0000";
  } else {
     cardNumber.innerText = inputNumber.value;
  }
});

//INGRESO DINAMICO DE EL MES
inputMes.addEventListener("input", (event) => {
  validarView(event, inputMes, errorFecha, cardMes);
});
//INGRESO DINAMICO DEL AÑO
inputYear.addEventListener("input", (event) => {
  validarView(event, inputYear, errorFecha, cardYear);
});

//INGRESO DINAMICO DEL CVC
inputCvc.addEventListener("input", (event) => {
  validarView(event, inputCvc, errorCvc, cardCvc);
});

//ACCIONANDO BOTON FORMULARIO
butonForm.addEventListener("click", (event) => {
  event.preventDefault();

  //Verificar Button Name
  if (verificar(inputName, errorName)) {
    if (inputName.value.length > 4) {
      showError(inputName, errorName, "", false);
       contador++;
    } else {
    showError(inputName, errorName, "Very short name");  
    }
  }

  //Verificar Button Number
  if (verificar(inputNumber, errorNumber)) {
    if (inputNumber.value.length == 19) {
    showError(inputNumber, errorNumber, "", false);
       contador++;
    } else {
    showError(inputNumber, errorNumber, "Very short number");  
    }
  }

  //Verificar Button Month
  if (verificar(inputMes, errorFecha)) {
    if (inputMes.value.length == 2 && inputMes.value > 0 && inputMes.value <= 12) {
      showError(inputMes, errorFecha, "", false);
       contador++;
    } else {
      showError(inputMes, errorFecha, "Wrong number");
    }
  }

  //Verificar Button Year
  if (verificar(inputYear, errorFecha)) {
    if (inputYear.value.length == 2 && inputYear.value >= 22) {
      showError(inputYear, errorFecha, "", false);
       contador++;
    } else {
      showError(inputYear, errorFecha, "Wrong number");
    }
  }

  //Verificar Button Cvc
  if (verificar(inputCvc, errorCvc)) {
    if (inputCvc.value.length == 3) {
      showError(inputCvc, errorCvc, "", false);
       contador++;
    } else {
      showError(inputCvc, errorCvc, "Wrong number");
    }
  }
  if (contador == 5) {
  divThanks.style.display = "block";
  divForm.style.display = "none";
  } else {
    contador = 0;
}

});

function showError(inputVarios, errorVarios, msgError, show = true) {
  if (show) {
    errorVarios.innerText = msgError;
    inputVarios.style.borderColor = "hsl(0, 100%, 66%)";
  } else {
    errorVarios.innerText = msgError;
    inputVarios.style.borderColor = "hsl(279, 6%, 55%)";
  }
}

function validarView(event, inputVarios, errorVarios, cardVarios) {
  let inputValue = event.target.value;
  let regExp = /[A-z]/g;
if (regExp.test(inputVarios.value)) {
  showError(inputVarios, errorVarios, "Wrong format, numbers only");
} else {
  inputVarios.value = inputValue.replace(/\s/g, "");
  cardVarios.innerText = inputVarios.value;
  showError(inputVarios, errorVarios, "", false);
}}

function verificar(inputVarios, errorVarios) {
  if (inputVarios.value.length>0) {
    showError(inputVarios, errorVarios, "", false);
    return true;
  } else {
    showError(inputVarios, errorVarios, "Can't be blank");
    return false;
  }
}