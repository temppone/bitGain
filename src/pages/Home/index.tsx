import { useState } from 'react';
import { HomeContainer, HomeIntro, HomeButtons } from './styles';
import { ReactComponent as HomeSvg } from './img/home.svg';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

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
            <HomeSvg width='70%' />

            {homeIntro && (
                <HomeIntro>
                    <PageTitle
                        title='Compra e vendas de Bitcoin é aqui!'
                        salutation='A corretora completa para investir com segurança e praticidade nas criptomoedas mais negociadas do mundo.'
                    />
                </HomeIntro>
            )}

            <HomeButtons>
                <Button
                    width='auto'
                    name='Login'
                    onClick={() => {
                        setDivToRender('signIn');
                        setHomeIntro(false);
                    }}
                />
                <Button
                    width='auto'
                    name='Cadastrar-se'
                    onClick={() => {
                        setDivToRender('signUp');
                        setHomeIntro(false);
                    }}
                />
            </HomeButtons>

            {divs[divToRender]}
        </HomeContainer>
    );
};
export default Home;
