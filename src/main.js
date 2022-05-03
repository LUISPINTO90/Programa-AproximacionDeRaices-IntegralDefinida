function clean() {
  document.getElementById("Fx").value = "";
  document.getElementById("Xi").value = "";
  document.getElementById("Xu").value = "";
  document.getElementById("ToleranciaError").value = "";
  document.getElementById("Result").innerHTML = "";

  document.getElementById("Fx_RFM").value = "";
  document.getElementById("Xi_RFM").value = "";
  document.getElementById("Xu_RFM").value = "";
  document.getElementById("ToleranciaError_RFM").value = "";
  document.getElementById("Result_RFM").innerHTML = "";
}

function checkInputs() {
  let result = document.getElementById("Result");
  let fx = document.getElementById("Fx").value;
  let xi = document.getElementById("Xi").value;
  let xu = document.getElementById("Xu").value;
  let toleranciaError = document.getElementById("ToleranciaError").value;

  let result_RFM = document.getElementById("Result_RFM");
  let fx_RFM = document.getElementById("Fx_RFM").value;
  let xi_RFM = document.getElementById("Xi_RFM").value;
  let xu_RFM = document.getElementById("Xu_RFM").value;
  let toleranciaError_RFM = document.getElementById(
    "ToleranciaError_RFM"
  ).value;

  if (fx == "" || xi == "" || xu == "" || toleranciaError == "") {
    result.innerHTML = `<h2>ERROR</h2><p>Ingrese todos los campos correctamente</p>`;
  }

  if (
    fx_RFM == "" ||
    xi_RFM == "" ||
    xu_RFM == "" ||
    toleranciaError_RFM == ""
  ) {
    result_RFM.innerHTML = `<h2>ERROR</h2><p>Ingrese todos los campos correctamente</p>`;
  }
}

function biseccion() {
  let fx = document.getElementById("Fx").value; // FUNCTION
  let xi = parseFloat(document.getElementById("Xi").value); //X INFERIOR
  let xu = parseFloat(document.getElementById("Xu").value); //X SUPERIOR
  let toleranciaError = parseFloat(
    document.getElementById("ToleranciaError").value
  ); //TOLERANCIA DE ERROR PER ITERACION
  let result = document.getElementById("Result"); //ITERACION IMPRESA
  result.innerHTML = "";

  let porcentualError = 0;
  let iteracion = 0;
  fx = fx.replace("^", "**");
  fx = fx.replace("e", Math.exp(1));

  do {
    iteracion++;
    let xr = (xi + xu) / 2;
    let xAnterior = xr;

    if (iteracion > 1) {
      porcentualError = Math.abs(((xi - xAnterior) / xr) * 100);
    }

    //EVALUAR F(xi) F(xr) F(xu);
    let fXI = eval(fx.replace(/x/g, "(xi)"));
    let fXR = eval(fx.replace(/x/g, "(xr)"));
    let fXU = eval(fx.replace(/x/g, "(xu)"));

    //EVALUAR NUEVO INTERVALO PARA IMPRIMIRLO
    let nuevoIntervalo = 0;
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      nuevoIntervalo = `[${xi}, ${xr}]`;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      nuevoIntervalo = `[${xr}, ${xu}]`;
    }

    // IMPRIMIR ERROR SI LAS ITERACIONES SON MAYORES A 1
    if (iteracion == 1) {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    } else {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    }

    //ASIGNAR Xu y Xi
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      xu = xr;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      xi = xr;
    }
  } while (
    porcentualError >= toleranciaError ||
    (porcentualError == 0.0 && iteracion == 1)
  );
}

function regulaFalsi() {
  let fx = document.getElementById("Fx_RFM").value; // FUNCTION
  let xi = parseFloat(document.getElementById("Xi_RFM").value); //X INFERIOR
  let xu = parseFloat(document.getElementById("Xu_RFM").value); //X SUPERIOR
  let toleranciaError = parseFloat(
    document.getElementById("ToleranciaError_RFM").value
  ); //TOLERANCIA DE ERROR PER ITERACION
  let result = document.getElementById("Result_RFM"); //ITERACION IMPRESA
  result.innerHTML = "";

  let porcentualError = 0;
  let iteracion = 0;
  fx = fx.replace("^", "**");
  fx = fx.replace("e", Math.exp(1));

  do {
    iteracion++;
    let fXI = eval(fx.replace(/x/g, "(xi)"));
    let fXU = eval(fx.replace(/x/g, "(xu)"));
    let xr = xu - (fXU * (xi - xu)) / (fXI - fXU);
    let fXR = eval(fx.replace(/x/g, "(xr)"));
    let xAnterior = xr;

    if (iteracion > 1) {
      porcentualError = Math.abs(((xi - xAnterior) / xr) * 100);
    }

    //EVALUAR NUEVO INTERVALO PARA IMPRIMIRLO
    let nuevoIntervalo = 0;
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      nuevoIntervalo = `[${xi}, ${xr}]`;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      nuevoIntervalo = `[${xr}, ${xu}]`;
    }

    // IMPRIMIR ERROR SI LAS ITERACIONES SON MAYORES A 1
    if (iteracion == 1) {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    } else {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    }

    //ASIGNAR Xu y Xi
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      xu = xr;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      xi = xr;
    }
  } while (
    porcentualError >= toleranciaError ||
    (porcentualError == 0.0 && iteracion == 1)
  );
}
