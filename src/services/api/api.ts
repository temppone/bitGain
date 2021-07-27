/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable operator-linebreak */
export const apiBrita =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata//CotacaoDolarDia(dataCotacao=@';

export const BRITA_VALUE_GET = (date: string) => ({
    url: `${apiBrita}${date})`,

    options: {
        method: 'GET',
        Headers: {
            accept: 'application/json; odata.metadata=minimal',
        },
    },
});
