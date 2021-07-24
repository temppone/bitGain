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
            secundaryContrast: string;

            warning: string;
            success: string;
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
