import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    palette: {
        primaryDark: '#121920',
        secundaryDark: '#1C242B',
        tertiaryDark: '#334049',

        primaryLight: '#ffffff',
        secundaryLight: '#e6e6e6',
        tertiaryLight: '#d8d8d8',

        contrast: '#ffc656',
        secundaryContrast: '#2a7ccb',

        warning: '#F64B4C',
        success: '#BFFFC9',

        gradientBlue: 'linear-gradient(to right, #2a7ccb, #2177cb, #1772ca, #0b6cc9, #0067c8);',
        gradientSecundaryBlue: 'linear-gradient(100.18deg, #0060B8 13.18%, #1F2349 79.2%);',
        gradientGrey: 'linear-gradient(91.37deg, #1B242B 7.14%, rgba(27, 36, 43, 0.5) 99.52%);',
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
    },
};
