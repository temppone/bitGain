import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
    palette: {
        primaryDark: '#141414',
        secundaryDark: '#262626',
        tertiaryDark: '#4c4c4c',

        primaryLight: '#ffffff',
        secundaryLight: '#e6e6e6',
        tertiaryLight: '#d8d8d8',

        contrast: '#FAC43F',

        warning: '#F64B4C',
    },

    breakpoints: {
        xs: '480px',
        sm: '600px',
        md: '801px',
        lg: '1025px',
        xl: '1281px',
    },
};
