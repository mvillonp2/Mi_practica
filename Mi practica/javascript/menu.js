// Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad del número 2; 
// Y si el numero 3 es divisor del numero4.
function compararNumeros(){
    // Inicializamos las variables
    numero1 = 0
    numero2 = 0
    numero3 = 0
    numero4 = 0
    esMitad = false
    esDivisor = false

    // PASO 1: Definir y leer los cuatro números del formulario.
    numero1 = parseInt(document.getElementById("numero1").value)
    numero2 = parseInt(document.getElementById("numero2").value)
    numero3 = parseInt(document.getElementById("numero3").value)
    numero4 = parseInt(document.getElementById("numero4").value)

    // PASO 2: Para que numero1 sea la mitad de numero2, numero1 * 2 debe ser igual a numero2.
    esMitad = (numero1 * 2 === numero2)

    // PASO 3: Para que numero3 sea divisor de numero4, numero4 dividido entre numero3 debe dar resto 0.
    esDivisor = (numero3 !== 0 && numero4 % numero3 === 0)
    if (esMitad && esDivisor) {
        mensaje = '<h3> ✓ AMBAS CONDICIONES SON VERDADERAS</h3>'
        mensaje += '</br><p> ✓ SÍ: El número ' + numero1 + ' es la mitad del número ' + numero2 + '</p>'
        mensaje += '<p> ✓ SÍ: El número ' + numero3 + ' es divisor del número ' + numero4 + '</p>'
    } else {
        mensaje = '<h3> ✗ AL MENOS UNA CONDICIÓN ES FALSA </h3>' 
        if (!esMitad) {
            mensaje += '</br><p> ✗ NO: El número ' + numero1 + ' es la mitad del número ' + numero2 + '</p>'
        } else {
            mensaje += '</br><p> ✓ SÍ: El número ' + numero1 + ' es la mitad del número ' + numero2 +'</p>'
        }
        if (!esDivisor) {
            if (numero3 === 0) {
                mensaje += '<p> ⚠️ ERROR: No se puede dividir por cero </p>'
            } else {
            mensaje += '<p> ✗ NO: El número ' + numero3 + ' es divisor del número ' + numero4 + '</p>'
            }
        } else {
        mensaje += '<p> ✓ SÍ: El número ' + numero3 + ' es divisor del número ' + numero4 + '</p>'
        }
    }
     // PASO 6: Mostrar el resultado en pantalla
    elementoResultado = document.getElementById("resultado")
    // Colocamos nuestro mensaje en el elemento
    elementoResultado.innerHTML = mensaje
}

// Función adicional para limpiar el formulario
function limpiarFormulario1() {
    // Limpiamos todos los campos de entrada
    document.getElementById('numero1').value = ''
    document.getElementById('numero2').value = ''
    document.getElementById('numero3').value = ''
    document.getElementById('numero4').value = ''

    // Ocultamos el resultado
    document.getElementById('resultado').style.display = 'none';
}

//*******************************************************************************************************************/
//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de descuento a aplicar en porcentaje. 
// Si el precio total de la compra supera los $10, aplica el descuento, de lo contrario, no aplica ningún descuento. 
// Calcula y muestra el monto final con el descuento con el IVA del 15%.
function calcularPrecioFinal() {
    // Inicializamos las variales
    precioTotal = 0
    descuento = 0
    precioConDescuento = 0
    montoDescuento = 0
    porcentajeIVA = 0
    montoIVA = 0
    precioFinal = 0

    // PASO 1: Obtener los datos del formulario
    // Leemos el precio total que ingresó el usuario
    precioTotal = parseFloat(document.getElementById('precioTotal').value)
    // Leemos el porcentaje de descuento del cupón
    descuento = parseFloat(document.getElementById('cuponDescuento').value)
    
    // PASO 2: Verificar si se aplica el descuento
    // Solo aplicamos descuento si el precio total supera los $10
    precioConDescuento = precioTotal // Inicializamos con el precio original
    if (precioTotal > 10) {
        // Si el precio supera $10, calculamos el descuento
        // Fórmula: (precio * porcentaje) / 100
        montoDescuento = (precioTotal * descuento) / 100
        // Restamos el descuento al precio total
        precioConDescuento = precioTotal - montoDescuento
    }
    // PASO 3: Calcular el IVA del 15%
    // El IVA se calcula sobre el precio ya con descuento aplicado
    porcentajeIVA = 0.15 // IVA del 15%
    // Fórmula del IVA: (precio * 15) / 100
    montoIVA = (precioConDescuento * porcentajeIVA)
    
    // PASO 4: Calcular el precio final
    // Precio final = precio con descuento + IVA
    precioFinal = precioConDescuento + montoIVA
    
    // PASO 5: Preparar el mensaje de resultado
    mensaje = '<h3>Detalle de la Compra:</h3>'
    mensaje += '<div class="detalle">Precio original: $' + precioTotal.toFixed(2) + '</div>'
    
    // Mostrar información del descuento
    if (precioTotal > 10) {
        mensaje += '<div class="detalle">Cupón de descuento: ' + descuento + '%</div>'
        mensaje += '<div class="detalle">Monto de descuento: -$' + montoDescuento.toFixed(2) + '</div>'
        mensaje += '<div class="detalle">Precio con descuento: $' + precioConDescuento.toFixed(2) + '</div>'
    } else {
        mensaje += '<div class="detalle">❌ Descuento NO aplicado (precio menor o igual a $10)</div>'
        mensaje += '<div class="detalle">Precio sin descuento: $' + precioConDescuento.toFixed(2) + '</div>'
    }
    // Mostrar información del IVA
    mensaje += '<div class="detalle">IVA (15%): +$' + montoIVA.toFixed(2) + '</div>'
    mensaje += '<div class="total-final">💰 PRECIO FINAL: $' + precioFinal.toFixed(2) + '</div>'
    
    // PASO 6: Mostrar el resultado en pantalla
    // Obtenemos el elemento donde mostraremos el resultado
    elementoResultado = document.getElementById('resultado')
    // Insertamos nuestro mensaje en el elemento
    elementoResultado.innerHTML = mensaje
}

// Función para limpiar el formulario
function limpiarFormulario2() {
    // Limpiamos los campos de entrada
    document.getElementById('precioTotal').value = '';
    document.getElementById('cuponDescuento').value = '';
    
    // Ocultamos el resultado
    document.getElementById('resultado').style.display = 'none';
}

/****************************************************************************************************/
//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento 
// que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, 
// aplica el descuento por fidelidad, de lo contrario, no se aplica ningún descuento. 
// Calcula y muestra el monto final con el descuento aplicado más el IVA del 15%.
function calcularCuentaFinal() {
    // PASO 1: Obtener los valores del formulario
    // Leemos el total de la cuenta que ingresó el usuario
    var totalCuenta = parseFloat(document.getElementById('totalCuenta').value);
    // Leemos el porcentaje de descuento por fidelidad
    var descuentoFidelidad = parseFloat(document.getElementById('descuentoFidelidad').value);
    
    // PASO 2: Determinar si se aplica el descuento por fidelidad
    // El descuento solo se aplica si la cuenta supera los $70
    var cuentaConDescuento = totalCuenta; // Inicializamos con el total original
    var montoDescuento = 0; // Inicializamos el descuento en 0
    if (totalCuenta > 70) {
        // Si la cuenta supera $70, calculamos y aplicamos el descuento
        // Fórmula para calcular descuento: (total × porcentaje) ÷ 100
        montoDescuento = (totalCuenta * descuentoFidelidad) / 100;
        // Restamos el descuento al total de la cuenta
        cuentaConDescuento = totalCuenta - montoDescuento;
    }
    // PASO 3: Calcular el IVA del 15%
    // El IVA se calcula sobre el monto ya con descuento aplicado
    var porcentajeIVA = 15; // IVA del 15%
    // Fórmula para calcular IVA: (cuenta con descuento × 15) ÷ 100
    var montoIVA = (cuentaConDescuento * porcentajeIVA) / 100;
    
    // PASO 4: Calcular el monto final a pagar
    // Monto final = cuenta con descuento + IVA
    var montoFinal = cuentaConDescuento + montoIVA;
    
    // PASO 5: Preparar el mensaje con todos los detalles
    var mensaje = '<h3>📊 Desglose de tu Cuenta:</h3>';
    mensaje += '<div class="detalle">💰 Total original: $' + totalCuenta.toFixed(2) + '</div>';
    
    // Mostrar información sobre el descuento por fidelidad
    if (totalCuenta > 70) {
        mensaje += '<div class="detalle">🎉 Descuento por fidelidad: ' + descuentoFidelidad + '%</div>';
        mensaje += '<div class="detalle">💸 Monto descontado: -$' + montoDescuento.toFixed(2) + '</div>';
        mensaje += '<div class="detalle">✅ Subtotal con descuento: $' + cuentaConDescuento.toFixed(2) + '</div>';
    } else {
        mensaje += '<div class="detalle">❌ Descuento NO aplicado (cuenta menor o igual a $70)</div>';
        mensaje += '<div class="detalle">📝 Subtotal: $' + cuentaConDescuento.toFixed(2) + '</div>';
    }
    // Mostrar información del IVA
    mensaje += '<div class="detalle">🧾 IVA (15%): +$' + montoIVA.toFixed(2) + '</div>';
    mensaje += '<div class="total-final">🍽️ TOTAL A PAGAR: $' + montoFinal.toFixed(2) + '</div>';
    
    // PASO 6: Mostrar el resultado completo en pantalla
    // Obtenemos el elemento HTML donde mostraremos el resultado
    var elementoResultado = document.getElementById('resultado');
    // Colocamos todo nuestro mensaje en ese elemento
    elementoResultado.innerHTML = mensaje;
}

// Función auxiliar para limpiar todos los campos
function limpiarFormulario3() {
    // Borramos el contenido de los campos de entrada
    document.getElementById('totalCuenta').value = '';
    document.getElementById('descuentoFidelidad').value = '';
    
    // Ocultamos el área de resultados
    document.getElementById('resultado').style.display = 'none';
}

/***************************************************************************************************/
function calcularDescuentoAjustado() {
    // PASO 1: Obtener los datos del formulario
    // Leemos el precio de la compra
    precioCompra = parseFloat(document.getElementById('precioCompra').value);
    // Leemos el tipo de cliente seleccionado
    tipoCliente = document.getElementById('tipoCliente').value;
    // Verificamos si el cliente tiene discapacidad (checkbox marcado = true, no marcado = false)
    esDiscapacitado = document.getElementById('esDiscapacitado').checked;
    if (tipoCliente === '') {
        alert('Por favor, selecciona un tipo de cliente');
        return; // Salimos de la función si no hay tipo seleccionado
    }
    // PASO 3: Definir el descuento base
    // Todos los clientes tienen un descuento base del 10%
    descuentoBase = 10;
    aumentoDescuento = 0; // Inicializamos el aumento en 0
    
    // PASO 4: Aplicar las reglas de ajuste según el tipo de cliente
    // REGLA 1: Si es tipo A O es discapacitado, aumento del 20%
    if (tipoCliente === 'A' || esDiscapacitado === true) {
        aumentoDescuento = 20;
    }
    // REGLA 2: Si es tipo B Y NO es discapacitado, aumento del 15%
    else if (tipoCliente === 'B' && esDiscapacitado === false) {
        aumentoDescuento = 15;
    }
    // REGLA 3: Si es tipo C, aumento del 10%
    else if (tipoCliente === 'C') {
        aumentoDescuento = 10;
    }
    // REGLA 4: Cualquier otro tipo, no hay aumento (queda en 0)
    else {
        aumentoDescuento = 0;
    }
    // PASO 5: Calcular el descuento final
    // Descuento final = descuento base + aumento
    descuentoFinal = descuentoBase + aumentoDescuento;
    
    // PASO 6: Calcular los montos en dinero
    // Monto del descuento = (precio × descuento final) ÷ 100
    montoDescuento = (precioCompra * descuentoFinal) / 100;
    // Precio final = precio original - descuento
    precioFinal = precioCompra - montoDescuento;
    
    // PASO 7: Preparar el mensaje con todos los detalles
    mensaje = '<h3>📋 Análisis de Descuento:</h3>';
    mensaje += '<div class="detalle"><strong>Precio original:</strong>'

    // PASO 8: Mostrar el resultado en pantalla
    // Obtenemos el elemento HTML donde mostraremos el resultado
    elementoResultado = document.getElementById('resultado');
    // Insertamos nuestro mensaje en ese elemento
    elementoResultado.innerHTML = mensaje;
    // Hacemos visible el elemento resultado
}
    
// Función para limpiar el formulario
function limpiarFormulario4() {
    // Limpiamos el campo del precio
    document.getElementById('precioCompra').value = '';
    // Reseteamos el selector de tipo de cliente
    document.getElementById('tipoCliente').value = '';
    // Desmarcamos el checkbox de discapacidad
    document.getElementById('esDiscapacitado').checked = false;
    
    // Ocultamos el área de resultados
    document.getElementById('resultado').style.display = 'none';
}

/**********************************************************************************************/
//Realice un programa que ingrese un menjase y el numero de veces que requiera,
//muestre por pantalla las veces que se repita el mensaje
function presentarNombre(){
//    debugger
    nombre = document.getElementById("nombre").value
    veces = parseInt(document.getElementById("veces").value)
    contador = 1
    ac = 0
    mensaje = ""
    resultado = document.getElementById("resultado")
    mensaje = '<h3 style="color: #5dade2;">Mostrando' + ' ' + nombre + ' ' + veces + ' veces</h3>' + '<br>'
    resultado.innerHTML = mensaje
    while (contador <= veces){
        ac += contador
        resultado.innerHTML = resultado.innerHTML + contador + '.' + ' ' + nombre + "<br>"
        contador = contador + 1
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + veces + ' ' + 'repeticiones completadas</h4>'
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total suma:' + ' ' + ac + ' ' + 'acumuladas</h4>'
}

function limpiarPantalla6(){
    document.getElementById('nombre').value=''
    document.getElementById('veces').value=''
    document.getElementById('resultado').style.display = 'none'
}

function presentarMensaje(){
    mensaje = document.getElementById('mensaje').value
    respuesta = ''
    contador = 10
    re = 1 // repeticiones
    ac = 0 // acumuladas
    resultado = document.getElementById('resultado2')
    respuesta = '<h3 style="color: #5dade2;">Mostrando' + ' ' + mensaje + ' ' + contador + ' ' + 'veces hacia atrás</h3>' + '<br>'
    resultado.innerHTML = respuesta
    while (contador >= 1){
        ac += contador
        resultado.innerHTML = resultado.innerHTML + contador + '.' + ' ' + mensaje + '<br>'
        contador = contador - 1
        if ( re <= contador){
            re += contador
        }
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + re + ' ' + 'repeticiones completadas</h4>'
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total suma:' + ' ' + ac + ' ' + 'acumuladas</h4>'
} 

function presentarMensaje3(){
    msm = document.getElementById('msm').value
    cantidad = parseInt(document.getElementById('cantidad_').value)
    respuesta = ''
    contador = 2 // 2 Par y 1 Impar
    re = 0 // repeticiones
    ac = 0 // acumuladas

    resultado = document.getElementById('resultado3')
    respuesta = '<h3 style="color: #5dade2;">Mostrando los números pares</h3>' + ' ' + cantidad + '<br>'
    resultado.innerHTML = respuesta
    while (contador <= cantidad){
        ac += contador
        resultado.innerHTML = resultado.innerHTML + contador + '.' + ' ' + msm + '<br>'
        contador += 2 // suman 2 en 2 
        if (re <= cantidad ){
            re += 1 // total de salida repeticiones
        }
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + re + ' ' + 'repeticiones completadas'
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total suma:' + ' ' + ac + ' ' + 'acumuladas'
}

// function presentarNombre(){
//     //debugger
//     nombre = "", veces = 0, contador = 0, mensaje = ""

//     nombre = document.getElementById("nombre").value
//     veces = parseInt(document.getElementById("veces").value)
    
//     mensaje = '<h3>Se repiten n veces el nombre</h3>' + '</br>'
//     while (contador < veces){
//         mensaje += '<div>' + nombre + '</div>' + '</br>'
//         contador = contador + 1
//     }

//     resultado = document.getElementById('resultado')
//     resultado.innerHTML = mensaje
// }


//***************************************************************************************************/

function presentarNumero(){
    numero = parseInt(document.getElementById('numero').value)
    respuesta = ''
    contador = 1
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Mostrando' + ' ' + numero + ' ' + 'veces</h3>' + '<br>'
    resultado.innerHTML = respuesta
    while (contador <= numero){
        resultado.innerHTML = resultado.innerHTML + contador + '<br>'
        contador += 1
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + numero + ' ' + 'repeticiones completadas</h4>'
}

/***************************************************************************************************/
/* function numerosPares(){
    numero = parseInt(document.getElementById('numero').value)

    contador = 2
    siPar = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Verificamos si el número' + ' ' + numero + ' ' + ' es Par</h3><br>'
    resultado.innerHTML = respuesta
    while (contador <= numero){
        resultado.innerHTML = resultado.innerHTML + contador + ' ' + 'Es un número Par' + '<br>'
        contador += 2
        if (siPar <= numero){
            siPar += 1
        }
        resultado.innerHTML = resultado.innerHTML + contador + ' ' + 'No un número Par' + '<br>'
    }
    resultado.innerHTML += '<br><h4>El total de números '+ ' ' + siPar + ' ' + 'Pares completos</h4>'
} */

function numerosPares(){
    numero = parseInt(document.getElementById('numero').value)
    i = 1
    contador = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Verificamos si el número' + ' ' + numero + ' ' + ' es Par</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= numero){
        if (i % 2 === 0){
            resultado.innerHTML = resultado.innerHTML + i + '.' + ' ' + 'Es un número Par' + '<br>'
            contador = contador + 1
        }
        i = i + 1
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7643;">El total de'+ ' ' + contador + ' ' + 'números Pares completos</h4>'
}
// 🔥 RETOS PARA PRACTICAR:
// 1. Cambia para mostrar números impares
// 2. Muestra múltiplos de 3: 3, 6, 9, 12...
// 3. Cuenta solo los pares mayores a 10
// 4. Muestra pares y su cuadrado: "4 -> 16" */

/***************************************************************************************************/
function presentarMultiplo(){
    numero = parseInt(document.getElementById('numero').value)
    i = 1
    contador = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Números múltiplos de 3 del ( 1 al' + ' ' + numero + ' ' + ' )</h3>' + '<br>'
    resultado.innerHTML = respuesta
    while (i <= numero){
        if ( i % 3 === 0){
            resultado.innerHTML = resultado.innerHTML + i + '<br>'
            contador+= 1
        }
        i +=1
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repeticiones completadas</h4>'
}

/***************************************************************************************************/

function presentarMultiplo_X(){
    multiplo = parseInt(document.getElementById('multiplo').value)
    limite = parseInt(document.getElementById('limite').value)
    i = 1
    contador = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3>Número Multiplo de' + ' ' + multiplo + '</h3>' + '<br>'
    resultado.innerHTML = respuesta
    while (i <= limite){
        if (i % multiplo === 0){
            resultado.innerHTML = resultado.innerHTML + i + '<br>'
            contador = contador + 1
        }
        i = i + 1
    }
    resultado.innerHTML += '<br>' + '<h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repeticiones completadas</h4>'
}

/***************************************************************************************************/
/* function presentarTabla(){
    tabla = parseInt(document.getElementById("tabla").value)
    mensaje = ''
    res = 0
    i= 1
    contador = 0
    resultado = document.getElementById("resultado")
    mensaje = '<h3 style="color: #5dade2;">Tabla de sumar del' + ' ' + tabla + ' ' + '</h3><br>'
    resultado.innerHTML = mensaje
    while (i <= 12) { //veces
        res = i + tabla
        resultado.innerHTML = resultado.innerHTML + tabla + '+' + i + '=' + res + '</br>'
        i = i + 1
        if (contador <= 12){
            contador = contador + 1
        }
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repeticiones completadas</h4>'
} */

    function presentarTabla(){
    tabla = parseInt(document.getElementById("tabla").value)
    limite = parseInt(document.getElementById("limite").value)
    mensaje = ''
    res = 0
    i= 1
    contador = 0
    resultado = document.getElementById("resultado")
    mensaje = '<h3 style="color: #5dade2;">Tabla de sumar del' + ' ' + tabla + ' ' + '</h3><br>'
    resultado.innerHTML = mensaje
    while (i <= limite) { 
        res = i + tabla
        resultado.innerHTML = resultado.innerHTML + tabla + '+' + i + '=' + res + '</br>'
        i = i + 1
        if (contador <= limite){
            contador = contador + 1
        }
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repeticiones completadas</h4>'
}

/***************************************************************************************************/
function tablaMultiplicar(){
    tabla = parseInt(document.getElementById('tabla').value)
    inicio = parseInt(document.getElementById('inicio').value)
    fin =parseInt(document.getElementById('fin').value)
    calcular = 0
    i = inicio
    respuesta = ''
    contador = 0
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">La tabla de multiplicar del' + ' ' + tabla + ' ' + '</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= fin){
        calcular = i * tabla
        resultado.innerHTML = resultado.innerHTML + tabla + '*' + i + '=' + calcular + '<br>'
        i = i + 1
        if (contador <= fin){
            contador = contador + 1
        }
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repeticiones completadas</h4>'
}

/***************************************************************************************************/
function presentarAyB(){
    a = parseInt(document.getElementById('numero1').value)
    b = parseInt(document.getElementById('numero2').value)
    i = a
    respuesta = ''
    contador = 0
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Los números de entre' + ' ' + a + ' ' + 'y' + ' ' + b + ' ' + '</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= b){
        resultado.innerHTML = resultado.innerHTML + i + '<br>'
        i = i + 1
        if (contador <= b){
            contador = contador + 1
        }
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total:' + ' ' + contador + ' ' + 'repetidos completadas</h4>'
}

/***************************************************************************************************/
function paresAyB(){
    a = parseInt(document.getElementById('numero1').value)
    b = parseInt(document.getElementById('numero2').value)
    i = a
    respuesta = ''
    contador = 0
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Los numeros pares de' + ' ' + a + ' ' + 'y' + ' ' + b + ' ' + '</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= b){
        if (i % 2 === 0){
            resultado.innerHTML = resultado.innerHTML + i + ' ' + '(Es número Par)' + '<br>'
            contador = contador + 1 // cuenta las repeticiones mostradas por pantalla
        }
        i = i + 1 // Suma los valores y se determina los números son pares
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total' + ' ' + contador + ' ' + 'números pares completadas</h4>'
}

/***************************************************************************************************/
function sumaParesAyB(){
    a = parseInt(document.getElementById('numero1').value)
    b = parseInt(document.getElementById('numero2').value)
    i = a
    suma = 0
    respuesta = ''
    contador = 0
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Los numeros pares de' + ' ' + a + ' ' + 'y' + ' ' + b + ' ' + '</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= b){
        if (i % 2 === 0){
            resultado.innerHTML = resultado.innerHTML + i + ' ' + '(Es número Par)' + '<br>'
            suma = suma + i
            contador = contador + 1 // cuenta las repeticiones mostradas por pantalla
        }
        i = i + 1 // Suma los valores y se determina los números son pares
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total' + ' ' + contador + ' ' + 'números pares completadas</h4>'
    resultado.innerHTML += '<br><h4 style="color: #2ecc71;">La suma total' + ' ' + suma + ' ' + 'de números pares completadas</h4>'
}

/***************************************************************************************************/
function divisoresX(){
    numero = parseInt(document.getElementById('numero').value)
    i = 1
    divisores = [] // Array para almacenar los divisores
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Divisores de' + ' ' + numero + ' ' + ':</h3><br>'
    resultado.innerHTML = respuesta
    
    // Encontrar todos los divisores y almacenarlos
    while (i <= numero){ // 1 <= 12 si
        if (numero % i === 0){ // 12 modulo 1 = 0
            divisores.push(i) // Guardamos el divisor dentro del array [1, 2, 3, 4, 6, 12]
        }
        i = i + 1  // 1 + 1 => 2
    }
    // Mostrar los divisores (ya vienen ordenados de menor a mayor)
    resultado.innerHTML += divisores.join('<br>') + '<br>' // Se muestran en columna
    resultado.innerHTML += '<br>Divisores:' + ' ' + '[' + divisores.join(', ') + ']' + '<br>'
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Cantidad de divisores:' + ' ' + divisores.length + ' ' + '</h4>'
}
/* divisores = [1, 2, 3, 4, 6, 12]
divisores.join('<br>')  // Resultado: "1<br>2<br>3<br>4<br>6<br>12"

divisores.join(', ')    // "1, 2, 3, 4, 6, 12"
divisores.join(' - ')   // "1 - 2 - 3 - 4 - 6 - 12"  
divisores.join('')      // "12345612" (sin separador)*/
/*function divisoresX(){
    numero = parseInt(document.getElementById('numero').value)

    i = 1
    contador = 0
    divisor = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Divisores de' + ' ' + numero + ' ' + ':</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= numero){
        if (numero % i === 0){
            divisor = numero / i
            resultado.innerHTML = resultado.innerHTML + divisor + '<br>' // numero + '/' + i + '=' +
            contador = contador + 1
        }
        i = i + 1
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total de' + ' ' + contador + ' ' + 'numeros completados</h4>'
    //resultado.innerHTML = '<br><h4 style="color: #dc7633;">La suma de' + ' ' + contador + ' ' + 'numeros completados</h4>'
} */
/* function divisoresX(){
    debugger
    numero = parseInt(document.getElementById('numero').value)
    
    i = 1
    contador = 0
    divisores = [] // Array para almacenar los divisores
    respuesta = ''
    resultado = document.getElementById('resultado')
    
    respuesta = '<h3 style="color: #5dade2;">Divisores de' + ' ' + numero + ' ' + ':</h3><br>'
    resultado.innerHTML = respuesta
    
    // Encontrar todos los divisores y almacenarlos
    while (i <= numero){
        if (numero % i === 0){
            divisores.push(i) // Guardamos el divisor dentro del array
            contador = contador + 1
        }
        i = i + 1
    }

    // Ordenar los divisores de menor a mayor (ya están ordenados, pero por claridad)
    divisores.sort((a, b) => a - b) // 6 - 4 = 2  
    
    // Mostrar los divisores ordenados
    for (let j = 0; j < divisores.length; j++) {
        resultado.innerHTML += divisores[j] + '<br>'
    }
    resultado.innerHTML += '<br><h4 style="color: #dc7633;">Total de' + ' ' + contador + ' ' + 'numeros completados</h4>' //contador.length(i)
} */

/***************************************************************************************************/
function sumaDivisores(){
    numero = parseInt(document.getElementById('numero').value)
    i = 1
    suma = 0
    divisores = [] // Array para almacenar los divisores
    respuesta = ''
    resultado = document.getElementById('resultado') 
    respuesta = '<h3 style="color: #5dade2;">Calculando la suma de divisores' + ' ' + numero + ' ' + ':</h3><br>'
    resultado.innerHTML = respuesta
    
    // Encontrar todos los divisores y almacenarlos
    while (i <= numero){ // 1 <= 12 si
        if (numero % i === 0){ // 12 modulo 1 = 0
            divisores.push(i) // Guardamos el divisor dentro del array [1, 2, 3, 4, 6, 12]
            suma = suma + i 
        }
        i = i + 1  // 1 + 1 => 2
    }
    // Mostrar los divisores (ya vienen ordenados de menor a mayor)
    resultado.innerHTML += divisores.join(' (Sumando)<br>') + ' ' + '(Sumando)' + ' ' + '<br>' // Se muestran en columna
    resultado.innerHTML += '<br>Divisores:' + ' ' + '[' + divisores.join('+ ') + ']' + '<br>'
    resultado.innerHTML += '<br><h4 style="color: #2ecc71;">Suma total de divisores:' + ' ' + suma + ' ' + '</h4>'
    resultado.innerHTML += '<h4 style="color: #dc7633;">Cantidad de divisores:' + ' ' + divisores.length + ' ' + '</h4>'
}

/***************************************************************************************************/
function numeroPerfecto(){
    numero = parseInt(document.getElementById('numero').value)
    i = 1
    suma = 0
    divisores = [] // Array para almacenar los divisores
    respuesta = ''
    verificar = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Verificando si' + ' ' + numero + ' ' + 'es un número perfecto...</h3><br>'
    resultado.innerHTML = respuesta
    
    // Encontrar todos los divisores y almacenarlos
    while (i < numero){ // 1 <= 12 si
        if (numero % i === 0){ // 12 modulo 1 = 0
            divisores.push(i) // Guardamos el divisor dentro del array [1, 2, 3, 4, 6, 12]
            suma = suma + i 
        }
        i = i + 1  // 1 + 1 => 2
    }
    if (suma === numero){
        verificar = '<h5 style="color: #34495e;">✅' + ' ' + numero + ' ' + '¡Es un número perfecto!</h5>'
    } else {
        verificar = '<h5 style="color: #34495e;">❌' + ' ' + numero + ' ' + '!No es un número perfecto¡</h5>' 
    }
    // Mostrar los divisores (ya vienen ordenados de menor a mayor)
    resultado.innerHTML += divisores.join(' (divisor propio)<br>') + ' ' + '(divisor propio)' + ' ' + '<br>' // Se muestran en columna
    resultado.innerHTML += '<br>Divisores:' + ' ' + '[' + divisores.join('+ ') + ']' + '<br>'
    resultado.innerHTML += '<br>' + verificar
    resultado.innerHTML += '<br><h4 style="color: #2ecc71;">Suma total de divisores:' + ' ' + suma + ' ' + '</h4>'
    resultado.innerHTML += '<h4 style="color: #dc7633;">Cantidad de divisores:' + ' ' + divisores.length + ' ' + '</h4>'
}

/***************************************************************************************************/
function numeroPrimo(){
    numero = parseInt(document.getElementById('numero').value)
    suma = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Verificando si' + ' ' + numero + ' ' + 'es un número primo...</h3><br>'
    resultado.innerHTML = respuesta
    if (numero < 2){
        resultado.innerHTML = resultado.innerHTML + '<h5 style="color: #34495e;">❌' + ' ' + numero + ' ' + '¡No es primo! (debe ser >= 2)</h5>'
    } else{
        esPrimo = true
        i = 2
        divisoresEncontados = [] // Array para almacenar los divisores
        while (i < numero && esPrimo){
            if (numero % i === 0){
                esPrimo = false
                divisoresEncontados.push(i)
                resultado.innerHTML = resultado.innerHTML + '<h5 style="color: #7d3c98;">🔍' + ' ' + 'Divisores encontados:' + ' ' + i + '</h5>'
            } else {
                resultado.innerHTML = resultado.innerHTML + '<h5 style="color: #138d75;">✅' + ' ' + i + ' ' + 'no divide a' + ' ' + numero + '</h5>'
            }
            i = i + 1
        }
        if (esPrimo){
            resultado.innerHTML = resultado.innerHTML + '<br><h4 style="color: #008B8B;">🎉' + ' ' + numero + ' ' + '¡Es un número primo!' + '</h4>'
            resultado.innerHTML = resultado.innerHTML + '<h4 style="color: #FF7F50;">No se encotraron divisores</h4>'
        } else {
            resultado.innerHTML = resultado.innerHTML + '<h4 style="color: #ADFF2F;">❌' + ' ' + numero + ' ' + '¡No es primo!' + '</h4>'
        }
        resultado.innerHTML += '<br><h4 style="color: #708090;">Divisores encontrados:' + ' ' + '[' + divisoresEncontados.join(', ') + ']</h4>'
    }
}

/***************************************************************************************************/
function multiplicarSuma(){
    numero1 = parseInt(document.getElementById('numero1').value)
    numero2 = parseInt(document.getElementById('numero2').value)
    i= 1
    suma = 0
    respuesta = ''
    resultado = document.getElementById('resultado')
    respuesta = '<h3 style="color: #5dade2;">Multiplicando' + ' ' + numero1 + ' ' + 'y' + ' ' + numero2 + ' ' + 'por sumas sucesivas:</h3><br>'
    resultado.innerHTML = respuesta
    while (i <= numero2){
        suma = suma + numero1
        resultado.innerHTML = resultado.innerHTML + 'Suma' + ' ' + i + ': ' + suma + ' (+ ' + numero1 + ')<br>'
        i = i + 1
    }
    resultado.innerHTML += '<br><h4 style="color: #2ecc71;">Resultado:' + ' ' + numero1 + ' × ' + numero2 + ' = ' + suma + '</h4>'
    resultado.innerHTML += '<h4 style="color: #dc7633;">Verificación:' + ' ' + (numero1 * numero2) + '</h4>'
}

/*******************************Ejercicios de JavaScript con Arreglos*****************************/
/* function arregloSinCiclos(){
    let texto = document.getElementById('arreglo').value
    let arreglo = texto.split(";")
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = '<h3 style="color: #5dade2;">Verificando los datos:' + ' ' + texto + '</h3><br>'
    resultado.innerHTML += arreglo.join(", ")
} */
function arregloSinCiclos(){
    // Se obtiene el string del input con id="arreglo"
    const texto = document.getElementById('arreglo').value;

    // Convierte el texto en array usando ";" como separador
    const arreglo = texto.split(";"); //Aquí se está convirtiendo en array

    // Obtiene el elemento donde mostrar el resultado
    const resultado = document.getElementById('resultado');

    // Escribe el título con los datos ingresados en el input
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificando los datos: <span style="color: #dc7633;">${texto}</span></h3><br>`; //<br> + arreglo.join("+ ")

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(", ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos del string es: `+ arreglo.length + `</h4>`;
}

/***************************************************************************************************/
function arregloPush(){
    // Obtenemos el string inicial con id="inicio"
    const elemento_inicial = document.getElementById('inicio').value;

    // Obtenemos los elementos para agregar al final del arreglo con id="final"
    const elemento_final = document.getElementById('final').value;

    // Convierte el string inicial a array usando ";" como separador
    const arreglo = elemento_inicial.split(";"); // Aquí se está convirtiendo en array Separador punto y coma

    // Convierte los elementos finales a array y los agrega todos al arreglo
    const nuevo_elementos = elemento_final.split(";"); // Aquí se está convirtiendo en array Separador punto y coma

    //El operador spread (...valor) toma todos los elementos del array y agrega elementos individualmente al array.
    arreglo.push(...nuevo_elementos);

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${elemento_inicial}</span> y Finales: <span style="color: #dc7633;">${elemento_final}</span></h3><br>`;

    // Convertimos el array a string, lo unimos y se separa con comas (,). Mostramos los resultados
    resultado.innerHTML += `<h4>` + arreglo.join(", ") + `<h4><br>`; // Aquí se está convirtiendo a string
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos del string es: `+ arreglo.length + `</h4>`;
}

/***************************************************************************************************/
function arregloSinPush(){
    // Se obtiene el string del input con id="arreglo"
    const texto = document.getElementById('inicio').value;

    // Convierte el texto en array usando ";" como separador
    const arreglo = texto.split(";"); //Aquí se está convirtiendo en array
 
    const nuevo_elementos = arreglo;
    nuevo_elementos[3] = "Persona";

    // Obtiene el elemento donde mostrar el resultado
    const resultado = document.getElementById('resultado');

    // Escribe el título con los datos ingresados en el input
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificando los datos: <span style="color: #dc7633;">${texto}</span></h3><br>`; //<br> + arreglo.join("+ ")

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(", ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos del string es: `+ arreglo.length + `</h4>`;
}

/***************************************************************************************************/
function cadena(){
    const frase = document.getElementById('inicio').value;
    const arreglo = frase.split(";");
    const resultado = document.getElementById('resultado');

    // Escribe el título con los datos ingresados en el input
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificamos la frase: <span style="color: #dc7633;">${frase}</span></h3><br>`;

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(" ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos del string es: ${arreglo.length}` + `</h4>`;

}

/***************************************************************************************************/
function caracteres(){
    const palabra = document.getElementById('inicio').value;
    const arreglo = palabra.split();
    const resultado = document.getElementById('resultado');
    const contar_elemento = palabra.length

    // Escribe el título con los datos ingresados en el input
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificamos la palabra: <span style="color: #dc7633;">${palabra}</span></h3><br>`;

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(" ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de cantidad de caracteres es:  ${contar_elemento}` + `</h4>`;
}

/***************************************************************************************************/
function arregloLetras(){
    const palabra = document.getElementById('inicio').value;
    const arreglo = palabra.split(""); //Quitar el ; para contar y separar las palabras
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificamos la palabra: <span style="color: #dc7633;">${palabra}</span></h3><br>`;

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(""+ '<br>') + `</h4><br>`; // el br dentro del join lo mostramos en colunma las letras
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de cantidad de letras:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloLetraSeparadas(){
    const palabra = document.getElementById('inicio').value;
    const arreglo = palabra.split("");
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Verificamos la palabra: <span style="color: #dc7633;">${palabra}</span></h3><br>`;

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(", ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de letras separadas:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloCadenaNumero(){
    const numero = document.getElementById('inicio').value;
    const arreglo = numero.split(";") .map(Number);
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos los números ingresados: <span style="color: #dc7633;">${numero}</span></h3><br>`;

    // Converte el array a string (usando comas por defecto).
    // El join() te da control y es más claro sobre cómo quieres que se vean los elementos separados.
    resultado.innerHTML += `<h4>` + arreglo.join(", ") + `</h4><br>`;
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de letras separadas:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
/* function arregloFor(){
    const elemento = document.getElementById('inicio').value;
    const arreglo = elemento.split(";");
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos los números ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    for (let i = 0; i < arreglo.length; i++) { 
        resultado.innerHTML = resultado.innerHTML + `<h4>` + arreglo[i] + `</h4>`;
    }
    //resultado.innerHTML += `<h4>` + arreglo.join(", ") + `</h4><br>`;
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de letras separadas:  ${arreglo.length}` + `</h4>`;
} */
function arregloFor(){
    const elemento = document.getElementById('inicio').value;
    const arreglo = elemento.split(";");
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos el arreglo ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    for (let i = 0; i < arreglo.length; i++) { 
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo[i]}</h4>`;
    }
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de cantidad:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloWhile(){
    const elemento = document.getElementById('inicio').value;
    const arreglo = elemento.split(";");
    let i = 0;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos el arreglo ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    while (i < arreglo.length){
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo[i]}</h4>`;
        i = i + 1;
    }
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de cantidad:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloLetraFor(){
    const palabra = document.getElementById('inicio').value;
    const arreglo = palabra.split(""); //Quitar el ; para contar y separar las palabras
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos el arreglo ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    for (let i = 0; i < arreglo.length; i++) { 
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo[i]}</h4>`;
    }
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de cantidad de letras:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloLetraWhile(){
    const palabra = document.getElementById('inicio').value;
    const arreglo = palabra.split(""); //Quitar el ; para contar y separar las palabras
    let j = 0;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos el arreglo ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    while (j < arreglo.length){
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo[j]}</h4>`;
        j = j + 1;
    }
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de cantidad:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloVocales(){
    const elemento = document.getElementById('inicio').value;
    const arreglo = elemento.split("");
    let vocales = 0;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h3 style="color: #5dade2;">Mostramos el arreglo ingresados: <span style="color: #dc7633;">${arreglo}</span></h3><br>`;
    for (let i = 0; i < arreglo.length; i++) {
        const letra = arreglo[i].toLowerCase(); // toLowerCase() => Convierte a minúscula para comparar
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo[i]}</h4>`; // letra${i + 1}:
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
            vocales = vocales + 1;
        }
    }
    resultado.innerHTML +=  `<br><h4 style="color: #800080;">Total de vocales:  ${vocales}` + `</h4>`;
    resultado.innerHTML +=  `<br><h4 style="color: #2ecc71;">Total de letras:  ${arreglo.length}` + `</h4>`;
}

/***************************************************************************************************/
/* function arregloComparar(){
    // Obtenemos el string inicial con id="inicio"
    const primer_elemento = document.getElementById('primero').value;

    // Obtenemos los elementos para agregar al final del arreglo con id="final"
    const segundo_elemento = document.getElementById('segundo').value;

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${segundo_elemento}</span></h3><br>`;
    for (let i = 0; i < primer_elemento.length; i++) {
        resultado.innerHTML += `<h4>${primer_elemento}, ${segundo_elemento}</h4>`;
        const letra1 = primer_elemento[i].toLowerCase();
        const letra2 = segundo_elemento[i].toLowerCase();
        resultado.innerHTML +=  `<h4 style="color: #800080;">¿Son iguales en posición: ${i},?` + ` ${letra1} === ${letra2}` + `</h4>`;
    }
    
    
    // Convertimos el array a string, lo unimos y se separa con comas (,). Mostramos los resultados
    //resultado.innerHTML += `<h4>` + arreglo.join(", ") + `<h4><br>`; // Aquí se está convirtiendo a string
    //resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos del string es: `+ arreglo.length + `</h4>`;
} */
/* function arregloComparar(){
    // Obtenemos el string inicial con id="inicio"
    const primer_elemento = document.getElementById('primero').value;

    // Obtenemos los elementos para agregar al final del arreglo con id="final"
    const segundo_elemento = document.getElementById('segundo').value;

    // Convierte el string inicial a array usando ";" como separador
    const arreglo = primer_elemento.split(";"); // Aquí se está convirtiendo en array Separador punto y coma

    // Convierte los elementos finales a array y los agrega todos al arreglo
    const nuevo_elemento = segundo_elemento.split(";"); // Aquí se está convirtiendo en array Separador punto y coma

    //El operador spread (...nuevo_elemento) toma todos los elementos del array y agrega elementos individualmente al array.
    arreglo.push(nuevo_elemento);

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${segundo_elemento}</span></h3><br>`;
    for (let i = 0; i < primer_elemento.length; i++) {
        resultado.innerHTML = resultado.innerHTML + `<h4>${arreglo.join(", ")}</h4>`;
        const letra1 = primer_elemento[i].toLowerCase();
        const letra2 = segundo_elemento[i].toLowerCase();
        resultado.innerHTML +=  `<h4 style="color: #800080;">¿Son iguales en posición: ${i},?` + ` ${letra1} === ${letra2}` + `</h4>`;
    }
    // Convertimos el array a string, lo unimos y se separa con comas (,). Mostramos los resultados
    resultado.innerHTML +=  `<h4 style="color: #2ecc71;">Total de elementos de la cadena es: `+ arreglo.length + `</h4>`;
} */
function arregloComparar(){
    // Obtenemos el string inicial con id="inicio"
    const primer_elemento = document.getElementById('primero').value;

    // Obtenemos los elementos para agregar al final del arreglo con id="final"
    const segundo_elemento = document.getElementById('segundo').value;

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${segundo_elemento}</span></h3><br>`;

    let iguales = 0;
    let diferentes = 0;
    for (let i = 0; i < primer_elemento.length; i++) {
        let letra1 = primer_elemento[i].toLowerCase();
        let letra2 = segundo_elemento[i].toLowerCase();
        let sonIguales = letra1 === letra2;
        resultado.innerHTML = resultado.innerHTML + `<h4 style="color: #800080;">¿Son iguales en posición: ${i},?` + ` ${sonIguales}` + `</h4>`;
        resultado.innerHTML = resultado.innerHTML + `<h4> → "${letra1}" vs "${letra2}"</h4><br>`;
        if (sonIguales){
            iguales = iguales + 1;
        } else {
            diferentes = diferentes + 1;
        }
    }
    resultado.innerHTML +=  `<h4 style="color: #191970;">✅ Posiciones iguales: ${iguales}</h4>`;
    resultado.innerHTML +=  `<h4 style="color: #D2691E;">❌ Posiciones diferentes: ${diferentes}</h4>`;
    resultado.innerHTML +=  `<h4 style="color: #20B2AA;">Palabras comparadas: ${primer_elemento} vs ${segundo_elemento}</h4>`;
}

/***************************************************************************************************/
function arregloDivisores(){
    // Obtenemos el string inicial con id="inicio"
    const elemento = document.getElementById('numero').value;

    // Dividimos el string en un arreglo
    const nuevo_elemento = elemento.split(";") .map(Number);

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Variables para primer y último elemento
    const primer_elemento = nuevo_elemento[0];
    const ultimo_elemento = nuevo_elemento[nuevo_elemento.length - 1]; // Otbenemos el último elemento del arreglo

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${ultimo_elemento}</span></h3><br>`;

    // Procesamos cada número del arreglo
    for (let i = 0; i < nuevo_elemento.length; i++){
        // Convertimos el elemento a número
        let numero = nuevo_elemento[i];

        // Agregamos el título del número
        resultado.innerHTML = resultado.innerHTML + `<h4 style="color: #000000;">Divisores de ${numero}:</h4>`;

        // Encontramos todos los divisores
        let divisores = [];
        let divisor = 1;
        while (divisor <= numero){
            if (numero % divisor === 0){
                divisores.push(divisor);
            }
            divisor = divisor + 1;
        }

        // Mostramos los divisores en horizontal usando join()
        const divisoresMostar = divisores.join(", ");
        resultado.innerHTML += `<h4 style="color: #3498db;">${divisoresMostar}</h4>`;

        // Mostramos la cantidad de divisores
        resultado.innerHTML += `<h4 style="color: #2ecc71;">Total de divisores:  ${divisores.length}` + `</h4><br>`;
    }
    resultado.innerHTML += `<h4 style="color: #ff00b7;">Total de elementos de la cadena es:  ${nuevo_elemento.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloSumaDivisores(){
    // Obtenemos el string inicial con id="inicio"
    const elemento = document.getElementById('numero').value;

    // Dividimos el string en un arreglo
    const nuevo_elemento = elemento.split(";") .map(Number);

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Variables para primer y último elemento
    const primer_elemento = nuevo_elemento[0];
    const ultimo_elemento = nuevo_elemento[nuevo_elemento.length - 1]; // Otbenemos el último elemento del arreglo

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${ultimo_elemento}</span></h3><br>`;

    // Procesamos cada número del arreglo
    for (let i = 0; i < nuevo_elemento.length; i++){
        // Convertimos el elemento a número
        let numero = nuevo_elemento[i];

        // Agregamos el título del número
        resultado.innerHTML = resultado.innerHTML + `<h4 style="color: #000000;">Divisores de ${numero}:</h4>`;

        // Encontramos todos los divisores
        let divisores = [];

        // Divisores excluyendo el propio número
        let exceptoDivisores = [];
        let divisor = 1;
        while (divisor <= numero){
            if (numero % divisor === 0){
                divisores.push(divisor);

                // Solo agregamos a divisoresSinElMismo si no es el propio número
                if (divisor !== numero){
                    exceptoDivisores.push(divisor);
                }
            }
            divisor = divisor + 1;
        }

        let sumaDivisores = 0;
        let k = 0;
        while (k < exceptoDivisores.length){
            sumaDivisores = sumaDivisores + exceptoDivisores[k];
            k = k + 1;
        }

        // Mostramos los divisores en horizontal usando join()
        const divisoresMostar = divisores.join(", ");
        resultado.innerHTML += `<h4 style="color: #3498db;">${divisoresMostar}</h4>`;

        // Mostramos los divisores sin el propio número
        const divisoresSinMostar = exceptoDivisores.join(", ");
        resultado.innerHTML += `<h4 style="color: #e74c3c;">Divisores (sin incluir ${numero}): ${divisoresSinMostar}</h4>`;

        // Mostramos la suma de los divisores (excluyendo el propio número)
        resultado.innerHTML += `<h4 style="color: #8e44ad;">Suma de divisores (sin incluir ${numero}): ${sumaDivisores}</h4>`;

        // Mostramos la cantidad de divisores
        resultado.innerHTML += `<h4 style="color: #2ecc71;">Total de divisores:  ${divisores.length}` + `</h4><br>`;
    }
    resultado.innerHTML += `<h4 style="color: #ff00b7;">Total de elementos de la cadena es:  ${nuevo_elemento.length}` + `</h4>`;
}

/***************************************************************************************************/
function arregloNumeroPerfecto(){
    // Obtenemos el string inicial con id="inicio"
    const elemento = document.getElementById('numero').value;

    // Dividimos el string en un arreglo
    const nuevo_elemento = elemento.split(";") .map(Number);

    // Obtenemos el elemento donde mostraremos los resultado
    const resultado = document.getElementById('resultado');

    // Variables para primer y último elemento
    const primer_elemento = nuevo_elemento[0];
    const ultimo_elemento = nuevo_elemento[nuevo_elemento.length - 1]; // Otbenemos el último elemento del arreglo

    // Muestra la información inicial y final del arreglo
    resultado.innerHTML = `<h3 style="color: #5dade2;">Elementos iniciales: <span style="color: #dc7633;">${primer_elemento}</span> y Finales: <span style="color: #dc7633;">${ultimo_elemento}</span></h3><br>`;

    // Procesamos cada número del arreglo
    for (let i = 0; i < nuevo_elemento.length; i++){
        // Convertimos el elemento a número
        let numero = nuevo_elemento[i];

        // Agregamos el título del número
        resultado.innerHTML = resultado.innerHTML + `<h4 style="color: #000000;">Divisores de ${numero}:</h4>`;

        // Encontramos todos los divisores
        let divisores = [];
        let exceptoDivisores = [];
        let divisor = 1;
        while (divisor <= numero){
            if (numero % divisor === 0){
                divisores.push(divisor);

                // Solo agregamos a divisoresSinElMismo si no es el propio número
                if (divisor !== numero) {
                    exceptoDivisores.push(divisor);
                }
            }
            divisor = divisor + 1;
        }

        let sumaDivisores = 0;
        let k = 0;
        while (k < exceptoDivisores.length){
            sumaDivisores = sumaDivisores + exceptoDivisores[k];
            k = k + 1;
        }

        // Verificamos si el número es perfecto
        let esPerfecto = false;
        let tipoNumero = '';
        if (sumaDivisores === numero) {
            esPerfecto = true;
            tipoNumero = 'PERFECTO';
        } else if (sumaDivisores > numero) {
            tipoNumero = 'ABUNDANTE';
        } else {
            tipoNumero = 'DEFICIENTE';
        }

        // Mostramos los divisores en horizontal usando join()
        const divisoresMostar = divisores.join(", ");
        resultado.innerHTML += `<h4 style="color: #3498db;">${divisoresMostar}</h4>`;

        // Mostramos los divisores sin el propio número
        const divisoresSinMostar = exceptoDivisores.join(", ");
        //resultado.innerHTML += `<h4 style="color: #e74c3c;">Divisores (sin incluir ${numero}): ${divisoresSinMostar}</h4>`;

        // Mostramos la suma de los divisores (excluyendo el propio número)
        //resultado.innerHTML += `<h4 style="color: #8e44ad;">Suma de divisores (sin incluir ${numero}): ${sumaDivisores}</h4>`;

        resultado.innerHTML += `<h4 style="color: #497e76;">🔍 ${numero} es un número ${tipoNumero}</h4>`;

        // Explicación adicional para números perfectos
        if (esPerfecto) {
            resultado.innerHTML += `<h5 style="color: #141e8c; font-style: italic;">✨ ¡Excelente! ${numero} es perfecto porque ${divisoresSinMostar.replace(/, /g, ' + ')} = ${sumaDivisores}</h5>`;
        }

        // Mostramos la cantidad de divisores
        resultado.innerHTML += `<h4 style="color: #2ecc71;">Total de divisores:  ${divisores.length}` + `</h4><br>`;
    }
    resultado.innerHTML += `<h4 style="color: #ff00b7;">Total de elementos de la cadena es:  ${nuevo_elemento.length}` + `</h4>`;
}