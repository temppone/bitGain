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
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
    },
};
