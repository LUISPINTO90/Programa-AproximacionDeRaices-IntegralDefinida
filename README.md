<div align="center">
  <h1>
    <a href="https://luispinto90.github.io/Programa-AproximacionDeRaices-IntegralDefinida/" target="_blank">🌐 Calculadora de M&eacute;todos de Aproximaci&oacute;n de Ra&iacute;ces</a>
  </h1>
  <!-- BISECCIÓN -->
  <h2>➡️ M&eacute;todo de Bisecci&oacute;n</h2>
  <br />
  <!-- IMAGEN-BISECCIÓN -->
  <img width="45%" height="80%" src="img/001.png" /><br /><br />
</div>
<h3>↪️ Funcionamientos de biseccion()</h3>

  <p>Dentro de main.js (src/main.js), la funci&oacute;n biseccion() &uacute;nicamente realiza el c&aacute;lculo del m&eacute;todo de bisecci&oacute;n.

En el primer bloque, se declaran todas las variables [Fx, Xi, Xu, Tolerancia de Error y Result (o bloque oculto)], exportandolas desde index.html:

```javascript
let fx = document.getElementById("Fx").value; // FUNCTION
let xi = parseFloat(document.getElementById("Xi").value); //X INFERIOR
let xu = parseFloat(document.getElementById("Xu").value); //X SUPERIOR
let toleranciaError = parseFloat(
  document.getElementById("ToleranciaError").value
); //TOLERANCIA DE ERROR PER ITERACION
let result = document.getElementById("Result"); //ITERACION IMPRESA
result.innerHTML = "";
```

En el siguiente bloque se inicializan dos variables antes de empezar el bucle, y se cambia la forma de escribir la exponenciaci&oacute;n, en vez de "**", se usa "^".

```javascript
let porcentualError = 0;
let iteracion = 0;
fx = fx.replace("^", "**");
```

En el siguiente bloque se inicializa el ciclo _do...while_, ejecutando en bucle cierto c&oacute;digo hasta que la condici&oacute;n establecida sea falsa:

```javascript
do {
  sentencia
} while (condición);
```

```javascript
 do {
    iteracion++;
    let xr = (xi + xu) / 2;
    let xAnterior = xr;

    if (iteracion >= 2) {
      porcentualError = Math.abs(((xu - xAnterior) / xr) * 100);
    }

    //EVALUAR F(xi) F(xr) F(xu);
    let fXI = eval(fx.replace(/x/g, xi));
    let fXR = eval(fx.replace(/x/g, xr));
    let fXU = eval(fx.replace(/x/g, xu));

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
```

En el primer bloque _do_, se asigna el incremento _iteracion++_ (esta imprime en Result el n&uacute;mero de la iteraci&oacute;n «ITERACI&Oacute;N 8..9..10..»); Se declara el valor de Xr y el valor de Xr anterior (xAnterior):

```javascript
    iteracion++;
    let xr = (xi + xu) / 2;
    let xAnterior = xr;
```

Se condiciona, si las iteraciones son mayor a 1, se calcula el error porcentual:

```javascript
if (iteracion > 1) {
      porcentualError = Math.abs(((xu - xAnterior) / xr) * 100);
    }
```

Se eval&uacute;a Xi, Xr, Xu, con la f&oacute;rmula establecida en F(x), esto para conocer los valores de F(xi), F(xr), F(xu) y as&iacute; conocer el siguiente intervalo:

```javascript
//EVALUAR F(xi) F(xr) F(xu);
    let fXI = eval(fx.replace(/x/g, xi));
    let fXR = eval(fx.replace(/x/g, xr));
    let fXU = eval(fx.replace(/x/g, xu));
```

(&Uacute;nicamente para imprimirlo en pantalla) Se eval&uacute;a el nuevo intervalo. Se declara _nuevoIntervalo_ en 0, si F(xi) es negativo y F(xr) es positivo el intervalo es [Xi, Xr], pero, si F(xr) es negativo y F(xu) es positivo el intervalo es [Xr, Xu]:

```javascript
//EVALUAR NUEVO INTERVALO PARA IMPRIMIRLO
    let nuevoIntervalo = 0;
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      nuevoIntervalo = `[${xi}, ${xr}]`;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      nuevoIntervalo = `[${xr}, ${xu}]`;
    }
```

Se asigna en adici&oacute;n mediante JavaScript los valores calculados de _iteracion, xr, porcentualError, fXI, fXR, fXU, nuevoIntervalo_ en formato HTML:

```javascript
// IMPRIMIR ERROR SI LAS ITERACIONES SON MAYORES A 1
    if (iteracion == 1) {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    } else {
      result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><hr>`;
    }
```
As&iacute; es como luce:
<div align="center">
<img width="45%" height="80%" src="img/002.png" />
</div>

En el &uacute;ltimo bloque del ciclo, se asigna otra vez el valor de Xu y Xi, para considerarlos en la siguiente iteraci&oacute;n. Mediante la siguiente condici&oacute;n:

```javascript
//ASIGNAR Xu y Xi
    if (Math.sign(fXI) === -1 && Math.sign(fXR) === 1) {
      xu = xr;
    }
    if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
      xi = xr;
    }
```

Esta condici&oacute;n quiere decir:

<div align="center">
<img width="50%" height="80%" src="img/003.png" /><br><br>
<img width="50%" height="80%" src="img/004.png" />
</div>

Como condici&oacute;n del bucle en _while_, el c&oacute;digo se va a ciclar mientras el error porcentual sea mayor o igual que la tolerancia de error porcentual establecida (cuando esto sea _false_ entonces se terminan las iteraciones).:

```javascript
while (
    porcentualError >= toleranciaError ||
    (porcentualError == 0.0 && iteracion == 1)
  );
```

</p>

<br><br><br>

<div align="center">
<!-- BISECCIÓN -->
  <h2>➡️ M&eacute;todo Regula Falsi</h2>
  <br />
  <!-- IMAGEN-BISECCIÓN -->
  <img width="45%" height="80%" src="img/005.png" /><br /><br />
</div>

<h3>↪️ Funcionamientos de regulaFalsi()</h3>

  <p>Dentro de main.js (src/main.js), la funci&oacute;n regulaFalsi() &uacute;nicamente realiza el c&aacute;lculo del m&eacute;todo de regula falsi. El c&aacute;lculo es similar a la bisecci&oacute;n. Solo que cambia la f&oacute;rmula para calcular Xr, esto afecta en el resultado de Xr por cada iteraci&oacute;n.<br>Este es el c&oacute;digo:

  ```javascript
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
    let fXI = eval(fx.replace(/x/g, xi));
    let fXU = eval(fx.replace(/x/g, xu));
    let xr = xu - (fXU * (xi - xu)) / (fXI - fXU);
    let fXR = eval(fx.replace(/x/g, xr));
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
  ```
  </p>