function monto_impuesto_estado(estado, monto) {
    switch (estado) {
        case 'CA':
            return (8.25 * monto) / 100;
            break;
        case 'TX':
            return (6.25 * monto) / 100;
            break;
        case 'AL':
            return (4 * monto) / 100;
            break;
        case 'NV':
            return (8 * monto) / 100;
            break;
        case 'UT':
            return (6.65 * monto) / 100;
            break;
    }
}

export default monto_impuesto_estado;