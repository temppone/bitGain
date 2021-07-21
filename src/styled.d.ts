import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primaryDark: string;
            secundaryDark: string;
            tertiaryDark: string;

            primaryLight: string;
            secundaryLight: string;
            tertiaryLight: string;

            contrast: string;

            warning: string;
        };
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}