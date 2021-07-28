/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */

import { URLSearchParams } from 'url';

/* eslint-disable operator-linebreak */
export const apiBrita =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata//CotacaoDolarDia(dataCotacao=@dataCotacao)';

export const BRITA_VALUE_GET = (date: string) => {
    const teste = new URLSearchParams();
    teste.append('datacotacao', date);

    return {
        url: `${apiBrita}${teste.toString()}`,

        options: {
            method: 'GET',
            Headers: {
                accept: 'application/json; odata.metadata=minimal',
            },
        },
    };
};
