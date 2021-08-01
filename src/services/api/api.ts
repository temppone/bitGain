/* eslint-disable arrow-body-style */
import { getToday } from '../../core/parsers/DateParses';

/* eslint-disable operator-linebreak */
export const apiBrita =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)';

// eslint-disable-next-line arrow-body-style
export const BRITA_VALUE_DATE_GET = (date: string) => {
    return {
        url: `${apiBrita}`,
        params: {
            '@dataCotacao': date,
        },
        options: {
            method: 'GET',
        },
    };
};

export const BRITA_VALUE_TODAY_GET = () => {
    return {
        url: `${apiBrita}`,
        params: {
            '@dataCotacao': getToday(),
        },
        options: {
            method: 'GET',
        },
    };
};
