import calculo_descuento from "./calculo_descuento";
import porcentaje_estado from "./porcentaje_estado";
import monto_impuesto_estado from "./monto_impuesto_estado";
import descuento from "./descuento";



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
  div_precio_item.innerHTML = "<p> Precio de item: " + precio_item.value + " $</p>";

  div_codigo_estado.innerHTML = "<p> Codigo del Estado de " + codigo_estado.value + ": " + porcentaje_estado(codigo_estado.value) + "%</p>";
  div_impuesto_estado.innerHTML = "<p> Monto de Impuesto para el Estado de " + codigo_estado.value + ": " + monto_impuesto_estado(codigo_estado.value, precio_neto) + " $</p>";

  var descuento_res = descuento(cantidad_item.value);
  div_descuento.innerHTML = "<p> Descuento ( " + descuento_res + "%): " + calculo_descuento(descuento_res, precio_neto) + " $</p>";

  div_precio_neto.innerHTML = "<p> Precio Neto: " + precio_neto + " $</p>";

  div_precio_total.innerHTML = "<p> Precio Total: " + (precio_neto - monto_descuento + monto_impuesto_estado(codigo_estado.value, precio_neto)) + " $</p>";

});