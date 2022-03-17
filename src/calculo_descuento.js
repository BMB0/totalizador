import descuento from "./descuento";

function calculo_descuento(cantidad, precio_neto) {
    var monto_descuento = (descuento(cantidad) * precio_neto) / 100;
    return monto_descuento;
}

export default calculo_descuento;