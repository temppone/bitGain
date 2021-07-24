/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import {
    HomeContainer,
    HomeIntro,
    HomeSalutation,
    HomeTitle,
    HomeButtons,
    HomeBackButton,
} from './styles';
import { ReactComponent as HomeSvg } from './img/homeSvg.svg';
import Button from '../../components/Button';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';
import { defaultTheme } from '../../styles/theme';

const Home = () => {
    const [divToRender, setDivToRender] = useState<'signIn' | 'signUp' | 'none'>('none');
    const [homeIntro, setHomeIntro] = useState(true);

    const divs = {
        signIn: <SignIn />,
        signUp: <SignUp />,
        none: null,
    };

    return (
        <HomeContainer>
            {!homeIntro && (
                <HomeBackButton
                    onClick={() => {
                        setHomeIntro(true);
                        setDivToRender('none');
                    }}
                />
            )}

            {homeIntro && <HomeSvg width='80%' height='25rem' />}
            {homeIntro && (
                <HomeIntro>
                    <HomeTitle>
                        Compra e venda de <span>Bitcoin é aqui!</span>
                    </HomeTitle>
                    <HomeSalutation>
                        A corretora completa para investir com segurança nas criptomoedas.
                    </HomeSalutation>
                </HomeIntro>
            )}

            {homeIntro && (
                <HomeButtons>
                    <Button
                        width='auto'
                        name='Login'
                        background={defaultTheme.palette.primaryLight}
                        color={defaultTheme.palette.primaryDark}
                        onClick={() => {
                            setDivToRender('signIn');
                            setHomeIntro(false);
                        }}
                    />
                    <Button
                        width='auto'
                        name='Cadastrar-se'
                        background='transparent'
                        color={defaultTheme.palette.primaryLight}
                        onClick={() => {
                            setDivToRender('signUp');
                            setHomeIntro(false);
                        }}
                    />
                </HomeButtons>
            )}

            {divs[divToRender]}
        </HomeContainer>
    );
};
export default Home;
