import { useState } from 'react';
import { HomeContainer, HomeIntro, HomeButtons } from './styles';
import { ReactComponent as HomeSvg } from './img/home.svg';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

const Home = () => {
    const [homeIntro, setHomeIntro] = useState(true);
    const [divIntro, setDivIntro] = useState(true);

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

            {divIntro ? <SignIn /> : <SignUp />}

            <HomeButtons>
                <Button
                    width='auto'
                    name='Login'
                    onClick={() => {
                        setDivIntro(true);
                        setHomeIntro(false);
                    }}
                />
                <Button
                    width='auto'
                    name='Cadastrar-se'
                    onClick={() => {
                        setDivIntro(false);
                        setHomeIntro(false);
                    }}
                />
            </HomeButtons>
        </HomeContainer>
    );
};
export default Home;
