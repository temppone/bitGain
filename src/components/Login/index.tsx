import { useState } from 'react';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import { LoginContainer, LoginForm } from './styles';
import PageTitle from '../PageTitle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser } = useFirebaseContext();

    const handleSubmit = () => {
        createUser({ email, password });
    };
    return (
        <LoginContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />
            <LoginForm>
                <Input
                    label='Email'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    inputError='Esse campo é necessário'
                />
                <Input
                    label='Senha'
                    name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    inputError='Esse campo é necessário'
                />
                <Input
                    label='Confirmar senha'
                    name='passwordCofirm'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    inputError='Esse campo é necessário'
                />
            </LoginForm>
            <button type='submit' onClick={handleSubmit}>
                Enviar
            </button>
        </LoginContainer>
    );
};

export default Login;
