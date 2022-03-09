//import sumar from "./impues";

const form = document.querySelector("#totalizador-form");

const cantidad_item = document.querySelector("#cantidad-item");
const div_cantidad_item = document.querySelector("#cantidad-item-div");

const precio_item = document.querySelector("#precio-item");
const div_precio_item = document.querySelector("#precio-item-div");

const codigo_estado = document.querySelector("#codigo-estado");
const div_codigo_estado = document.querySelector("#codigo-estado-div"); 

const div_impuesto_estado = document.querySelector("#impuesto-estado-div");
const div_descuento = document.querySelector("#descuento-div");

const div_precio_neto = document.querySelector("#precio-neto-div");

const div_precio_total = document.querySelector("#precio-total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
   
  var precio_neto = precio_item.value * cantidad_item.value;
  div_cantidad_item.innerHTML = "<p> Cantidad de item: " + cantidad_item.value + "</p>";
  div_precio_item.innerHTML = "<p> Precio de item: " + precio_item.value + "</p>";

  div_codigo_estado.innerHTML = "<p> Codigo del Estado de "+ codigo_estado.value +": " + porcentaje_estado(codigo_estado.value) + "%</p>";
  div_impuesto_estado.innerHTML = "<p> Monto de Impuesto para el Estado de "+ codigo_estado.value +": " + monto_impuesto_estado(codigo_estado.value, precio_neto) + "</p>";
  var monto_descuento = (descuento(cantidad_item.value)*precio_neto)/100;
  div_descuento.innerHTML = "<p> Descuento ( " + descuento(cantidad_item.value) + "%): "+ monto_descuento + "</p>";

  div_precio_neto.innerHTML = "<p> Precio Neto: " + precio_neto + "</p>";

  div_precio_total.innerHTML = "<p> Precio Total: " + (precio_neto - monto_descuento +monto_impuesto_estado(codigo_estado.value, precio_neto))  + "</p>";

});


function porcentaje_estado(estado) {
  switch(estado){
    case 'UT': return 6.65;break;
    case 'NV': return 8;break;
    case 'TX': return 6.25;break;
    case 'AL': return 4; break;
    case 'CA': return 8.25;break;
  }
}

function monto_impuesto_estado(estado, monto)
{
  switch(estado){
    case 'CA': return (8.25 * monto)/100;break;
    case 'TX': return (6.25 * monto)/100;break;
    case 'AL': return (4 * monto)/100; break;
    case 'NV': return (8 * monto)/100;break;
    case 'UT': return (6.65 * monto)/100;break;
  }
}

function descuento(cantidad)
{
  if (cantidad < 1000) 
  {
    return 0;
  }
  else if ((cantidad => 1000) && (cantidad < 3000)) 
  {
    return 3;
  }
  else if ((cantidad => 3000) && (cantidad < 7000)) 
  {
    return 5;
  }
  else if ((cantidad => 7000) && (cantidad < 10000))
  {
    return 7;
  }
  else if ((cantidad => 10000) && (cantidad < 30000)) 
  {
    return 10;
  }
  else if (cantidad => 30000) 
  {
    return 15;
  }
}