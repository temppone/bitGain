import { useState } from 'react';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import { SignUpContainer, SignUpForm } from './styles';
import PageTitle from '../PageTitle';
import Button from '../Button';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { createUser } = useFirebaseContext();

    const handleSubmit = () => {
        createUser({ email, password });
    };
    return (
        <SignUpContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />
            <SignUpForm>
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
                <Button onClick={handleSubmit} name='Cadastrar' width='100%' />
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
