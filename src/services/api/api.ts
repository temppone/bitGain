/* eslint-disable operator-linebreak */
export const apiBrita =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?%40dataCotacao=';

// eslint-disable-next-line arrow-body-style
export const BRITA_VALUE_GET = (date: string) => {
    return {
        url: `${apiBrita}${date}&%24format=json`,

        options: {
            method: 'GET',
        },
    };
};
