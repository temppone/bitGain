/* eslint-disable arrow-body-style */
export const toReal = (rawNumber: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(rawNumber);
};

export const toBtc = (rawNumber: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(rawNumber);
};

export const toBrita = (rawNumber: number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BRI' }).format(rawNumber);
};
