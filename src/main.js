function clean() {
  document.getElementById("Fx").value = "";
  document.getElementById("Xi").value = "";
  document.getElementById("Xu").value = "";
  document.getElementById("ToleranciaError").value = "";
  document.getElementById("Result").innerHTML = "";
}

function biseccion() {
  let fx = document.getElementById("Fx").value; // FUNCTION
  let xi = parseFloat(document.getElementById("Xi").value); //X INFERIOR
  let xu = parseFloat(document.getElementById("Xu").value); //X SUPERIOR
  let toleranciaError = parseFloat(
    document.getElementById("ToleranciaError").value
  ); //TOLERANCIA DE ERROR PER ITERACION
  let result = document.getElementById("Result"); //ITERACION IMPRESA

  if ((fx && xi && xu) == "") {
    result.innerHTML = `<h2>ERROR</h2><br><p>Ingrese todos los valores</p>`;
  } else {
    //  ========  C 0 D E  ========
  }
}
