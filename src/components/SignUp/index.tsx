import { yupResolver } from '@hookform/resolvers/yup';
import { ptShort } from 'yup-locale-pt';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useFirebaseContext } from '../../contexts/FirebaseContext';
import Input from '../Input';
import { SignUpContainer, SignUpForm } from './styles';
import PageTitle from '../PageTitle';
import Button from '../Button';

const SignUp = () => {
    const { createUser } = useFirebaseContext();

    type CreateUserType = {
        email: string;
        password: string;
    };

    yup.setLocale(ptShort);

    const schema: yup.SchemaOf<CreateUserType> = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateUserType>({ resolver: yupResolver(schema) });

    const signUpSubmit = (signUpUser: { email: string; password: string }) => {
        console.log(signUpUser.email, signUpUser.password);
        createUser(signUpUser);
    };
    return (
        <SignUpContainer>
            <PageTitle title='Cadastre-se' salutation='Preencha os campos' />
            <SignUpForm action='' onSubmit={handleSubmit(signUpSubmit)}>
                <Input
                    label='Email'
                    name='email'
                    // eslint-disable-next-line react/jsx-boolean-value
                    required={true}
                    register={register}
                    inputError={errors?.email?.message}
                />
                <Input
                    label='Senha'
                    name='password'
                    // eslint-disable-next-line react/jsx-boolean-value
                    required={true}
                    register={register}
                    inputError={errors?.password?.message}
                />
                {/* <Input
                    label='Confirmar senha'
                    name='passwordCofirm'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    inputError='Esse campo é necessário'
                /> */}
                <Button name='Cadastrar' width='100%' />
            </SignUpForm>
        </SignUpContainer>
    );
};

export default SignUp;
