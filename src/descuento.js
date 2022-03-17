function descuento(cantidad) {
    if (cantidad < 1000) {
        return 0;
    } else if ((cantidad => 1000) && (cantidad < 3000)) {
        return 3;
    } else if ((cantidad => 3000) && (cantidad < 7000)) {
        return 5;
    } else if ((cantidad => 7000) && (cantidad < 10000)) {
        return 7;
    } else if ((cantidad => 10000) && (cantidad < 30000)) {
        return 10;
    } else if (cantidad => 30000) {
        return 15;
    }
}

export default descuento;